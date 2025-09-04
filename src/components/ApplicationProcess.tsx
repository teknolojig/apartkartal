"use client"

import { motion } from "framer-motion"
import { FileText, Phone, Eye, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Online Başvuru",
    description: "Web sitemizden veya telefonla başvuru formunu doldurun",
  },
  {
    number: "02",
    icon: Phone,
    title: "İletişim",
    description: "Ekibimiz sizinle iletişime geçerek detaylı bilgi verecek",
  },
  {
    number: "03",
    icon: Eye,
    title: "Yurt Gezisi",
    description: "Yurdumuzu ziyaret edin, odaları ve sosyal alanları görün",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Kayıt İşlemleri",
    description: "Uygun oda seçimi ve kayıt işlemlerinin tamamlanması",
  },
]

export default function ApplicationProcess() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Başvuru <span className="text-primary">Süreci</span>
          </h2>
          <p className="section-subtitle">
            4 basit adımda yurdumuza kayıt olabilirsiniz
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 1, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "0px" }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative group">
                  {/* Step Number */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>

                  {/* Arrow - Mobile & Tablet */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 text-primary rotate-90 lg:rotate-0" />
                    </motion.div>
                  )}
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}