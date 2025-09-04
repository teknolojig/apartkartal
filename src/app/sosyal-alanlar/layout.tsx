import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apart Kartal Sosyal Alanları | Spor, Sinema, Oyun Odası",
  description: "Apart Kartal sosyal alanları: Netflix'li sinema salonu, spor merkezi, oyun odası, çalışma salonları ve açık teras. Modern yaşam alanı imkanları.",
  keywords: "apart kartal sosyal alanlar, apart kartal imkanlar, kiralık daire spor salonu, kiralık daire sinema salonu, apart kartal aktiviteler, netflix kiralık daire, çalışma salonu apart",
  alternates: {
    canonical: "https://apartkartal.com.tr/sosyal-alanlar",
  },
  openGraph: {
    title: "Sosyal Alanlarımız | Apart Kartal",
    description: "Kartal'daki apartmanımızda spor salonu, Netflix ve BluTV'li sinema odası, oyun salonu, 7/24 açık çalışma alanları. Modern sosyal imkanlarımızı keşfedin.",
    url: "https://apartkartal.com.tr/sosyal-alanlar",
    type: "website",
    locale: "tr_TR",
    siteName: "Apart Kartal",
    images: [
      {
        url: '/images/social-areas.jpg',
        width: 1200,
        height: 630,
        alt: 'Apart Kartal Sosyal Alanlar',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apart Kartal Sosyal Alanları",
    description: "Modern apartmanımızda spor salonu, sinema odası, oyun alanları ve daha fazlası.",
    images: ['/images/social-areas.jpg'],
  },
};

export default function SosyalAlanlarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}