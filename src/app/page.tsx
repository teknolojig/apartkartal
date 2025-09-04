import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import RoomTypes from "@/components/RoomTypes"
import PriceList from "@/components/PriceList"
import YurdumuzSection from "@/components/YurdumuzSection"
import Footer from "@/components/Footer"
import { LazyLocationTransport } from "@/components/LazySection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apart Kartal | Kiralık Daireler ve Apartmanlar",
  description: "Kartal'da kiralık daire ve apart seçenekleri. Modern yaşam alanları, güvenli konum ve uygun fiyatlı kiralık daireler.",
  keywords: "kartal kiralık daire, kartal apart, kartal kiralık ev, kartal apartment, istanbul kartal kiralık, apart kartal",
  alternates: {
    canonical: "https://apartkartal.com.tr",
  },
  openGraph: {
    title: "Apart Kartal | Kiralık Daireler",
    description: "Kartal'da modern ve güvenli kiralık daire seçenekleri. Farklı oda sayısı ve konforda yaşam alanları.",
    url: "https://apartkartal.com.tr",
    type: "website",
    locale: "tr_TR",
    siteName: "Apart Kartal",
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1920,
        height: 1080,
        alt: 'Apart Kartal Kiralık Daireler',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apart Kartal | Kiralık Daireler",
    description: "Kartal'da modern ve güvenli kiralık daire seçenekleri.",
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
        <PriceList />
        <YurdumuzSection />
        <LazyLocationTransport />
      </main>
      <Footer />
    </div>
  )
}