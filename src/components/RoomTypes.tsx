"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Users } from "lucide-react"

const roomTypes = [
  {
    id: 1,
    title: "1 Kişilik Oda",
    description: "Tam konfor ve mahremiyet",
    features: ["Tek kişilik yatak", "Çalışma masası", "Gardırop", "Mini buzdolabı"],
    icon: <Users className="w-6 h-6" />,
    capacity: 1,
    image: "/images/rooms/1kisi.jpg",
  },
  {
    id: 2,
    title: "2 Kişilik Oda",
    description: "Arkadaşınızla konforlu yaşam",
    features: ["İki ayrı yatak", "İki çalışma masası", "Geniş gardırop", "Mini buzdolabı"],
    icon: <Users className="w-6 h-6" />,
    capacity: 2,
    image: "/images/rooms/2kisi.jpg",
  },
  {
    id: 3,
    title: "3 Kişilik Oda",
    description: "Dengeli ve konforlu",
    features: ["Üç ayrı yatak", "Ortak çalışma alanı", "Gardırop", "Mini buzdolabı"],
    icon: <Users className="w-6 h-6" />,
    capacity: 3,
    image: "/images/rooms/3kisi.jpg",
  },
  {
    id: 4,
    title: "4 Kişilik Oda",
    description: "Ekonomik ve sosyal",
    features: ["Dört ayrı yatak", "Ortak çalışma alanı", "Gardırop", "Mini buzdolabı"],
    icon: <Users className="w-6 h-6" />,
    capacity: 4,
    image: "/images/rooms/4kisi.jpg",
  },
  {
    id: 5,
    title: "5 Kişilik Oda",
    description: "Bütçe dostu",
    features: ["Beş ayrı yatak", "Geniş çalışma alanı", "Kişisel dolaplar", "Mini buzdolabı"],
    icon: <Users className="w-6 h-6" />,
    capacity: 5,
    image: "/images/rooms/5kisi.jpg",
  },
  {
    id: 6,
    title: "6 Kişilik Oda",
    description: "En ekonomik seçenek",
    features: ["Altı ayrı yatak", "Ekstra geniş alan", "Kişisel dolaplar", "Mini buzdolabı"],
    icon: <Users className="w-6 h-6" />,
    capacity: 6,
    image: "/images/rooms/6kisi.jpg",
  },
]

export default function RoomTypes() {
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
            Oda <span className="text-primary">Seçeneklerimiz</span>
          </h2>
          <p className="section-subtitle">
            İhtiyacınıza ve bütçenize uygun farklı oda alternatifleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {roomTypes.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "0px" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group transform-gpu"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 transform-gpu"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{room.title}</h3>
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: room.capacity }).map((_, i) => (
                      <Users key={i} className="w-5 h-5" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/odalarimiz"
                  className="block text-center bg-primary text-white font-medium py-2 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Detayları Gör
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}