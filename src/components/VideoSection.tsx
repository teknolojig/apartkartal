"use client"

import { motion } from "framer-motion"
import { YouTubeEmbed } from "@next/third-parties/google"

export default function VideoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Yurdumuzu <span className="text-primary">Tanıyın</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern tesislerimizi ve yaşam alanlarımızı yakından görün
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <YouTubeEmbed
                videoid="lKfa0tnbQYA"
                params="mute=1&showinfo=0&controls=1&rel=0"
                style="width: 100%; height: 100%;"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}