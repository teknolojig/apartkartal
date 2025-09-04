import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kartal Kız Öğrenci Yurdu Güvenlik Sistemleri | 7/24 Güvenli Kız Öğrenci Yurdu",
  description: "Kartal kız öğrenci yurdumuzda 7/24 profesyonel güvenlik, kamera sistemleri, kartlı geçiş ve güvenli yaşam. Aileler için huzurlu, öğrenciler için güvenli kız yurdu.",
  keywords: "kartal güvenli kız öğrenci yurdu, kartal kız öğrenci yurdu güvenlik, 7/24 güvenlik kız öğrenci yurdu, kartal öğrenci yurdu kamera, güvenli kız öğrenci yurdu, birgül hanım güvenlik sistemleri",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr/guvenlik",
  },
  openGraph: {
    title: "Güvenlik Sistemlerimiz | Kartal Kız Öğrenci Yurdu",
    description: "Kartal'daki kız öğrenci yurdumuzda 24 saat kesintisiz güvenlik hizmeti. Profesyonel ekip, modern kamera sistemleri ve kartlı geçiş ile tam güvenlik.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr/guvenlik",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/security.jpg',
        width: 1200,
        height: 630,
        alt: 'Kartal Kız Öğrenci Yurdu Güvenlik',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartal Kız Öğrenci Yurdu 7/24 Güvenlik",
    description: "Profesyonel güvenlik ekibi ve modern sistemlerle ailelerin içi rahat, öğrencilerin güvende.",
    images: ['/images/security.jpg'],
  },
};

export default function GuvenlikLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}