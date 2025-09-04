import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apart Kartal Güvenlik Sistemleri | 7/24 Güvenli Yaşam Alanı",
  description: "Apart Kartal'da 7/24 profesyonel güvenlik, kamera sistemleri, kartlı geçiş ve güvenli yaşam. Huzurlu ve güvenli kiralık daireler.",
  keywords: "apart kartal güvenlik, kartal güvenli kiralık daire, 7/24 güvenlik apart, kartal apartman kamera, güvenli kiralık daire, apart kartal güvenlik sistemleri",
  alternates: {
    canonical: "https://apartkartal.com.tr/guvenlik",
  },
  openGraph: {
    title: "Güvenlik Sistemlerimiz | Apart Kartal",
    description: "Apart Kartal'da 24 saat kesintisiz güvenlik hizmeti. Profesyonel ekip, modern kamera sistemleri ve kartlı geçiş ile tam güvenlik.",
    url: "https://apartkartal.com.tr/guvenlik",
    type: "website",
    locale: "tr_TR",
    siteName: "Apart Kartal",
    images: [
      {
        url: '/images/security.jpg',
        width: 1200,
        height: 630,
        alt: 'Apart Kartal Güvenlik',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apart Kartal 7/24 Güvenlik",
    description: "Profesyonel güvenlik ekibi ve modern sistemlerle güvenli yaşam alanları.",
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