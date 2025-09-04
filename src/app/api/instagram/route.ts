import { NextRequest, NextResponse } from 'next/server'

// Instagram profil verilerini çek
async function fetchInstagramData(username: string) {
  try {
    // Instagram web sayfasını fetch et
    const response = await fetch(`https://www.instagram.com/${username}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Cache-Control': 'max-age=0'
      },
      next: { revalidate: 3600 } // 1 saat cache
    })

    if (!response.ok) {
      throw new Error(`Instagram fetch failed: ${response.status}`)
    }

    const html = await response.text()
    
    // Script tag içindeki JSON verilerini bul
    const jsonMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
    const sharedDataMatch = html.match(/window\._sharedData\s*=\s*({[\s\S]*?});/)
    
    let profileData = null
    let posts = []

    // Önce LD+JSON verilerini dene
    if (jsonMatch) {
      try {
        const jsonData = JSON.parse(jsonMatch[1])
        if (jsonData && jsonData['@type'] === 'ProfilePage') {
          profileData = {
            username: jsonData.mainEntity?.alternateName || username,
            fullName: jsonData.mainEntity?.name || '',
            bio: jsonData.mainEntity?.description || '',
            followers: jsonData.mainEntity?.interactionStatistic?.find((stat: any) => 
              stat.interactionType === 'http://schema.org/FollowAction'
            )?.userInteractionCount || 0,
            following: 0,
            posts: jsonData.mainEntity?.interactionStatistic?.find((stat: any) => 
              stat.interactionType === 'http://schema.org/WriteAction'
            )?.userInteractionCount || 0,
            profilePicUrl: jsonData.mainEntity?.image || ''
          }
        }
      } catch (e) {
        console.error('LD+JSON parse error:', e)
      }
    }

    // SharedData'yı dene
    if (sharedDataMatch && !profileData) {
      try {
        const sharedData = JSON.parse(sharedDataMatch[1])
        const user = sharedData?.entry_data?.ProfilePage?.[0]?.graphql?.user
        
        if (user) {
          profileData = {
            username: user.username,
            fullName: user.full_name,
            bio: user.biography,
            followers: user.edge_followed_by?.count || 0,
            following: user.edge_follow?.count || 0,
            posts: user.edge_owner_to_timeline_media?.count || 0,
            profilePicUrl: user.profile_pic_url_hd || user.profile_pic_url
          }

          // Son postları al
          const edges = user.edge_owner_to_timeline_media?.edges || []
          posts = edges.slice(0, 12).map((edge: any) => ({
            id: edge.node.id,
            shortcode: edge.node.shortcode,
            imageUrl: edge.node.display_url || edge.node.thumbnail_src,
            caption: edge.node.edge_media_to_caption?.edges?.[0]?.node?.text || '',
            likes: edge.node.edge_liked_by?.count || 0,
            comments: edge.node.edge_media_to_comment?.count || 0,
            isVideo: edge.node.is_video,
            videoUrl: edge.node.video_url || null,
            timestamp: edge.node.taken_at_timestamp
          }))
        }
      } catch (e) {
        console.error('SharedData parse error:', e)
      }
    }

    // Meta tag'lerden veri çekmeyi dene
    if (!profileData) {
      const followersMatch = html.match(/<meta\s+property="og:description"\s+content="([^"]*Followers[^"]*)"/i)
      const imageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]*)"/i)
      const titleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i)
      
      if (followersMatch) {
        const descText = followersMatch[1]
        const followersNum = descText.match(/([\d,\.]+[KMB]?)\s*Followers/i)?.[1] || '0'
        const postsNum = descText.match(/([\d,\.]+[KMB]?)\s*Posts/i)?.[1] || '0'
        
        profileData = {
          username: username,
          fullName: titleMatch?.[1]?.split('(')[0]?.trim() || username,
          bio: '',
          followers: parseCount(followersNum),
          following: 0,
          posts: parseCount(postsNum),
          profilePicUrl: imageMatch?.[1] || ''
        }
      }
    }

    // Eğer hala veri yoksa, basit bir yapı döndür
    if (!profileData) {
      profileData = {
        username: username,
        fullName: 'Birgül Hanım Kız Öğrenci Yurdu - Kartal',
        bio: 'Kartal\'da güvenli ve konforlu kız öğrenci yurdu',
        followers: '2K',
        following: 3,
        posts: 186,
        profilePicUrl: '/logo.png'
      }
    }

    return {
      success: true,
      profile: profileData,
      posts: posts
    }
  } catch (error) {
    console.error('Instagram fetch error:', error)
    
    // Hata durumunda fallback veriler
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      profile: {
        username: username,
        fullName: 'Birgül Hanım Kız Öğrenci Yurdu - Kartal',
        bio: 'Kartal\'da güvenli ve konforlu kız öğrenci yurdu',
        followers: '2K',
        following: 3,
        posts: 186,
        profilePicUrl: '/logo.png'
      },
      posts: []
    }
  }
}

// Takipçi sayısını parse et (2.5K, 1M gibi)
function parseCount(str: string): number | string {
  if (typeof str === 'number') return str
  
  const num = parseFloat(str.replace(/,/g, ''))
  if (str.includes('K')) return Math.round(num * 1000)
  if (str.includes('M')) return Math.round(num * 1000000)
  if (str.includes('B')) return Math.round(num * 1000000000)
  
  return isNaN(num) ? str : num
}

// Sayıyı formatla
function formatCount(num: number | string): string {
  if (typeof num === 'string') return num
  
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num.toString()
}

export async function GET(request: NextRequest) {
  try {
    const username = 'birgulhanimyurtlarikartal'
    const data = await fetchInstagramData(username)
    
    // Sayıları formatla
    if (data.profile && typeof data.profile.followers === 'number') {
      data.profile.followers = formatCount(data.profile.followers)
    }
    if (data.profile && typeof data.profile.posts === 'number') {
      data.profile.posts = formatCount(data.profile.posts)
    }
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch Instagram data',
        profile: {
          username: 'birgulhanimyurtlarikartal',
          fullName: 'Birgül Hanım Kız Öğrenci Yurdu - Kartal',
          bio: 'Kartal\'da güvenli ve konforlu kız öğrenci yurdu',
          followers: '2K',
          following: 3,
          posts: 186,
          profilePicUrl: '/logo.png'
        },
        posts: []
      },
      { status: 500 }
    )
  }
}