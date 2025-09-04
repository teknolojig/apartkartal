"use client"

import { motion } from "framer-motion"
import { Shield, Users, Utensils, Wifi, BookOpen, Car } from "lucide-react"
import { useEffect, useState } from "react"

const features = [
  {
    icon: Shield,
    title: "7/24 Güvenlik",
    description: "Profesyonel güvenlik ekibi ve kamera sistemleri ile tam güvenlik",
  },
  {
    icon: Users,
    title: "Sosyal Alanlar",
    description: "Çalışma salonları, dinlenme alanları ve ortak kullanım alanları",
  },
  {
    icon: Utensils,
    title: "Yeme-İçme",
    description: "Ücretsiz kahvaltı, tam donanımlı mutfak ve yemekhane hizmeti",
  },
  {
    icon: Wifi,
    title: "Yüksek Hızlı İnternet",
    description: "Tüm alanlarda kesintisiz fiber internet bağlantısı",
  },
  {
    icon: BookOpen,
    title: "Çalışma Ortamı",
    description: "Sessiz ve konforlu çalışma salonları",
  },
  {
    icon: Car,
    title: "Ulaşım Kolaylığı",
    description: "Metro ve otobüs duraklarına yakın konum",
  },
]

export default function Features() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Neden <span className="text-primary">Apart Kartal?</span>
          </h2>
          <p className="section-subtitle">
            Sakinlerimizin rahat ve huzurlu bir ortamda yaşamaları için
            sunduğumuz ayrıcalıklar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: isMobile ? 0.3 : 0.5, 
                delay: isMobile ? 0 : index * 0.05 
              }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:border-primary/20 group transform-gpu"
              whileHover={!isMobile ? { 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              } : {}}
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 transform-gpu group-hover:scale-110">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}