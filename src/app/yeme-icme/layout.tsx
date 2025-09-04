import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apart Kartal Mutfak Hizmetleri | Tam Donanımlı Mutfak",
  description: "Apart Kartal dairelerinde tam donanımlı mutfak imkanları. Modern mutfak ekipmanları, buzdolabı, fırın ve tüm mutfak gereçleri.",
  keywords: "apart kartal mutfak, kiralık daire mutfak, apart kartal yemek imkanları, kartal kiralık daire mutfak donanımı, apart kartal mutfak ekipmanları",
  alternates: {
    canonical: "https://apartkartal.com.tr/yeme-icme",
  },
  openGraph: {
    title: "Mutfak Hizmetleri | Apart Kartal",
    description: "Apart Kartal dairelerinde tam donanımlı modern mutfaklar. Her dairede buzdolabı, fırın, ocak ve mutfak gereçleri.",
    url: "https://apartkartal.com.tr/yeme-icme",
    type: "website",
    locale: "tr_TR",
    siteName: "Apart Kartal",
    images: [
      {
        url: '/images/kitchen.jpg',
        width: 1200,
        height: 630,
        alt: 'Apart Kartal Mutfak',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apart Kartal Mutfak Hizmetleri",
    description: "Modern ve tam donanımlı mutfak imkanları",
    images: ['/images/kitchen.jpg'],
  },
};

export default function YemeIcmeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}