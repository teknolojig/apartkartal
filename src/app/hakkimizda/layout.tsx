import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hakkımızda | Apart Kartal - Kiralık Daire ve Apartmanlar",
  description: "15 yılı aşkın deneyimimizle İstanbul Kartal'da güvenli, konforlu ve modern kiralık daire hizmetleri sunuyoruz. Profesyonel kiralama hizmetleri.",
  keywords: "apart kartal hakkında, kartal kiralık daire deneyim, istanbul apartman kiralama, kartal apart deneyimi, apart kartal tarihçe",
  alternates: {
    canonical: "https://apartkartal.com.tr/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda | Apart Kartal",
    description: "15 yılı aşkın deneyimimizle Kartal'da güvenli ve konforlu kiralık daire hizmetleri. Profesyonel hizmet anlayışımızla yanınızdayız.",
    url: "https://apartkartal.com.tr/hakkimizda",
    type: "website",
    locale: "tr_TR",
    siteName: "Apart Kartal",
    images: [
      {
        url: '/images/about-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Apart Kartal Hakkında',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | Apart Kartal",
    description: "15 yılı aşkın deneyimimizle Kartal'da güvenli kiralık daire hizmetleri.",
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