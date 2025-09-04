import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Yurtlarımız | Birgül Hanım Kız Öğrenci Yurtları - Kartal",
  description: "Kartal'da güvenli ve konforlu kız öğrenci yurtlarımız. Modern tesisler, sosyal alanlar ve 7/24 güvenlik ile öğrencilerimizin güvenli yaşam alanları.",
  keywords: "kartal kız öğrenci yurtları, istanbul öğrenci yurtları, birgül hanım yurtları, kartal güvenli yurt, istanbul kız yurdu, kartal öğrenci yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/yurtlarimiz",
  },
  openGraph: {
    title: "Yurtlarımız | Birgül Hanım Kız Öğrenci Yurtları",
    description: "Kartal'da güvenli ve konforlu kız öğrenci yurtlarımız. Modern tesisler ve sosyal alanlarla öğrencilerimizin güvenli yaşam alanları.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/yurtlarimiz",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/dormitories-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Birgül Hanım Yurtları',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yurtlarımız | Birgül Hanım Kız Öğrenci Yurtları",
    description: "Kartal'da güvenli ve konforlu kız öğrenci yurtlarımız. Modern tesisler ve sosyal alanlar.",
    images: ['/images/dormitories-hero.jpg'],
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

export default function YurtlarimizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 