import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { withAuth } from 'next-auth/middleware'

// 301 Yönlendirme Haritası
const redirectMap: Record<string, string> = {
  '/index.php/anasayfa': '/',
  '/index.php/yurtlar/kartal-ogrenci-yurdu/odalarimiz': '/odalarimiz',
  '/index.php/yurtlar/kartal-ogrenci-yurdu/yeme-icme': '/yeme-icme',
  '/index.php/yurtlar/kartal-ogrenci-yurdu/guvenlik': '/guvenlik',
  '/index.php/yurtlar/kartal-ogrenci-yurdu/sosyal-alanlar': '/sosyal-alanlar',
  '/index.php/ulasim': '/iletisim',
  '/index.php/iletisim-tr/kartal-iletisim': '/iletisim',
  '/index.php/iletisim-tr': '/iletisim',
  '/index.php/hakkimizda': '/hakkimizda',
}

const adminMiddleware = withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    pages: {
      signIn: '/admin/login',
    },
  }
)

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Admin rotaları için authentication kontrolü
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    return (adminMiddleware as any)(request)
  }
  
  // 301 Yönlendirmeleri kontrol et
  if (redirectMap[pathname]) {
    return NextResponse.redirect(new URL(redirectMap[pathname], request.url), 301)
  }
  
  const response = NextResponse.next()
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()')
  
  // Cache headers for static assets
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|ico|svg|webp|avif)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // Cache headers for fonts
  if (request.nextUrl.pathname.match(/\.(woff|woff2|ttf|otf|eot)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}