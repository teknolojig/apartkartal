import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Okan Üniversitesi Kız Öğrenci Yurdu - Kartal | Birgül Hanım Yurtları",
  description: "Okan Üniversitesi'ne 15 dakika mesafede, güvenli ve konforlu kız öğrenci yurdu. 7/24 güvenlik, ücretsiz kahvaltı, yüksek hızlı internet. Okan Üniversitesi öğrencilerine özel fiyatlar.",
  keywords: "okan üniversitesi kız öğrenci yurdu, okan üniversitesi yurt, okan üniversitesi yakın yurt, kartal okan üniversitesi kız yurdu, okan üniversitesi öğrenci yurdu fiyatları, okan yakın kız yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/okan-universitesi",
  },
  openGraph: {
    title: "Okan Üniversitesi Kız Öğrenci Yurdu | Birgül Hanım Kartal",
    description: "Okan Üniversitesi'ne kolay ulaşım, modern ve güvenli kız öğrenci yurdu. Ücretsiz kahvaltı, 7/24 güvenlik, tam donanımlı odalar.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/okan-universitesi",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/okan-university-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Okan Üniversitesi Kız Öğrenci Yurdu',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Okan Üniversitesi Kız Öğrenci Yurdu - Kartal",
    description: "Okan Üniversitesi'ne 15 dakika, metro durağına 3 dakika mesafede güvenli kız öğrenci yurdu.",
    images: ['/images/okan-university-hero.jpg'],
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

export default function OkanUniversitesiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 