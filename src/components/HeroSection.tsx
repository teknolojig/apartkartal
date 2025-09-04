"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, Shield, Heart, Play, Send } from "lucide-react"
import { LazyVideoModal, LazyQuoteModal } from "./LazySection"

export default function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Mouse takibi sadece desktop'ta
    if (window.innerWidth > 768) {
      const handleMouseMove = (e: MouseEvent) => {
        requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100
          })
        })
      }

      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <section className="relative h-[90vh] sm:h-[85vh] md:h-[80vh] lg:h-[75vh] xl:h-[70vh] min-h-[650px] sm:min-h-[600px] md:min-h-[550px] flex items-center justify-center overflow-hidden w-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-hidden">
        {/* Dynamic Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.2) 0%, transparent 50%)`
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.1 }}
        />
        
        {/* Interactive Light Effects - sadece desktop */}
        <motion.div 
          className="hidden md:block absolute w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x * 2 - 100,
            y: mousePosition.y * 2 - 100,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 50 }}
        />
        <motion.div 
          className="hidden md:block absolute w-80 h-80 bg-secondary-light/20 rounded-full blur-3xl pointer-events-none"
          animate={{
            right: mousePosition.x * 3 - 50,
            bottom: mousePosition.y * 3 - 50,
          }}
          transition={{ type: "spring", damping: 70, stiffness: 30 }}
        />
        
        {/* Subtle breathing effect - daha basit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary-light/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20 md:pt-16 lg:pt-12 pb-8 sm:pb-12 md:pb-8 lg:pb-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl">
              Birgül Hanım
              <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-light mt-2 text-white/90">
                Kartal Kız Öğrenci Yurdu
              </span>
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto font-light px-4 sm:px-0"
          >
            Kartal&apos;da güvenli, konforlu ve modern yaşam alanları
          </motion.p>
          
          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12"
          >
            {[
              { icon: Shield, text: "7/24 Güvenlik" },
              { icon: Users, text: "Modern Tesisler" },
              { icon: Heart, text: "Aile Ortamı" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 1, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm sm:text-base"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center px-4 sm:px-0"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 font-semibold text-white bg-primary-dark rounded-full shadow-2xl hover:bg-primary hover:shadow-white/20 transition-all duration-300 text-sm sm:text-base"
              >
                <Play className="w-5 h-5" />
                <span>Tanıtım Videosu</span>
              </button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 font-semibold text-white bg-primary-dark rounded-full shadow-2xl hover:bg-primary hover:shadow-white/20 transition-all duration-300 text-sm sm:text-base"
              >
                <Send className="w-5 h-5" />
                <span>Teklif Al</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 1, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xl sm:max-w-2xl mx-auto mt-12 sm:mt-14 md:mt-16"
          >
            {[
              { value: "1.500+", label: "Mutlu Öğrenci" },
              { value: "15+", label: "Yıllık Deneyim" },
              { value: "7/24", label: "Destek" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 1, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.value}</h2>
                <p className="text-white/70 text-xs sm:text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Mouse Scroll Animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden xl:block z-0 pointer-events-none"
      >
        <div className="w-7 h-12 border-2 border-white/50 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
          />
        </div>
      </motion.div>
      
      {videoModalOpen && <LazyVideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />}
      {quoteModalOpen && <LazyQuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />}
    </section>
  )
}