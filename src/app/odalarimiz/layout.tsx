import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apart Kartal Dairelerimiz | 1+1, 2+1, 3+1, 4+1 Kiralık Daireler",
  description: "Kartal'da 1+1'den 6+1'e kadar farklı büyüklükte kiralık daire seçenekleri. Modern, güvenli ve tam donanımlı daireler. Uygun fiyat garantisi.",
  keywords: "kartal 1+1 kiralık daire, kartal 2+1 kiralık daire, kartal 3+1 kiralık daire, apart kartal daire fiyatları, kartal kiralık daire oda sayısı, apart kartal daire seçenekleri",
  alternates: {
    canonical: "https://apartkartal.com.tr/odalarimiz",
  },
  openGraph: {
    title: "Dairelerimiz | Apart Kartal Kiralık Daireler",
    description: "1+1'den 6+1'e kadar farklı büyüklükte modern ve konforlu kiralık daire seçenekleri. Her bütçeye uygun daireler.",
    url: "https://apartkartal.com.tr/odalarimiz",
    type: "website",
    locale: "tr_TR",
    siteName: "Apart Kartal",
    images: [
      {
        url: '/images/rooms/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Apart Kartal Dairelerimiz',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apart Kartal Dairelerimiz",
    description: "Farklı büyüklükte modern ve konforlu kiralık daireler",
    images: ['/images/rooms/hero.jpg'],
  },
};

export default function OdalarimizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}