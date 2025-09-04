"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MiniHero from "@/components/MiniHero"
import { motion } from "framer-motion"
import { Utensils, Clock, Apple, Coffee, Salad, Cookie, ChefHat, Refrigerator, Soup, CoffeeIcon } from "lucide-react"

const services = [
  {
    icon: Coffee,
    title: "Ücretsiz Kahvaltı",
    description: "Her sabah zengin açık büfe kahvaltı hizmetimizden ücretsiz yararlanabilirsiniz.",
    highlight: "ÜCRETSİZ",
  },
  {
    icon: Utensils,
    title: "Yemekhane",
    description: "Alt katta bulunan yemekhanemizde akşam yemeği hizmeti sunulmaktadır.",
    highlight: "AKŞAM YEMEĞİ",
  },
  {
    icon: ChefHat,
    title: "Tam Donanımlı Mutfak",
    description: "Kendinizi evinizde hissedeceğiniz, dilediğiniz yemeği yapabileceğiniz tam donanımlı mutfak.",
    highlight: "7/24 AÇIK",
  },
  {
    icon: Soup,
    title: "Kantin",
    description: "Öğrencilerimizin sosyalleşme ve çalışma alanı olarak kullanabileceği kantinimiz.",
    highlight: "SOSYAL ALAN",
  },
  {
    icon: CoffeeIcon,
    title: "İçecek Otomatları",
    description: "Soğuk ve sıcak içecek ile ambalajlı ürünler otomatlarımız 7/24 hizmetinizde.",
    highlight: "7/24 HİZMET",
  },
  {
    icon: Refrigerator,
    title: "Mini Buzdolabı",
    description: "Her odada özel kullanım için mini buzdolabı hizmeti sunuyoruz.",
    highlight: "HER ODADA",
  },
]

const features = [
  {
    icon: Apple,
    title: "Sağlıklı Beslenme",
    description: "Uzman diyetisyen kontrolünde hazırlanan menüler",
  },
  {
    icon: Utensils,
    title: "Ev Lezzetleri",
    description: "Anne eli değmiş, ev yapımı yemekler",
  },
  {
    icon: Clock,
    title: "Esnek Saatler",
    description: "İhtiyaçlarınıza uygun yemek saatleri",
  },
]

export default function YemeIcmePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen page-bg">
        <MiniHero 
          title="Yeme İçme" 
          subtitle="Öğrencilerimizin sağlıklı beslenmesi ve sosyalleşmesi için zengin imkanlar sunuyoruz"
        />
        
        <section className="section-padding">
          <div className="container">
            

            {/* Özellikler */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow"
                >
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Hizmetler Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px" }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-gradient-to-br from-primary to-primary-dark p-4 rounded-full group-hover:scale-110 transition-transform">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      {service.highlight && (
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          {service.highlight}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Özel Bilgiler */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px" }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Kahvaltı Bilgisi */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Ücretsiz Kahvaltı</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Yurdumuzda kahvaltı öğünü <strong>tamamen ücretsiz</strong> olarak verilmektedir. 
                  Zengin açık büfe kahvaltımızla güne enerjik başlayın!
                </p>
                <div className="bg-green-100 rounded-lg p-4">
                  <p className="text-sm text-green-800 font-medium">
                    Kahvaltı Saatleri: 07:00 - 10:00 (Hafta içi ve hafta sonu)
                  </p>
                </div>
              </div>

              {/* Akşam Yemeği Bilgisi */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Utensils className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Akşam Yemeği</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Dilerseniz akşam yemeğinizi alt katta bulunan yemekhanemizde yiyebilirsiniz. 
                  Ev yemekleri kalitesinde, doyurucu ve lezzetli menüler.
                </p>
                <div className="bg-blue-100 rounded-lg p-4">
                  <p className="text-sm text-blue-800 font-medium">
                    Akşam Yemeği Saatleri: 18:30 - 20:30
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}