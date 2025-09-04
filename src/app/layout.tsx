import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Birgül Hanım Kız Öğrenci Yurtları - Kartal'ın En İyi Kız Öğrenci Yurdu",
  description: "Kartal'da güvenli, konforlu ve modern kız öğrenci yurdu. 1, 2, 3, 4, 5 ve 6 kişilik oda seçenekleri, sosyal alanlar, yemek hizmetleri ve 7/24 güvenlik.",
  keywords: "kız öğrenci yurdu, kartal kız öğrenci yurdu, istanbul kız öğrenci yurdu, öğrenci yurdu, birgül hanım yurtları, güvenli kız öğrenci yurdu, modern öğrenci yurdu, istanbul üniversitesi yurt, kartal özel yurt, kız öğrenci yurdu fiyatları",
  authors: [{ name: "Birgül Hanım Kız Öğrenci Yurtları" }],
  creator: "Birgül Hanım Kız Öğrenci Yurtları",
  publisher: "Birgül Hanım Kız Öğrenci Yurtları",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://birgulhanimkizogrenciyurdukartal.com.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Birgül Hanım Kız Öğrenci Yurtları - Kartal'ın En İyi Kız Öğrenci Yurdu",
    description: "Kartal'da güvenli, konforlu ve modern kız öğrenci yurdu. 1, 2, 3, 4, 5 ve 6 kişilik oda seçenekleri.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Birgül Hanım Kız Öğrenci Yurtları',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birgül Hanım Kız Öğrenci Yurtları",
    description: "Kartal'ın en güvenli ve konforlu kız öğrenci yurdu",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Birgül Hanım Kız Öğrenci Yurtları",
    "alternateName": "Birgül Hanım Kartal Kız Öğrenci Yurdu",
    "url": "https://birgulhanimkizogrenciyurdukartal.com.tr",
    "logo": "https://birgulhanimkizogrenciyurdukartal.com.tr/logo.png",
    "description": "Kartal'da güvenli, konforlu ve modern kız öğrenci yurdu. 15 yılı aşkın deneyimimizle öğrencilerimize en iyi hizmeti sunuyoruz.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yalı Mahallesi Tuğra Sokak No:6",
      "addressLocality": "Kartal",
      "addressRegion": "İstanbul",
      "postalCode": "34873",
      "addressCountry": "TR"
    },
    "telephone": "+905330359573",
    "email": "info@birgulhanimkizogrenciyurdukartal.com.tr",
    "sameAs": [
      "https://www.facebook.com/birgulhanimyurtlari",
      "https://www.instagram.com/birgulhanimyurtlari"
    ],
    "priceRange": "$$",
    "servesCuisine": "Turkish",
    "hasMap": "https://maps.app.goo.gl/p766aV1YQ13RF2TF6",
    "openingHours": "Mo-Su 00:00-24:00",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.8967478",
      "longitude": "29.2237435"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "7/24 Güvenlik",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Ücretsiz WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Ücretsiz Kahvaltı",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Çalışma Odaları",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Sosyal Alanlar",
        "value": true
      }
    ]
  };

  return (
    <html lang="tr" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7GGNBBLVH5"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17514420608"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7GGNBBLVH5');
              gtag('config', 'AW-17514420608');
              
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-17514420608/nQQACPuIp48bEICzw59B',
                    'value': 1.0,
                    'currency': 'TRY',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="min-h-screen w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
