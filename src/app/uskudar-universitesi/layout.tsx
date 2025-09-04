import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Üsküdar Üniversitesi Kız Öğrenci Yurdu - Kartal | Birgül Hanım Yurtları",
  description: "Üsküdar Üniversitesi'ne 40 dakika mesafede, güvenli ve konforlu kız öğrenci yurdu. 7/24 güvenlik, ücretsiz kahvaltı, yüksek hızlı internet. Üsküdar Üniversitesi öğrencilerine özel fiyatlar.",
  keywords: "üsküdar üniversitesi kız öğrenci yurdu, üsküdar üniversitesi yurt, üsküdar üniversitesi yakın yurt, kartal üsküdar üniversitesi kız yurdu, üsküdar üniversitesi öğrenci yurdu fiyatları, üsküdar yakın kız yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/uskudar-universitesi",
  },
  openGraph: {
    title: "Üsküdar Üniversitesi Kız Öğrenci Yurdu | Birgül Hanım Kartal",
    description: "Üsküdar Üniversitesi'ne kolay ulaşım, modern ve güvenli kız öğrenci yurdu. Ücretsiz kahvaltı, 7/24 güvenlik, tam donanımlı odalar.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/uskudar-universitesi",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/uskudar-university-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Üsküdar Üniversitesi Kız Öğrenci Yurdu',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Üsküdar Üniversitesi Kız Öğrenci Yurdu - Kartal",
    description: "Üsküdar Üniversitesi'ne 40 dakika, metro durağına 3 dakika mesafede güvenli kız öğrenci yurdu.",
    images: ['/images/uskudar-university-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function UskudarUniversitesiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 