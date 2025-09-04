"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MiniHero from "@/components/MiniHero"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: "Yalı Mahallesi Tuğra Sokak No:6",
    detail: "34873 Kartal/İstanbul",
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+90 507 437 34 40",
    detail: "Hafta içi 08:00 - 20:00",
  },
  {
    icon: Mail,
    title: "E-posta",
    content: "info@apartkartal.com.tr",
    detail: "24 saat içinde dönüş",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+90 533 034 57 46",
    detail: "Hızlı iletişim için",
  },
]

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.')
        
        // Google Ads conversion tracking
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-17514420608/nQQACPuIp48bEICzw59B'
          });
        }
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        alert('Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error)
      alert('Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen page-bg">
        <MiniHero 
          title="İletişim"
          subtitle="Sorularınız için bize ulaşın, size en kısa sürede dönüş yapalım"
        />
        <section className="section-padding">
          <div className="container">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 1, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "0px" }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgilerimiz</h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 1, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "0px" }}
                      className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="bg-primary/10 p-3 rounded-full">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-700">{info.content}</p>
                        <p className="text-sm text-gray-500">{info.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 1, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "0px" }}
                className="bg-white rounded-xl shadow-xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Bize Ulaşın</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Konu
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Seçiniz</option>
                      <option value="kiralama">Kiralama ve Fiyat Bilgisi</option>
                      <option value="daire">Daire Bilgisi</option>
                      <option value="ziyaret">Daire Ziyareti</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mesajınız
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Mesaj Gönder
                  </motion.button>
                </form>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px" }}
              className="mt-12 bg-white rounded-xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Konumumuz</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.8662920677143!2d29.22374350000001!3d40.8967478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa7c22a681f721b9%3A0xdbbc7256b835f7bf!2zYmlyZ8O8bCBoYW7EsW0ga8SxeiDDtsSfcmVuY2kgeXVyZHUga2FydGFs!5e0!3m2!1str!2str!4v1750662672466!5m2!1str!2str" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}