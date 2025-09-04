"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import RoomTypes from "@/components/RoomTypes"
import Testimonials from "@/components/Testimonials"
import ApplicationProcess from "@/components/ApplicationProcess"
import YurdumuzSection from "@/components/YurdumuzSection"
import { motion } from "framer-motion"
import { MapPin, Clock, Train, GraduationCap, Shield, BookOpen, Send, Phone } from "lucide-react"
import { useState } from "react"
import QuoteModal from "@/components/QuoteModal"

export default function OkanUniversitesiPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section - Okan Üniversitesi Özel */}
        <section className="relative h-[85vh] md:h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-secondary">
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Okan Üniversitesi
                <span className="block text-2xl md:text-4xl lg:text-5xl font-light mt-3 text-white/90">
                  Kız Öğrenci Yurdu
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Okan Üniversitesi'ne kolay ulaşım, güvenli ve konforlu yaşam alanları
              </p>

              {/* Özellikler */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Okan Üniversitesi'ne 15 Dk</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white"
                >
                  <Train className="w-5 h-5" />
                  <span>Metro 3 Dk</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white"
                >
                  <Shield className="w-5 h-5" />
                  <span>7/24 Güvenlik</span>
                </motion.div>
              </div>

              {/* CTA Butonları */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all shadow-2xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Hemen Teklif Al</span>
                </button>
                
                <a
                  href="tel:+905330359573"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-primary transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Hemen Ara</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Okan Üniversitesi Özel Bilgi Bölümü */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Neden Okan Üniversitesi Öğrencileri <span className="text-primary">Bizi Tercih Ediyor?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Okan Üniversitesi'ne kolay ulaşımımız ve sunduğumuz imkanlarla öğrencilerin güvenilir tercihi oluyoruz
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Kolay Ulaşım",
                  description: "Okan Üniversitesi'ne toplu taşıma ile kolayca ulaşabilirsiniz",
                  highlight: "15 DK"
                },
                {
                  icon: Train,
                  title: "Metro Yakınlığı",
                  description: "Adnan Kahveci Metro Durağı'na 3 dakika mesafedeyiz",
                  highlight: "3 DK"
                },
                {
                  icon: Clock,
                  title: "Çalışma Alanları",
                  description: "Sessiz çalışma odalarımız ve grup çalışma alanlarımız mevcut",
                  highlight: "7/24"
                },
                {
                  icon: BookOpen,
                  title: "Ücretsiz Kahvaltı",
                  description: "Her sabah zengin açık büfe kahvaltı ücretsiz sunulmaktadır",
                  highlight: "ÜCRETSİZ"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-primary">{feature.highlight}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Okan Üniversitesi Öğrencilerine Özel Fiyatlar!
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  Şimdi başvurun, size özel fiyat teklifimizi alın
                </p>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Hemen Başvur</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ana Sayfa Bileşenleri */}
        <YurdumuzSection />
        <RoomTypes />
        <Features />
        <ApplicationProcess />
        <Testimonials />

        {/* Son CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Okan Üniversitesi Öğrencileri İçin Güvenli Yurt
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Hemen arayın veya formumuzu doldurun, size özel teklifimizi alalım
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Online Başvuru</span>
              </button>
              <a
                href="tel:+905330359573"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-primary transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>0533 035 95 73</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  )
} 