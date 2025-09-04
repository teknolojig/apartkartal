"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MiniHero from "@/components/MiniHero"
import Features from "@/components/Features"
import { motion } from "framer-motion"
import { Shield, Camera, Lock, Users, Phone, AlertCircle } from "lucide-react"

const securityFeatures = [
  {
    icon: Camera,
    title: "7/24 Kamera Sistemi",
    description: "Tüm ortak alanlar ve girişler sürekli izleniyor",
    details: [
      "HD kalitede kayıt",
      "Gece görüş özelliği",
      "30 günlük arşiv",
      "Profesyonel takip",
    ],
  },
  {
    icon: Users,
    title: "Güvenlik Personeli",
    description: "Profesyonel güvenlik ekibi her an göreve hazır",
    details: [
      "7/24 nöbet sistemi",
      "Sertifikalı personel",
      "Düzenli devriye",
      "Acil durum eğitimi",
    ],
  },
  {
    icon: Lock,
    title: "Kartlı Geçiş Sistemi",
    description: "Yurt girişleri kartlı sistemle kontrol altında",
    details: [
      "Kişiye özel kartlar",
      "Giriş-çıkış kaydı",
      "Misafir takibi",
      "Kayıp kart iptali",
    ],
  },
  {
    icon: Phone,
    title: "Acil Durum Sistemi",
    description: "Her kata yerleştirilmiş acil durum butonları",
    details: [
      "Anında müdahale",
      "Sesli uyarı sistemi",
      "İtfaiye bağlantısı",
      "Sağlık ekibi iletişimi",
    ],
  },
]


export default function GuvenlikPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen page-bg">
        <MiniHero 
          title="Güvenlik" 
          subtitle="Öğrencilerimizin güvenliği bizim en önemli önceliğimiz"
        />
        
        <section className="section-padding">
          <div className="container">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 1, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px" }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-primary to-primary-dark p-4 rounded-full">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <Shield className="w-4 h-4 text-primary" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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