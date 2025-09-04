"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface MiniHeroProps {
  title: string
  subtitle?: string
}

export default function MiniHero({ title, subtitle }: MiniHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        {/* Dynamic Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.2) 0%, transparent 50%)`
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.1 }}
        />
        
        {/* Interactive Light Effects */}
        <motion.div 
          className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 2 - 100,
            y: mousePosition.y * 2 - 100,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 100 }}
        />
        <motion.div 
          className="absolute w-64 h-64 bg-secondary-light/20 rounded-full blur-3xl"
          animate={{
            right: mousePosition.x * 3 - 50,
            bottom: mousePosition.y * 3 - 50,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 50 }}
        />
        
        {/* Subtle breathing effect */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-light/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 1, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.h1
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
      
      {/* Mouse Scroll Animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-white rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  )
}