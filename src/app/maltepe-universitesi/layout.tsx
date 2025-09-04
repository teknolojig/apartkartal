import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Maltepe Üniversitesi Kız Öğrenci Yurdu - Kartal | Birgül Hanım Yurtları",
  description: "Maltepe Üniversitesi'ne 35 dakika mesafede, güvenli ve konforlu kız öğrenci yurdu. 7/24 güvenlik, ücretsiz kahvaltı, yüksek hızlı internet. Maltepe Üniversitesi öğrencilerine özel fiyatlar.",
  keywords: "maltepe üniversitesi kız öğrenci yurdu, maltepe üniversitesi yurt, maltepe üniversitesi yakın yurt, kartal maltepe üniversitesi kız yurdu, maltepe üniversitesi öğrenci yurdu fiyatları, maltepe yakın kız yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/maltepe-universitesi",
  },
  openGraph: {
    title: "Maltepe Üniversitesi Kız Öğrenci Yurdu | Birgül Hanım Kartal",
    description: "Maltepe Üniversitesi'ne kolay ulaşım, modern ve güvenli kız öğrenci yurdu. Ücretsiz kahvaltı, 7/24 güvenlik, tam donanımlı odalar.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/maltepe-universitesi",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/maltepe-university-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Maltepe Üniversitesi Kız Öğrenci Yurdu',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maltepe Üniversitesi Kız Öğrenci Yurdu - Kartal",
    description: "Maltepe Üniversitesi'ne 35 dakika, metro durağına 3 dakika mesafede güvenli kız öğrenci yurdu.",
    images: ['/images/maltepe-university-hero.jpg'],
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

export default function MaltepeUniversitesiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 