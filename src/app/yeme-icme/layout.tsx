import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kartal Kız Öğrenci Yurdu Yemek Hizmetleri | Ücretsiz Kahvaltı",
  description: "Kartal kız öğrenci yurdumuzda ücretsiz açık büfe kahvaltı, tam donanımlı mutfak, yemekhane ve kantin hizmetleri. Sağlıklı ve ev yemekleri kalitesinde beslenme imkanları.",
  keywords: "kartal kız öğrenci yurdu yemek, ücretsiz kahvaltı kız öğrenci yurdu, kartal kız öğrenci yurdu mutfak, kartal öğrenci yurdu yemekhane, kız öğrenci yurdu beslenme, birgül hanım yemek hizmetleri, kartal kız öğrenci yurdu kahvaltı",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/yeme-icme",
  },
  openGraph: {
    title: "Yeme-İçme Hizmetleri | Kartal Kız Öğrenci Yurdu",
    description: "Kartal kız öğrenci yurdumuzda ücretsiz kahvaltı, akşam yemeği servisi, tam donanımlı mutfak ve kantin. Her odada mini buzdolabı. Sağlıklı beslenme imkanları.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/yeme-icme",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/dining.jpg',
        width: 1200,
        height: 630,
        alt: 'Kartal Kız Öğrenci Yurdu Yemek Hizmetleri',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartal Kız Öğrenci Yurdu Yemek Hizmetleri",
    description: "Ücretsiz kahvaltı, ev yemekleri kalitesinde akşam yemeği ve tam donanımlı mutfak imkanları.",
    images: ['/images/dining.jpg'],
  },
};

export default function YemeIcmeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}