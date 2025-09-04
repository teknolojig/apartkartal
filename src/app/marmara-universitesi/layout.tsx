import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marmara Üniversitesi Kız Öğrenci Yurdu - Kartal | Birgül Hanım Yurtları",
  description: "Marmara Üniversitesi'ne 25 dakika mesafede, güvenli ve konforlu kız öğrenci yurdu. 7/24 güvenlik, ücretsiz kahvaltı, yüksek hızlı internet. Marmara Üniversitesi öğrencilerine özel fiyatlar.",
  keywords: "marmara üniversitesi kız öğrenci yurdu, marmara üniversitesi yurt, marmara üniversitesi yakın yurt, kartal marmara üniversitesi kız yurdu, marmara üniversitesi öğrenci yurdu fiyatları, marmara yakın kız yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/marmara-universitesi",
  },
  openGraph: {
    title: "Marmara Üniversitesi Kız Öğrenci Yurdu | Birgül Hanım Kartal",
    description: "Marmara Üniversitesi'ne kolay ulaşım, modern ve güvenli kız öğrenci yurdu. Ücretsiz kahvaltı, 7/24 güvenlik, tam donanımlı odalar.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/marmara-universitesi",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/marmara-university-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Marmara Üniversitesi Kız Öğrenci Yurdu',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marmara Üniversitesi Kız Öğrenci Yurdu - Kartal",
    description: "Marmara Üniversitesi'ne 25 dakika, metro durağına 3 dakika mesafede güvenli kız öğrenci yurdu.",
    images: ['/images/marmara-university-hero.jpg'],
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

export default function MarmaraUniversitesiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 