"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MiniHero from "@/components/MiniHero"
import Features from "@/components/Features"
import { motion } from "framer-motion"
import { BookOpen, Tv, Coffee, Users, Dumbbell, Music, Gamepad2, TreePalm } from "lucide-react"

const socialAreas = [
  {
    icon: Tv,
    title: "Dinlenme Odaları",
    description: "Öğrencilerimizin dinlenebileceği, televizyon izleyebilecekleri konforlu alanlar",
    features: ["Rahat koltuklar", "Geniş ekran TV", "Huzurlu atmosfer"],
  },
  {
    icon: Music,
    title: "Sinema ve TV Odası",
    description: "BLU TV, Exxen ve Netflix'ten ücretsiz yararlanabileceğiniz sinema salonu",
    features: ["Netflix ücretsiz erişim", "BLU TV aboneliği", "Exxen platformu", "Büyük projeksiyon ekranı"],
  },
  {
    icon: Gamepad2,
    title: "Oyun Salonu",
    description: "Keyifli zamanlar geçirebileceğiniz, günün stresini atabileceğiniz oyun alanı",
    features: ["Satranç takımları", "Tabu oyunu", "Scrabble", "Okey masaları"],
  },
  {
    icon: Dumbbell,
    title: "Spor Merkezi",
    description: "Sağlıklı bir yaşam için özenle dizayn edilmiş spor salonu",
    features: ["Modern ekipmanlar", "Kardiyo aletleri", "Ağırlık bölümü", "7/24 açık"],
  },
  {
    icon: TreePalm,
    title: "Açık Teras ve Çardak",
    description: "Öğrencilerimizin arkadaşlarıyla sosyalleşebileceği açık hava alanları",
    features: ["Ferah teras alanı", "Oturma grupları", "Manzaralı çardak", "Yeşil alan"],
  },
  {
    icon: BookOpen,
    title: "Çalışma Salonları",
    description: "Sessiz ve konforlu çalışma ortamı",
    features: ["7/24 açık", "Yüksek hızlı internet", "Bireysel çalışma alanları", "Grup çalışma odaları"],
  },
]

export default function SosyalAlanlarPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen page-bg">
        <MiniHero 
          title="Sosyal Alanlarımız" 
          subtitle="Eğitim hayatınızı zenginleştiren modern ve konforlu ortak kullanım alanları"
        />
        
        <section className="section-padding">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px" }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-primary to-primary-dark w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg"
                  >
                    <area.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <ul className="space-y-2">
                    {area.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        viewport={{ once: true, margin: "0px" }}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
        
        {/* Neden Birgül Hanım Bölümü */}
        <Features />
      </main>
      <Footer />
    </>
  )
}