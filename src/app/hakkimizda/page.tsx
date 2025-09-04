"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MiniHero from "@/components/MiniHero"
import { motion } from "framer-motion"
import { Heart, Award, Users, Calendar } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Calendar, value: "15+", label: "Yıllık Deneyim" },
  { icon: Users, value: "1.500+", label: "Mutlu Müşteri" },
  { icon: Award, value: "100%", label: "Memnuniyet" },
  { icon: Heart, value: "7/24", label: "Destek" },
]

const values = [
  {
    title: "Güvenli Ortam",
    description: "Sakinlerimizin güvenliği bizim en önemli önceliğimizdir. 7/24 güvenlik sistemi ve profesyonel personelimizle huzurlu bir ortam sağlıyoruz.",
  },
  {
    title: "Aile Sıcaklığı",
    description: "Apartmanlarımızı sadece bir konaklama yeri olarak görmüyoruz. Her sakinimize kendi evindeymiş gibi hissettiren sıcak bir ortam sunuyoruz.",
  },
  {
    title: "Profesyonel Destek",
    description: "Sakinlerimizin iş ve çalışma hayatları için ideal çalışma ortamları ve gerekli tüm imkanları sağlıyoruz.",
  },
  {
    title: "Modern Yaşam",
    description: "Çağın gereksinimlerine uygun, modern ve konforlu yaşam alanları ile sakinlerimizin tüm ihtiyaçlarını karşılıyoruz.",
  },
]

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen page-bg">
        <MiniHero 
          title="Hakkımızda"
          subtitle="15 yılı aşkın deneyimimizle İstanbul Kartal'da güvenli, konforlu ve modern kiralık daireler sunuyoruz."
        />
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 via-white to-primary/5">
          <div className="container relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Apart Kartal&apos;a{" "}
                  <span className="text-primary">Hoş Geldiniz</span>
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    2009 yılından bu yana İstanbul Kartal&apos;da faaliyet gösteren yurdumuz, 
                    kiracılarımıza ev sıcaklığında, güvenli ve konforlu bir yaşam alanı sunmaktadır.
                  </p>
                  <p>
                    Modern tesislerimiz, deneyimli personelimiz ve müşteri odaklı hizmet anlayışımızla, 
                    sakinlerimizin rahat yaşamalarına katkıda bulunurken, sosyal ihtiyaçlarını da destekliyoruz.
                  </p>
                  <p>
                    Kiracılarımızın huzurlu ve mutlu olduğu bir ortam yaratmak için 
                    sürekli kendimizi geliştiriyor ve yeniliyoruz.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/5 to-secondary/5">
                  <Image
                    src="/logo.svg"
                    alt="Apart Kartal"
                    width={256}
                    height={71}
                    className="w-4/5 h-auto"
                  />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                <span className="text-primary">Değerlerimiz</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:scale-105"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-white text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Misyonumuz</h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto">
                Kiracılarımıza güvenli, huzurlu ve ev sıcaklığında bir ortam sunarak, 
                rahat ve konforlu yaşamalarına katkıda bulunmak, güvenlerini kazanmak 
                ve müşteri memnuniyetini en üst düzeyde tutmaktır.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Bize Katılın
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}