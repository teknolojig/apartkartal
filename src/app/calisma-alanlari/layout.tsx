import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kartal Kız Öğrenci Yurdu Çalışma Alanları | Ders Çalışma Odaları",
  description: "Kartal kız öğrenci yurdumuzda sessiz çalışma odaları, grup çalışma alanları ve kütüphane. Yüksek hızlı internet ve ücretsiz ikram hizmeti ile ideal çalışma ortamı.",
  keywords: "kartal kız öğrenci yurdu çalışma alanları, kartal kız öğrenci yurdu kütüphane, kartal öğrenci yurdu ders çalışma, çalışma salonu, kız öğrenci yurdu sessiz oda, grup çalışma alanı kız öğrenci yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/calisma-alanlari",
  },
  openGraph: {
    title: "Çalışma Alanlarımız | Kartal Kız Öğrenci Yurdu",
    description: "Kartal kız öğrenci yurdumuzda akademik başarınız için çalışma salonları, sessiz odalar ve grup çalışma alanları. Ücretsiz internet ve ikram hizmeti.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/calisma-alanlari",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/study-areas.jpg',
        width: 1200,
        height: 630,
        alt: 'Kartal Kız Öğrenci Yurdu Çalışma Alanları',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartal Kız Öğrenci Yurdu Çalışma Alanları",
    description: "Çalışma salonları, yüksek hızlı internet ve sessiz çalışma ortamı.",
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