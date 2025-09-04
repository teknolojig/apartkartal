import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apart Kartal İletişim | Adres ve Telefon Bilgileri",
  description: "Apart Kartal iletişim bilgileri. Yalı Mahallesi Tuğra Sokak No:6 Kartal/İstanbul. Tel: 0533 035 95 73. Hemen arayın, kiralık dairelerimiz hakkında bilgi alın.",
  keywords: "apart kartal iletişim, apart kartal adres, apart kartal telefon, kartal kiralık daire iletişim, kartal apart nerede, apart kartal ulaşım, yalı mahallesi kiralık daire",
  alternates: {
    canonical: "https://apartkartal.com.tr/iletisim",
  },
  openGraph: {
    title: "İletişim | Apart Kartal Kiralık Daireler",
    description: "Kartal'daki apartmanımız Yalı Mahallesi'nde, Gedik Üniversitesi'ne 5 dakika mesafede. Detaylı bilgi ve görüşme için: 0533 035 95 73",
    url: "https://apartkartal.com.tr/iletisim",
    type: "website",
    locale: "tr_TR",
    siteName: "Apart Kartal",
    images: [
      {
        url: '/images/contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Apart Kartal İletişim',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apart Kartal İletişim",
    description: "Yalı Mah. Tuğra Sok. No:6 Kartal/İstanbul - Tel: 0533 035 95 73",
    images: ['/images/contact.jpg'],
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}