import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apart Kartal Çalışma Alanları | Home Office ve Çalışma Odaları",
  description: "Apart Kartal'da sessiz çalışma odaları, home office alanları ve ortak çalışma mekanları. Yüksek hızlı internet ve ideal çalışma ortamı.",
  keywords: "apart kartal çalışma alanları, apart kartal home office, kartal kiralık daire çalışma odası, çalışma salonu, apart kartal sessiz oda, ortak çalışma alanı apart kartal",
  alternates: {
    canonical: "https://apartkartal.com.tr/calisma-alanlari",
  },
  openGraph: {
    title: "Çalışma Alanlarımız | Apart Kartal",
    description: "Apart Kartal'da home office ve çalışma için ideal alanlar, sessiz odalar ve ortak çalışma mekanları. Yüksek hızlı internet altyapısı.",
    url: "https://apartkartal.com.tr/calisma-alanlari",
    type: "website",
    locale: "tr_TR",
    siteName: "Apart Kartal",
    images: [
      {
        url: '/images/study-areas.jpg',
        width: 1200,
        height: 630,
        alt: 'Apart Kartal Çalışma Alanları',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apart Kartal Çalışma Alanları",
    description: "Home office odaları, yüksek hızlı internet ve sessiz çalışma ortamı.",
    images: ['/images/study-areas.jpg'],
  },
};

export default function CalismaAlanlariLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}