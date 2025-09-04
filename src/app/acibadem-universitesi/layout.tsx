import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acıbadem Üniversitesi Kız Öğrenci Yurdu - Kartal | Birgül Hanım Yurtları",
  description: "Acıbadem Üniversitesi'ne 45 dakika mesafede, güvenli ve konforlu kız öğrenci yurdu. 7/24 güvenlik, ücretsiz kahvaltı, yüksek hızlı internet. Acıbadem Üniversitesi öğrencilerine özel fiyatlar.",
  keywords: "acıbadem üniversitesi kız öğrenci yurdu, acıbadem üniversitesi yurt, acıbadem üniversitesi yakın yurt, kartal acıbadem üniversitesi kız yurdu, acıbadem üniversitesi öğrenci yurdu fiyatları, acıbadem yakın kız yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/acibadem-universitesi",
  },
  openGraph: {
    title: "Acıbadem Üniversitesi Kız Öğrenci Yurdu | Birgül Hanım Kartal",
    description: "Acıbadem Üniversitesi'ne kolay ulaşım, modern ve güvenli kız öğrenci yurdu. Ücretsiz kahvaltı, 7/24 güvenlik, tam donanımlı odalar.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/acibadem-universitesi",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/acibadem-university-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Acıbadem Üniversitesi Kız Öğrenci Yurdu',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acıbadem Üniversitesi Kız Öğrenci Yurdu - Kartal",
    description: "Acıbadem Üniversitesi'ne 45 dakika, metro durağına 3 dakika mesafede güvenli kız öğrenci yurdu.",
    images: ['/images/acibadem-university-hero.jpg'],
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

export default function AcibademUniversitesiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 