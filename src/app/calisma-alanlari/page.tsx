"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MiniHero from "@/components/MiniHero"
import Features from "@/components/Features"
import { motion } from "framer-motion"
import { BookOpen, Phone, Sparkles, Users, Clock, Wifi } from "lucide-react"

const studyFeatures = [
  {
    icon: BookOpen,
    title: "Sessiz Çalışma Odaları",
    description: "Sınavlara ve ödevlere odaklanabileceğiniz sessiz ortamlar",
    features: ["Bireysel çalışma masaları", "Ergonomik sandalyeler", "Göz yormayan aydınlatma", "Ses yalıtımı"],
  },
  {
    icon: Users,
    title: "Grup Çalışma Alanları",
    description: "Arkadaşlarınızla birlikte proje ve ödevler yapabileceğiniz alanlar",
    features: ["Geniş çalışma masaları", "Beyaz tahta", "Projeksiyon imkanı", "Rahat oturma grupları"],
  },
  {
    icon: Wifi,
    title: "Yüksek Hızlı İnternet",
    description: "Araştırma ve online dersler için fiber internet altyapısı",
    features: ["100 Mbps hız", "Kesintisiz bağlantı", "Tüm alanlarda Wi-Fi", "Güvenli ağ"],
  },
]

const mainFeatures = [
  {
    icon: Sparkles,
    title: "Temiz ve Düzenli Ortam",
    description: "Sakinlerimizin rahat çalışabilmesi için temiz ortamlar sunuyoruz",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Her Katta Telefon",
    description: "Her katta yönetimle kolayca iletişim kurabilmeniz için telefon bulunmaktadır",
    color: "from-green-500 to-green-600",
  },
]

export default function CalismaAlanlariPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen page-bg">
        <MiniHero 
          title="Çalışma Alanlarımız" 
          subtitle="Akademik başarınız için tasarlanmış modern ve konforlu çalışma ortamları"
        />
        
        <section className="section-padding">
          <div className="container">
            
            {/* Ana Özellikler */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {mainFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all"
                >
                  <div className={`bg-gradient-to-br ${feature.color} w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Çalışma Alanı Özellikleri */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Çalışma Alanı <span className="text-primary">Özelliklerimiz</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sakinlerimizin verimli çalışmaları için her detayı düşündüğümüz çalışma alanlarımız
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studyFeatures.map((area, index) => (
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
        
        {/* Neden Apart Kartal Bölümü */}
        <Features />
      </main>
      <Footer />
    </>
  )
}