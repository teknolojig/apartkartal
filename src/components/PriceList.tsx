"use client"

import { motion } from "framer-motion"
import { Check, MapPin, Phone, Users, Wifi, Car, ShieldCheck, UtensilsCrossed } from "lucide-react"

const priceOptions = [
  {
    id: 1,
    title: "1 Kişilik Daire",
    price: "32.000",
    originalPrice: "35.000",
    description: "Tam konfor ve mahremiyet",
    features: [
      "Özel banyo",
      "Mini mutfak",
      "Klima",
      "WiFi",
      "Güvenlik",
      "Temizlik hizmeti"
    ],
    popular: false,
    capacity: 1
  },
  {
    id: 2,
    title: "2 Kişilik Daire",
    price: "27.000",
    originalPrice: "30.000",
    description: "Paylaşımlı konforlu yaşam",
    features: [
      "Özel banyo",
      "Mini mutfak", 
      "Klima",
      "WiFi",
      "Güvenlik",
      "Temizlik hizmeti"
    ],
    popular: true,
    capacity: 2
  },
  {
    id: 3,
    title: "3 Kişilik Daire", 
    price: "22.000",
    originalPrice: "25.000",
    description: "Dengeli ve ekonomik",
    features: [
      "Ortak banyo",
      "Mini mutfak",
      "Klima", 
      "WiFi",
      "Güvenlik",
      "Temizlik hizmeti"
    ],
    popular: false,
    capacity: 3
  },
  {
    id: 4,
    title: "4 Kişilik Daire",
    price: "18.000", 
    originalPrice: "20.000",
    description: "En ekonomik seçenek",
    features: [
      "Ortak banyo",
      "Ortak mutfak",
      "Klima",
      "WiFi", 
      "Güvenlik",
      "Temizlik hizmeti"
    ],
    popular: false,
    capacity: 4
  }
]

const amenities = [
  { icon: Wifi, text: "Ücretsiz WiFi" },
  { icon: Car, text: "Otopark" },
  { icon: ShieldCheck, text: "7/24 Güvenlik" },
  { icon: UtensilsCrossed, text: "Mutfak" }
]

export default function PriceList() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kiralık Apart
            <span className="block text-primary">Fiyat Listesi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Kartal merkezde modern ve konforlu yaşam alanları
          </p>
          
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-semibold text-lg"
          >
            <MapPin className="w-5 h-5" />
            Kartal Pendik Merkezleri 15 Dk • Metroya Yürüme Mesafesinde
          </motion.div>
        </motion.div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {priceOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                option.popular 
                  ? 'border-primary ring-4 ring-primary/20' 
                  : 'border-gray-100 hover:border-primary/30'
              }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    EN POPÜLER
                  </span>
                </div>
              )}
              
              <div className="p-6">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-3">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {option.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {option.price}
                    </span>
                    <span className="text-lg text-gray-600">₺</span>
                  </div>
                  {option.originalPrice && (
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-gray-400 line-through">
                        {option.originalPrice}₺
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        İndirimli
                      </span>
                    </div>
                  )}
                  <p className="text-gray-500 text-sm mt-2">Aylık kira bedeli</p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    option.popular
                      ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
                  }`}
                >
                  İncele & İletişim
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Tüm Dairelerde Standart Olanaklar
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <amenity.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-gray-700 font-medium">{amenity.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">
            Hemen İletişime Geçin
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Tüm faturalar dahil, oda içerisinde özel banyo-tuvalet
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+905074373440"
              className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-lg">0507 437 34 40</span>
            </a>
            
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5" />
              <span>Adnan Kahveci Metro Yanı Kartal İstanbul</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}