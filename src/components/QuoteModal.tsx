"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Phone, Mail, User, Home, Sparkles, CheckCircle } from "lucide-react"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

const roomTypes = [
  { value: "1-kisilik", label: "1 Kişilik Oda" },
  { value: "2-kisilik", label: "2 Kişilik Oda" },
  { value: "3-kisilik", label: "3 Kişilik Oda" },
  { value: "4-kisilik", label: "4 Kişilik Oda" },
  { value: "5-kisilik", label: "5 Kişilik Oda" },
  { value: "6-kisilik", label: "6 Kişilik Oda" },
]

const benefits = [
  "24 Saat İçinde Dönüş",
  "Özel İndirim Fırsatları",
  "Ücretsiz Yurt Turu",
]

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    roomType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      // Reset form when modal closes
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", email: "", roomType: "" })
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Database'e kaydet
      const response = await fetch('/api/simple-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        
        // Google Ads conversion tracking
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-17514420608/nQQACPuIp48bEICzw59B'
          });
        }
        
        // Reset form after 3 seconds and close modal
        setTimeout(() => {
          setFormData({ name: "", phone: "", email: "", roomType: "" })
          setIsSubmitted(false)
          onClose()
        }, 3000)
      } else {
        alert('Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error)
      alert('Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-lg max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gradient-to-r from-primary to-primary-dark p-4 md:p-6 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <div className="pr-8">
                <h3 className="text-xl md:text-2xl font-bold mb-1">Hemen Teklif Alın</h3>
                <p className="text-white/90 text-sm md:text-base">
                  Formu doldurun, size özel fiyat teklifimizi iletelim.
                </p>
              </div>
              
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
              />
            </div>
            
            <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {!isSubmitted ? (
                <>
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-4 pb-4 border-b">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-xs md:text-sm"
                      >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-gray-700">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                        Adınız Soyadınız
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Örn: Ayşe Yılmaz"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                        Telefon Numaranız
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Örn: 0555 555 55 55"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                        E-posta Adresiniz
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Örn: ayse@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                        İlgilendiğiniz Oda Tipi
                      </label>
                      <div className="relative">
                        <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Seçiniz</option>
                          {roomTypes.map((room) => (
                            <option key={room.value} value={room.value}>
                              {room.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Teklif Al
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Talebiniz Alındı!
                  </h4>
                  <p className="text-gray-600">
                    En kısa sürede size dönüş yapacağız.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}