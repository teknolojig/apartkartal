"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, ExternalLink, Bed, Utensils, Users, Shield, BookOpen, Info } from "lucide-react"
import { motion } from "framer-motion"

const footerLinks = {
  apartmanlarimiz: [
    { name: "Dairelerimiz", href: "/odalarimiz", icon: Bed },
    { name: "Mutfak", href: "/yeme-icme", icon: Utensils },
    { name: "Sosyal Alanlar", href: "/sosyal-alanlar", icon: Users },
    { name: "Güvenlik", href: "/guvenlik", icon: Shield },
    { name: "Çalışma Alanları", href: "/calisma-alanlari", icon: BookOpen },
  ],
  kurumsal: [
    { name: "Hakkımızda", href: "/hakkimizda", icon: Info },
    { name: "İletişim", href: "/iletisim", icon: Phone },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/apartkartal/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/apartkartal/", label: "Facebook" },
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(244, 42, 147, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(0, 128, 254, 0.15) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Image
              src="/beyazlogo.svg"
              alt="Apart Kartal Logo"
              width={256}
              height={71}
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              15 yılı aşkın deneyimimizle Kartal&apos;ın en güvenli ve konforlu kiralık daire adresi.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              İletişim Bilgileri
            </h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Adres</p>
                  <p className="text-gray-300 text-sm">
                    Yalı Mahallesi Tuğra Sokak No:6<br />
                    34873 Kartal/İstanbul
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <a href="tel:+905074373440" className="text-gray-300 text-sm hover:text-primary transition-colors">
                    +90 507 437 34 40
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">E-Mail</p>
                  <a href="mailto:info@apartkartal.com" className="text-gray-300 text-sm hover:text-primary transition-colors break-all">
                    info@apartkartal.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links - Yurdumuz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Apartmanımız
            </h4>
            <ul className="space-y-3">
              {footerLinks.apartmanlarimiz.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <link.icon className="w-4 h-4 text-white opacity-60" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links - Kurumsal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kurumsal
            </h4>
            <ul className="space-y-3">
              {footerLinks.kurumsal.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <link.icon className="w-4 h-4 text-white opacity-60" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Apart Kartal. Tüm hakları saklıdır.
            </p>
            <a 
              href="https://teknolojig.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <Image
                src="/images/TeknolojigLogo.svg"
                alt="Teknolojig SEO"
                width={120}
                height={30}
                className="h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}