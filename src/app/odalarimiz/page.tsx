"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MiniHero from "@/components/MiniHero"
import QuoteModal from "@/components/QuoteModal"
import { motion } from "framer-motion"
import { Users, Wifi, Home, Shield, Heart, Star, Phone, MessageCircle, Check } from "lucide-react"
import Image from "next/image"

const apartmentTypes = [
  {
    id: "1-kisilik-daire",
    title: "1 Kişilik Daire",
    capacity: 1,
    price: "32.000₺",
    originalPrice: "35.000₺",
    image: "/images/rooms/1kisi.jpg",
    features: [
      "Özel banyo ve tuvalet",
      "Mini mutfak", 
      "Klima sistemi",
      "Yüksek hızlı WiFi",
      "24/7 güvenlik",
      "Haftalık temizlik hizmeti"
    ],
    description: "Tam mahremiyet ve konfor isteyenler için ideal. Modern tasarım ve kaliteli mobilyalar ile donatılmış özel yaşam alanınız.",
    highlight: false
  },
  {
    id: "2-kisilik-daire", 
    title: "2 Kişilik Daire",
    capacity: 2,
    price: "27.000₺",
    originalPrice: "30.000₺",
    image: "/images/rooms/2kisi.jpg",
    features: [
      "Özel banyo ve tuvalet",
      "Tam donanımlı mutfak",
      "İki yatak odası",
      "Salon alanı",
      "Klima sistemi", 
      "Balkon"
    ],
    description: "Arkadaş ya da eş ile birlikte yaşayanlar için mükemmel. Geniş ve konforlu yaşam alanı.",
    highlight: true
  },
  {
    id: "3-kisilik-daire",
    title: "3 Kişilik Daire", 
    capacity: 3,
    price: "22.000₺",
    originalPrice: "25.000₺",
    image: "/images/rooms/3kisi.jpg",
    features: [
      "Ortak banyo ve tuvalet",
      "Tam donanımlı mutfak",
      "Üç yatak odası",
      "Geniş salon alanı",
      "Klima sistemi",
      "Balkon"
    ],
    description: "Ekonomik ve sosyal yaşamı seven gruplar için ideal. Geniş ortak alanlar ve konforlu yatak odaları.",
    highlight: false
  },
  {
    id: "4-kisilik-daire",
    title: "4 Kişilik Daire",
    capacity: 4, 
    price: "18.000₺",
    originalPrice: "20.000₺",
    image: "/images/rooms/4kisi.jpg",
    features: [
      "Ortak banyo ve tuvalet",
      "Tam donanımlı mutfak",
      "Dört yatak odası",
      "Geniş salon alanı",
      "Klima sistemi",
      "Geniş balkon"
    ],
    description: "En ekonomik seçenek. Öğrenci grupları ve arkadaşlar için ideal büyük daire seçeneği.",
    highlight: false
  }
]

export default function DairelerimizPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MiniHero 
        title="Daire Seçeneklerimiz"
        subtitle="Modern ve konforlu yaşam alanları"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kiralık <span className="text-primary">Daire Seçenekleri</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              1-4 kişilik farklı kapasitelerde modern dairelerimiz, ihtiyaçlarınıza göre tasarlanmış konforlu yaşam alanları sunar.
            </p>
          </motion.div>

          {/* Apartment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {apartmentTypes.map((apartment, index) => (
              <motion.div
                key={apartment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  apartment.highlight ? 'ring-4 ring-primary/20 relative' : ''
                }`}
              >
                {apartment.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      EN POPÜLER
                    </span>
                  </div>
                )}

                <div className="md:flex">
                  {/* Image */}
                  <div className="relative md:w-1/2 h-64 md:h-auto">
                    <Image
                      src={apartment.image}
                      alt={apartment.title}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-6 h-6 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase">
                          {apartment.capacity} Kişilik
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {apartment.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {apartment.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          {apartment.price}
                        </span>
                        {apartment.originalPrice && (
                          <>
                            <span className="text-lg text-gray-400 line-through">
                              {apartment.originalPrice}
                            </span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                              İndirimli
                            </span>
                          </>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm">Aylık kira bedeli (tüm faturalar dahil)</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Daire Özellikleri:</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {apartment.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setQuoteModalOpen(true)}
                        className="flex-1 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        Rezervasyon Yap
                      </button>
                      <a
                        href="tel:+905074373440"
                        className="flex-1 border-2 border-primary text-primary font-semibold py-3 px-6 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-center"
                      >
                        Hemen Ara
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-3xl p-8 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Hemen İletişime Geçin
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Daire ziyareti yapabilir ve size en uygun seçeneği bulabiliriz. 
                Kadınlara özel güvenli yaşam alanlarımızı keşfedin.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+905074373440"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  0507 437 34 40
                </motion.a>
                
                <motion.button
                  onClick={() => setQuoteModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  )
}