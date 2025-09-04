import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medeniyet Üniversitesi Kız Öğrenci Yurdu - Kartal | Birgül Hanım Yurtları",
  description: "Medeniyet Üniversitesi'ne 30 dakika mesafede, güvenli ve konforlu kız öğrenci yurdu. 7/24 güvenlik, ücretsiz kahvaltı, yüksek hızlı internet. Medeniyet Üniversitesi öğrencilerine özel fiyatlar.",
  keywords: "medeniyet üniversitesi kız öğrenci yurdu, medeniyet üniversitesi yurt, medeniyet üniversitesi yakın yurt, kartal medeniyet üniversitesi kız yurdu, medeniyet üniversitesi öğrenci yurdu fiyatları, medeniyet yakın kız yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/medeniyet-universitesi",
  },
  openGraph: {
    title: "Medeniyet Üniversitesi Kız Öğrenci Yurdu | Birgül Hanım Kartal",
    description: "Medeniyet Üniversitesi'ne kolay ulaşım, modern ve güvenli kız öğrenci yurdu. Ücretsiz kahvaltı, 7/24 güvenlik, tam donanımlı odalar.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/medeniyet-universitesi",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/medeniyet-university-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Medeniyet Üniversitesi Kız Öğrenci Yurdu',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medeniyet Üniversitesi Kız Öğrenci Yurdu - Kartal",
    description: "Medeniyet Üniversitesi'ne 30 dakika, metro durağına 3 dakika mesafede güvenli kız öğrenci yurdu.",
    images: ['/images/medeniyet-university-hero.jpg'],
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

export default function MedeniyetUniversitesiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 