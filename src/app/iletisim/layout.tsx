import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kartal Kız Öğrenci Yurdu İletişim | Adres ve Telefon Bilgileri",
  description: "Kartal kız öğrenci yurdu iletişim bilgileri. Yalı Mahallesi Tuğra Sokak No:6 Kartal/İstanbul. Tel: 0533 035 95 73. Hemen arayın, kız yurdumuz hakkında bilgi alın.",
  keywords: "kartal kız öğrenci yurdu iletişim, kartal kız öğrenci yurdu adres, kartal kız öğrenci yurdu telefon, birgül hanım iletişim, kartal öğrenci yurdu nerede, kartal kız öğrenci yurdu ulaşım, yalı mahallesi kız öğrenci yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/iletisim",
  },
  openGraph: {
    title: "İletişim | Birgül Hanım Kartal Kız Öğrenci Yurdu",
    description: "Kartal kız öğrenci yurdumuz Yalı Mahallesi'nde, Gedik Üniversitesi'ne 5 dakika mesafede. Detaylı bilgi ve kayıt için: 0533 035 95 73",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/iletisim",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Kartal Kız Öğrenci Yurdu İletişim',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartal Kız Öğrenci Yurdu İletişim",
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