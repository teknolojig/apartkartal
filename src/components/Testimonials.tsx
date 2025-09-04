"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Zeynep Beyza Şengül",
    content: "Yeni bir yurt olmasına rağmen kendini iyileştirme ve geliştirme yönünden gayretli, Öğrenci memnuniyetini önemsiyorlar🌺güler yüzlü personel,temiz yurt,ulaşım bakımından çok iyi herkese tavsiye ederim Ben çok memnun kaldım💚",
    rating: 5
  },
  {
    id: 2,
    name: "İrem Caran",
    content: "Ben kısa süre kaldım ama gerçekten ulaşım yönünden çok kolay bir mevkide otobüs duraklarına yakın yeni bir yurt olmasına rağmen çok güzel ilgilenildi temiz ve en önemliside güvenilir bir yurt kesinlikle tavsiye ederim en yakın zamanda yine geleceğim 😊",
    rating: 5
  },
  {
    id: 3,
    name: "Buket Küçükşakar",
    content: "E'5 e yakın otobüs ve metro durağı yürüme mesafesinde ulaşım açısından konumu çok iyi. Fiyat açısından çevre yurtlara göre uygun. Çalışanlar güler yüzlü ve anlayışlı.Yurdun yeni olması açısından da ilgimi çekti. Odalar gayet kullanışlı ve temiz.",
    rating: 5
  },
  {
    id: 4,
    name: "Helin Tilki",
    content: "Bu yıl açılmış bir yurt her şey çok yeni,ilk yılı olmasına rağmen oda içleri her şey tam eksiklikler olduğunda hemen ilgileniliyor konum olarak çok iyi güvenlik açısından da bir sıkıntı yok ben çok memnunum",
    rating: 5
  },
  {
    id: 5,
    name: "Hülya Deringöl",
    content: "Çocuğumuzu yurda verdik tam bir aile ortamı basta yönetim ve tüm çalışanlarına cok cok teşekkür ederiz. Gönül rahatlığıyla çocuklarınızı bırakabilirsiniz.",
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Hydration için mounted kontrolü
  useEffect(() => {
    setMounted(true)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  // Masaüstü için 3'lü gösterim, mobil için tek gösterim
  const getVisibleTestimonials = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      // Basit 3'lü gösterim
      const indices = []
      for (let i = 0; i < 3; i++) {
        indices.push((currentIndex + i) % testimonials.length)
      }
      return indices.map(index => testimonials[index])
    }
    return [testimonials[currentIndex]]
  }

  // Server-side rendering için default değer
  if (!mounted) {
    return (
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Öğrencilerimiz <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ne Diyor?</span>
            </h2>
            <p className="section-subtitle">
              Birgül Hanım ailesinin bir parçası olan öğrencilerimizin deneyimleri
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse bg-gray-200 rounded-3xl w-full max-w-7xl h-64"></div>
          </div>
        </div>
      </section>
    )
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Öğrencilerimiz <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ne Diyor?</span>
          </h2>
          <p className="section-subtitle">
            Birgül Hanım ailesinin bir parçası olan öğrencilerimizin deneyimleri
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Sol Navigation Button */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 group z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
          </button>

          {/* Sağ Navigation Button */}
          <button
            onClick={nextTestimonial}
            className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 group z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
          </button>

          {/* Desktop: 3'lü Grid, Mobile: Tek Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-gray-100 hover:border-primary/20 transition-all duration-300 h-full">
                  {/* Quote Icon */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white rotate-180" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base min-h-[120px] lg:min-h-[140px]">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 lg:gap-4 pt-6 border-t border-gray-100">
                    <div className="relative">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <span className="text-lg lg:text-xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{testimonial.name}</h3>
                      <p className="text-xs lg:text-sm text-primary font-medium">Öğrenci</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  )
}