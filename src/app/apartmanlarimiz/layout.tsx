import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apartmanlarımız | Apart Kartal - Kiralık Daireler",
  description: "Kartal'da güvenli ve konforlu kiralık daire ve apartmanlarımız. Modern tesisler, sosyal alanlar ve 7/24 güvenlik ile yaşam alanları.",
  keywords: "kartal kiralık daireler, istanbul apartman, apart kartal daireler, kartal güvenli apartman, istanbul kiralık daire, kartal apart",
  alternates: {
    canonical: "https://apartkartal.com.tr/apartmanlarimiz",
  },
  openGraph: {
    title: "Apartmanlarımız | Apart Kartal Kiralık Daireler",
    description: "Kartal'da güvenli ve konforlu kiralık daire ve apartmanlarımız. Modern tesisler ve sosyal alanlarla yaşam alanları.",
    url: "https://apartkartal.com.tr/apartmanlarimiz",
    type: "website",
    locale: "tr_TR",
    siteName: "Apart Kartal",
    images: [
      {
        url: '/images/apartments-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Apart Kartal Apartmanları',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartmanlarımız | Apart Kartal",
    description: "Kartal'da güvenli ve konforlu kiralık daireler. Modern tesisler ve sosyal alanlar.",
    images: ['/images/apartments-hero.jpg'],
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

export default function ApartmanlarimizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}