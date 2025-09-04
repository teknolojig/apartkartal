import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Piri Reis Üniversitesi Kız Öğrenci Yurdu - Kartal | Birgül Hanım Yurtları",
  description: "Piri Reis Üniversitesi'ne 20 dakika mesafede, güvenli ve konforlu kız öğrenci yurdu. 7/24 güvenlik, ücretsiz kahvaltı, yüksek hızlı internet. Piri Reis Üniversitesi öğrencilerine özel fiyatlar.",
  keywords: "piri reis üniversitesi kız öğrenci yurdu, piri reis üniversitesi yurt, piri reis üniversitesi yakın yurt, kartal piri reis üniversitesi kız yurdu, piri reis üniversitesi öğrenci yurdu fiyatları, piri reis yakın kız yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/piri-reis-universitesi",
  },
  openGraph: {
    title: "Piri Reis Üniversitesi Kız Öğrenci Yurdu | Birgül Hanım Kartal",
    description: "Piri Reis Üniversitesi'ne kolay ulaşım, modern ve güvenli kız öğrenci yurdu. Ücretsiz kahvaltı, 7/24 güvenlik, tam donanımlı odalar.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/piri-reis-universitesi",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/piri-reis-university-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Piri Reis Üniversitesi Kız Öğrenci Yurdu',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piri Reis Üniversitesi Kız Öğrenci Yurdu - Kartal",
    description: "Piri Reis Üniversitesi'ne 20 dakika, metro durağına 3 dakika mesafede güvenli kız öğrenci yurdu.",
    images: ['/images/piri-reis-university-hero.jpg'],
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

export default function PiriReisUniversitesiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 