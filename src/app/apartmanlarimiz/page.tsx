"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MiniHero from "@/components/MiniHero"
import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Home, Users, Car, Shield } from "lucide-react"

const locations = [
  {
    city: "KARTAL",
    district: "Yalı Mahallesi",
    features: [
      { icon: Home, text: "Modern Daireler" },
      { icon: Users, text: "1-6 Odalı Seçenekler" },
      { icon: Car, text: "Otopark" },
      { icon: Shield, text: "7/24 Güvenlik" },
    ],
    links: [
      { href: "/odalarimiz", text: "Dairelerimiz" },
      { href: "/sosyal-alanlar", text: "Sosyal Alanlar" },
      { href: "/yeme-icme", text: "Mutfak" },
      { href: "/guvenlik", text: "Güvenlik" },
    ],
  },
]

export default function ApartmanlarimizPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen page-bg">
        <MiniHero 
          title="Apartmanlarımız"
          subtitle="Kartal'da modern ve konforlu kiralık daire seçenekleri"
        />
        <section className="section-padding">
          <div className="container">

            <div className="grid grid-cols-1 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">{location.city}</h2>
                        <p className="text-white/80">{location.district}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {location.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <feature.icon className="w-5 h-5 text-primary" />
                          <span className="text-sm text-gray-600">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {location.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-center py-3 px-4 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-all hover:scale-105 font-medium"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}