"use client"

import { motion } from "framer-motion"
import { MapPin, Train, Bus, Car, Trees, Navigation, ExternalLink, ShoppingBag, Plane } from "lucide-react"
import Link from "next/link"

const locations = [
  {
    icon: Train,
    name: "Adnan Kahveci Metrosu",
    time: "3 Dk",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: MapPin,
    name: "Pendik",
    time: "15 Dk",
    color: "from-green-500 to-green-600",
  },
  {
    icon: ShoppingBag,
    name: "Plazza A.V.M",
    time: "20 Dk",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: ShoppingBag,
    name: "İst Marin A.V.M",
    time: "15 Dk",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Plane,
    name: "Havalimanı SAW",
    time: "25 Dk",
    color: "from-sky-500 to-sky-600",
  },
]

export default function LocationTransport() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Merkezi <span className="text-primary">Konum</span>
          </h2>
          <p className="section-subtitle">
            Ulaşımı kolay, her yere yakın konumumuzla sakinlerimize büyük kolaylık sağlıyoruz
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-6 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "0px" }}
              className="relative"
            >
              {/* Connection Line */}
              {index < locations.length - 1 && (
                <motion.div
                  className="absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 z-0"
                  initial={{ scaleX: 1 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true, margin: "0px" }}
                  style={{ transformOrigin: "left" }}
                />
              )}

              <div className="relative z-10 text-center group">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mb-3 mx-auto"
                >
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${location.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <location.icon className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                {/* Location Name */}
                <h3 className="text-sm font-semibold text-gray-900 mb-1 px-2 leading-tight min-h-[2.5rem] flex items-center justify-center">
                  {location.name}
                </h3>

                {/* Time */}
                <motion.div
                  className="inline-flex items-center gap-1 px-3 py-1 bg-primary rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Navigation className="w-3 h-3 text-white" />
                  <span className="text-sm font-medium text-white">{location.time}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md md:max-w-2xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 1, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring"
              }}
              viewport={{ once: true, margin: "0px" }}
              className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${location.color} rounded-xl flex items-center justify-center shadow-md mb-3`}>
                  <location.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-tight min-h-[2.5rem]">
                  {location.name}
                </h3>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary rounded-full">
                  <Navigation className="w-3 h-3 text-white" />
                  <span className="text-sm font-medium text-white">{location.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, margin: "0px" }}
          className="text-center mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Adresimiz</h3>
            <p className="text-gray-700 font-medium">Yalı Mahallesi Tuğra Sokak No:6 Kartal/İstanbul</p>
            <p className="text-gray-600 text-sm mt-2">
              Toplu taşıma ve özel araçlarla kolayca ulaşabilirsiniz
            </p>
            <motion.a 
              href="https://maps.app.goo.gl/p766aV1YQ13RF2TF6" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              Haritada Gör
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}