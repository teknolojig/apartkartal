import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gedik Üniversitesi Kız Öğrenci Yurdu - Kartal | Birgül Hanım Yurtları",
  description: "Gedik Üniversitesi'ne 5 dakika mesafede, güvenli ve konforlu kız öğrenci yurdu. 7/24 güvenlik, ücretsiz kahvaltı, yüksek hızlı internet. Gedik Üniversitesi öğrencilerine özel fiyatlar.",
  keywords: "gedik üniversitesi kız öğrenci yurdu, gedik üniversitesi yurt, gedik üniversitesi yakın yurt, kartal gedik üniversitesi kız yurdu, gedik üniversitesi öğrenci yurdu fiyatları, gedik yakın kız yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/gedik-universitesi",
  },
  openGraph: {
    title: "Gedik Üniversitesi Kız Öğrenci Yurdu | Birgül Hanım Kartal",
    description: "Gedik Üniversitesi'ne yürüme mesafesinde, modern ve güvenli kız öğrenci yurdu. Ücretsiz kahvaltı, 7/24 güvenlik, tam donanımlı odalar.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/gedik-universitesi",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/gedik-university-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Gedik Üniversitesi Kız Öğrenci Yurdu',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gedik Üniversitesi Kız Öğrenci Yurdu - Kartal",
    description: "Gedik Üniversitesi'ne 5 dakika, metro durağına 3 dakika mesafede güvenli kız öğrenci yurdu.",
    images: ['/images/gedik-university-hero.jpg'],
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

export default function GedikUniversitesiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}