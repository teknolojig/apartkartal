"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram } from "lucide-react"
import Script from "next/script"

export default function InstagramSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px" }}
          className="text-center mb-8"
        >
          <h2 className="section-title">
            Sosyal Medyada <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Birgül Hanım</span>
          </h2>
          <p className="section-subtitle">
            @birgulhanimyurtlarikartal hesabımızı takip edin
          </p>
        </motion.div>

        {/* LightWidget Instagram Feed - Daraltılmış ve optimize edilmiş */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "0px" }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-md p-3 border border-gray-100">
            <Script 
              src="https://cdn.lightwidget.com/widgets/lightwidget.js"
              strategy="afterInteractive"
            />
            <iframe 
              src="//lightwidget.com/widgets/a785280a5bba5fda8973e24adfefb41f.html?nc=1" 
              scrolling="no" 
              className="lightwidget-widget"
              style={{ 
                width: '100%', 
                border: 0, 
                overflow: 'hidden', 
                height: '320px'
              }}
              title="Instagram Feed"
              {...({ allowTransparency: true } as any)}
            />
          </div>
        </motion.div>

        {/* View More Button - Daha küçük */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "0px" }}
          className="text-center mt-6"
        >
          <Link
            href="https://www.instagram.com/birgulhanimyurtlarikartal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md text-sm"
          >
            <Instagram className="w-4 h-4" />
            Instagram'da Daha Fazlası
          </Link>
        </motion.div>
      </div>
    </section>
  )
}