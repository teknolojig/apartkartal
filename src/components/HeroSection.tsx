"use client"

import { motion } from "framer-motion"
import { Shield, Heart, Home, Star, Users, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-20 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-orange-200/40 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
            >
              <Star className="w-4 h-4" />
              Kadınlara Özel Güvenli Yaşam Alanı
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
              >
                Apart Kartal
                <span className="block text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2">
                  Kadın Dostu
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-700 mt-2">
                  Yaşam Alanları
                </span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg"
            >
              Kartal'da <span className="text-primary font-semibold">güvenli</span>, 
              <span className="text-primary font-semibold"> konforlu</span> ve 
              <span className="text-primary font-semibold"> modern</span> kiralık daireler
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: Shield, text: "7/24 Güvenlik", color: "text-green-600" },
                { icon: Heart, text: "Kadın Dostu Ortam", color: "text-pink-600" },
                { icon: Home, text: "Modern Tesisler", color: "text-blue-600" },
                { icon: Users, text: "Sosyal Alanlar", color: "text-purple-600" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="tel:+905074373440"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                Hemen Ara
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl border-2 border-gray-200 hover:border-primary/30 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:h-[600px] xl:h-[700px] flex items-center justify-center"
          >
            {/* Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-200/20 rounded-full transform scale-110" />
            
            {/* Woman Image */}
            <motion.div
              animate={{ 
                y: [0, -10, 0] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 flex items-center justify-center w-full h-full"
            >
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] xl:w-[400px] xl:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-women.jpg"
                  alt="Apart Kartal - Kadınlar için güvenli yaşam alanları"
                  fill
                  className="object-cover object-center"
                  priority
                  quality={90}
                />
                {/* Overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Floating Elements around image */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-10 right-10 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <Heart className="w-8 h-8 text-primary" />
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: -360,
                y: [0, -15, 0]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-20 left-10 w-20 h-20 bg-pink-200/30 rounded-full flex items-center justify-center"
            >
              <Home className="w-10 h-10 text-pink-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
        >
          <div className="w-1 h-3 bg-primary rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}