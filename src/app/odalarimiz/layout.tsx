import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kartal Kız Öğrenci Yurdu Odaları | 1-6 Kişilik Oda Seçenekleri",
  description: "Kartal kız öğrenci yurdumuzda 1, 2, 3, 4, 5 ve 6 kişilik konforlu oda seçenekleri. Güvenli ve uygun fiyatlı kız yurdu odaları. Fiyatlar ve detaylı bilgi için tıklayın.",
  keywords: "kartal kız öğrenci yurdu odaları, kartal kız öğrenci yurdu fiyatları, kartal öğrenci yurdu odaları, 1 kişilik kız öğrenci yurdu odası, 2 kişilik kız öğrenci yurdu odası, kartal uygun fiyatlı kız öğrenci yurdu, birgül hanım yurt odaları",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/odalarimiz",
  },
  openGraph: {
    title: "Kartal Kız Öğrenci Yurdu Oda Seçenekleri | Birgül Hanım",
    description: "Kartal'da 1-6 kişilik güvenli kız öğrenci yurdu odaları. Her odada mini buzdolabı, çalışma alanı ve yüksek hızlı internet. Detaylı bilgi ve fiyatlar için tıklayın.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/odalarimiz",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/rooms/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Kartal Kız Öğrenci Yurdu Odaları',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartal Kız Öğrenci Yurdu Odaları | 1-6 Kişilik",
    description: "Kartal'da konforlu ve güvenli kız öğrenci yurdu odaları. İnternetli ve uygun fiyatlı seçenekler.",
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