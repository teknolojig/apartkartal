import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kartal Kız Öğrenci Yurdu Sosyal Alanları | Spor, Sinema, Oyun Odası",
  description: "Kartal kız öğrenci yurdumuzun sosyal alanları: Netflix'li sinema salonu, spor merkezi, oyun odası, çalışma salonları ve açık teras. Modern kız yurdu imkanları.",
  keywords: "kartal kız öğrenci yurdu sosyal alanlar, kartal öğrenci yurdu imkanları, kız öğrenci yurdu spor salonu, kız öğrenci yurdu sinema salonu, kartal kız öğrenci yurdu aktiviteler, netflix kız öğrenci yurdu, çalışma salonu kız öğrenci yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/sosyal-alanlar",
  },
  openGraph: {
    title: "Sosyal Alanlarımız | Kartal Kız Öğrenci Yurdu",
    description: "Kartal'daki kız öğrenci yurdumuzda spor salonu, Netflix ve BluTV'li sinema odası, oyun salonu, 7/24 açık çalışma alanları. Modern sosyal imkanlarımızı keşfedin.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/sosyal-alanlar",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/social-areas.jpg',
        width: 1200,
        height: 630,
        alt: 'Kartal Kız Öğrenci Yurdu Sosyal Alanlar',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartal Kız Öğrenci Yurdu Sosyal Alanları",
    description: "Modern kız öğrenci yurdumuzda spor salonu, sinema odası, oyun alanları ve daha fazlası.",
    images: ['/images/social-areas.jpg'],
  },
};

export default function SosyalAlanlarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}