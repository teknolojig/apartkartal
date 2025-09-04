"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Lens from "./Lens"
import VideoModal from "./VideoModal"
import GalleryModal from "./GalleryModal"

const images = [
  { src: "/galeri/1.jpeg", alt: "Modern Yatak Odası" },
  { src: "/galeri/2.jpeg", alt: "Konforlu Yaşam Alanı" },
  { src: "/galeri/3.jpeg", alt: "Ferah Çalışma Odası" },
  { src: "/galeri/4.jpeg", alt: "Temiz ve Düzenli Oda" },
  { src: "/galeri/5.jpeg", alt: "Ortak Kullanım Alanı" },
  { src: "/galeri/6.jpeg", alt: "Modern Sosyal Alan" },
  { src: "/galeri/9.jpeg", alt: "Spor Salonu" },
  { src: "/galeri/10.jpeg", alt: "Açık Alan" },
  { src: "/galeri/7.jpeg", alt: "Dinlenme Alanı" },
  { src: "/galeri/8.jpeg", alt: "Yemek Salonu" },
]

export default function YurdumuzSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [galleryModalOpen, setGalleryModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Apartmanımızdan <span className="text-primary">Kareler</span>
          </h2>
          <p className="section-subtitle">
            Modern ve konforlu yaşam alanlarımızı yakından inceleyin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.slice(0, 8).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "0px" }}
              className="group"
            >
              <div
                onClick={() => {
                  setSelectedImageIndex(index)
                  setGalleryModalOpen(true)
                }}
                className="cursor-pointer"
              >
                <Lens imageSrc={image.src} zoomFactor={2} lensSize={120}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 transform-gpu">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Lens>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
      <GalleryModal 
        isOpen={galleryModalOpen} 
        onClose={() => setGalleryModalOpen(false)} 
        images={images}
        initialIndex={selectedImageIndex}
      />
    </section>
  )
}