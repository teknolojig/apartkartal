import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hakkımızda | Birgül Hanım Kız Öğrenci Yurtları - Kartal",
  description: "15 yılı aşkın deneyimimizle İstanbul Kartal'da kız öğrencilerimize güvenli, konforlu ve modern yaşam alanları sunuyoruz. Aile sıcaklığında hizmet.",
  keywords: "birgül hanım yurtları hakkında, kartal kız öğrenci yurdu deneyim, istanbul öğrenci yurdu güvenlik, kartal yurt deneyimi, birgül hanım yurt tarihçe",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda | Birgül Hanım Kız Öğrenci Yurtları",
    description: "15 yılı aşkın deneyimimizle Kartal'da güvenli ve konforlu kız öğrenci yurdu. Aile sıcaklığında hizmet anlayışımızla öğrencilerimizin yanındayız.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/hakkimizda",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/about-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Birgül Hanım Yurtları Hakkında',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | Birgül Hanım Kız Öğrenci Yurtları",
    description: "15 yılı aşkın deneyimimizle Kartal'da güvenli kız öğrenci yurdu. Aile sıcaklığında hizmet.",
    images: ['/images/about-hero.jpg'],
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

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 