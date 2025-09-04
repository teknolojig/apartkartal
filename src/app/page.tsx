import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import RoomTypes from "@/components/RoomTypes"
import YurdumuzSection from "@/components/YurdumuzSection"
import Footer from "@/components/Footer"
import { LazyApplicationProcess, LazyTestimonials, LazyLocationTransport } from "@/components/LazySection"
import { Metadata } from "next"
import ApplicationProcess from "@/components/ApplicationProcess"
import Testimonials from "@/components/Testimonials"
import LocationTransport from "@/components/LocationTransport"
import InstagramSection from "@/components/InstagramSection"

export const metadata: Metadata = {
  title: "Birgül Hanım Kartal Kız Öğrenci Yurdu | Güvenli ve Modern Kız Yurdu",
  description: "Kartal'ın en güvenilir kız öğrenci yurdu. Gedik Üniversitesi'ne 5 dakika, ücretsiz kahvaltı, 7/24 güvenlik, sosyal alanlar ve uygun fiyatlı kız yurdu seçenekleri.",
  keywords: "kartal kız öğrenci yurdu, kartal kız öğrenci yurdu, gedik üniversitesi yurt, kartal öğrenci yurdu, birgül hanım kız öğrenci yurdu, kartal güvenli kız öğrenci yurdu, istanbul kartal kız öğrenci yurdu, kartal özel kız öğrenci yurdu",
  alternates: {
    canonical: "https://birgulhanimkizogrenciyurdukartal.com.tr",
  },
  openGraph: {
    title: "Birgül Hanım Kartal Kız Öğrenci Yurdu | Ana Sayfa",
    description: "Kartal'da Gedik Üniversitesi'ne yakın, güvenli ve konforlu kız öğrenci yurdu. 1-6 kişilik oda seçenekleri, ücretsiz kahvaltı ve modern yaşam alanları.",
    url: "https://birgulhanimkizogrenciyurdukartal.com.tr",
    type: "website",
    locale: "tr_TR",
    siteName: "Birgül Hanım Kız Öğrenci Yurtları",
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1920,
        height: 1080,
        alt: 'Birgül Hanım Kartal Kız Öğrenci Yurdu',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birgül Hanım Kartal Kız Öğrenci Yurdu",
    description: "Kartal'ın en güvenli ve modern kız öğrenci yurdu. Ücretsiz kahvaltı, 7/24 güvenlik ve sosyal alanlar.",
    images: ['/images/hero-bg.jpg'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <Features />
        <RoomTypes />
        <YurdumuzSection />
        <LazyApplicationProcess />
        <InstagramSection />
        <LazyTestimonials />
        <LazyLocationTransport />
      </main>
      <Footer />
    </div>
  )
}