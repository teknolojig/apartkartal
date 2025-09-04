"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MiniHero from "@/components/MiniHero"
import Features from "@/components/Features"
import QuoteModal from "@/components/QuoteModal"
import { motion } from "framer-motion"
import { Bed, Users, Wifi, Snowflake, Lock, Monitor } from "lucide-react"
import Image from "next/image"

const roomTypes = [
  {
    id: "1-kisilik",
    title: "1 Kişilik Oda",
    capacity: 1,
    price: "Fiyat için iletişime geçin",
    image: "/images/rooms/1kisi.jpg",
    features: [
      { icon: Bed, text: "Tek kişilik konforlu yatak" },
      { icon: Monitor, text: "Geniş çalışma masası" },
      { icon: Lock, text: "Kişisel dolap ve kilitli çekmeceler" },
      { icon: Wifi, text: "Yüksek hızlı internet" },
    ],
    description: "Tam mahremiyet ve konfor isteyenler için ideal. Kendi alanınızda rahatça çalışabilir ve dinlenebilirsiniz.",
  },
  {
    id: "2-kisilik",
    title: "2 Kişilik Oda",
    capacity: 2,
    price: "Fiyat için iletişime geçin",
    image: "/images/rooms/2kisi.jpg",
    features: [
      { icon: Bed, text: "İki ayrı yatak" },
      { icon: Monitor, text: "İki çalışma masası" },
      { icon: Lock, text: "Kişisel dolaplar" },
      { icon: Wifi, text: "Yüksek hızlı internet" },
    ],
    description: "Arkadaşınızla birlikte konforlu bir yaşam alanı. Hem sosyal hem de kişisel alan dengesi.",
  },
  {
    id: "3-kisilik",
    title: "3 Kişilik Oda",
    capacity: 3,
    price: "Fiyat için iletişime geçin",
    image: "/images/rooms/3kisi.jpg",
    features: [
      { icon: Bed, text: "Üç ayrı yatak" },
      { icon: Monitor, text: "Ortak çalışma alanı" },
      { icon: Lock, text: "Kişisel dolaplar" },
      { icon: Wifi, text: "Yüksek hızlı internet" },
    ],
    description: "Dengeli fiyat ve konfor arayanlar için ideal. Yeni arkadaşlıklar kurmak için harika bir ortam.",
  },
  {
    id: "4-kisilik",
    title: "4 Kişilik Oda",
    capacity: 4,
    price: "Fiyat için iletişime geçin",
    image: "/images/rooms/4kisi.jpg",
    features: [
      { icon: Bed, text: "Dört ayrı yatak" },
      { icon: Monitor, text: "Ortak çalışma alanı" },
      { icon: Lock, text: "Kişisel dolaplar" },
      { icon: Wifi, text: "Yüksek hızlı internet" },
    ],
    description: "Ekonomik ve sosyal bir seçenek. Canlı bir ortamda yeni arkadaşlıklar kurabilirsiniz.",
  },
  {
    id: "5-kisilik",
    title: "5 Kişilik Oda",
    capacity: 5,
    price: "Fiyat için iletişime geçin",
    image: "/images/rooms/5kisi.jpg",
    features: [
      { icon: Bed, text: "Beş ayrı yatak" },
      { icon: Monitor, text: "Ortak çalışma alanı" },
      { icon: Lock, text: "Kişisel dolaplar" },
      { icon: Wifi, text: "Yüksek hızlı internet" },
    ],
    description: "Bütçe dostu seçeneğimiz. Geniş ve ferah odalarımızda sosyal bir yaşam deneyimi.",
  },
  {
    id: "6-kisilik",
    title: "6 Kişilik Oda",
    capacity: 6,
    price: "Fiyat için iletişime geçin",
    image: "/images/rooms/6kisi.jpg",
    features: [
      { icon: Bed, text: "Altı ayrı yatak" },
      { icon: Monitor, text: "Geniş ortak çalışma alanı" },
      { icon: Lock, text: "Kişisel dolaplar" },
      { icon: Wifi, text: "Yüksek hızlı internet" },
    ],
    description: "En ekonomik seçeneğimiz. Büyük gruplar ve bütçesini düşünen öğrenciler için mükemmel.",
  },
]

export default function OdalarimizPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  
  return (
    <>
      <Header />
      <main className="min-h-screen page-bg">
        <MiniHero 
          title="Odalarımız"
          subtitle="İhtiyacınıza ve bütçenize uygun, konforlu yaşam alanları"
        />
        <section className="section-padding">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {roomTypes.map((room, index) => (
                <motion.div
                  key={room.id}
                  id={room.id}
                  initial={{ opacity: 1, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{room.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{room.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-lg font-semibold text-primary">{room.price}</span>
                      <motion.button
                        onClick={() => setQuoteModalOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                      >
                        Teklif Al
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Features />
      </main>
      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  )
}