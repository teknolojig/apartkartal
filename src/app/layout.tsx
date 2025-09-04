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
  title: "Apart Kartal - Kartal'da Kiralık Daireler ve Apartmanlar",
  description: "Kartal'da güvenli, konforlu ve modern kiralık daire seçenekleri. 1, 2, 3, 4, 5 ve 6 odalı daireler, sosyal alanlar, güvenlik hizmetleri.",
  keywords: "kartal kiralık daire, kartal apart, istanbul kartal kiralık ev, kiralık apartman kartal, apart kartal, kartal apartment, kiralık ev kartal",
  authors: [{ name: "Apart Kartal" }],
  creator: "Apart Kartal",
  publisher: "Apart Kartal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://apartkartal.com.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Apart Kartal - Kartal'da Kiralık Daireler",
    description: "Kartal'da güvenli, konforlu ve modern kiralık daire seçenekleri. Farklı oda sayısında daireler.",
    url: "https://apartkartal.com.tr",
    siteName: "Apart Kartal",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Apart Kartal Kiralık Daireler',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apart Kartal",
    description: "Kartal'da güvenli ve konforlu kiralık daireler",
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
    "@type": "ApartmentComplex",
    "name": "Apart Kartal",
    "alternateName": "Apart Kartal Kiralık Daireler",
    "url": "https://apartkartal.com.tr",
    "logo": "https://apartkartal.com.tr/logo.svg",
    "description": "Kartal'da güvenli, konforlu ve modern kiralık daireler ve apartmanlar. 15 yılı aşkın deneyimimizle en iyi kiralama hizmetini sunuyoruz.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yalı Mahallesi Tuğra Sokak No:6",
      "addressLocality": "Kartal",
      "addressRegion": "İstanbul",
      "postalCode": "34873",
      "addressCountry": "TR"
    },
    "telephone": "+905074373440",
    "email": "info@apartkartal.com.tr",
    "sameAs": [
      "https://www.facebook.com/apartkartal",
      "https://www.instagram.com/apartkartal"
    ],
    "priceRange": "$$",
    "hasMap": "https://maps.app.goo.gl/p766aV1YQ13RF2TF6",
    "openingHours": "Mo-Su 09:00-18:00",
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
        "name": "Otopark",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Asansör",
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
