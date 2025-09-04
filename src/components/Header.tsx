"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone, Send, MapPin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import QuoteModal from "./QuoteModal"

const navigation = [
  { name: "HAKKIMIZDA", href: "/hakkimizda" },
  {
    name: "APARTIMIZ",
    href: "/apartmanlarimiz",
    dropdown: [
      { name: "Yeme İçme", href: "/yeme-icme" },
      { name: "Sosyal Alanlar", href: "/sosyal-alanlar" },
      { name: "Güvenlik", href: "/guvenlik" },
      { name: "Çalışma Alanları", href: "/calisma-alanlari" },
    ],
  },
  { name: "DAİRELER", href: "/odalarimiz" },
  { name: "İLETİŞİM", href: "/iletisim" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      // Scroll pozisyonunu kaydet ve body'yi sabitle
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
    } else {
      // Scroll pozisyonunu geri yükle
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      window.scrollTo(0, parseInt(scrollY || "0") * -1)
    }
    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled && !mobileMenuOpen ? "bg-white shadow-xl" : "bg-white/95 backdrop-blur-md shadow-lg",
          mobileMenuOpen ? "lg:bg-white lg:shadow-xl" : ""
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <Link href="/" className={cn("flex items-center gap-3", mobileMenuOpen && "lg:block hidden")}>
                <Image
                  src="/logo.svg"
                  alt="Apart Kartal Logo"
                  width={256}
                  height={71}
                  priority
                  className="h-10 md:h-14 w-auto transition-all duration-300"
                  quality={90}
                />
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="ml-6 flex items-center space-x-2">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.dropdown ? (
                      <div>
                        <button
                          className={cn(
                            "px-4 py-2 text-base font-semibold uppercase tracking-wide transition-colors flex items-center gap-1",
                            scrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary"
                          )}
                        >
                          {item.name}
                          <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                        </button>
                        <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="bg-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 py-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-2 text-base font-semibold uppercase tracking-wide transition-colors",
                          scrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="flex items-center gap-1.5 ml-2">
                  <motion.a
                    href="tel:+905074373440"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg bg-green-600 text-white hover:bg-green-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>HEMEN ARA</span>
                  </motion.a>
                  <motion.button
                    onClick={() => setQuoteModalOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg bg-primary text-white hover:bg-primary-dark"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>TEKLİF AL</span>
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
                className="inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary text-gray-700 hover:text-primary hover:bg-gray-100"
              >
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-[100vw] sm:max-w-sm bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-y-auto overflow-x-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/beyazlogo.svg"
                    alt="Apart Kartal Logo"
                    width={200}
                    height={56}
                    priority
                    className="h-12 w-auto"
                    quality={90}
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <X className="h-6 w-6 text-white" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.dropdown ? (
                        <div className="space-y-1">
                          <button
                            onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name)}
                            className="w-full flex items-center justify-between px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 rounded-lg transition-colors"
                          >
                            {item.name}
                            <ChevronDown 
                              className={cn(
                                "w-5 h-5 transition-transform duration-300",
                                mobileDropdownOpen === item.name ? "rotate-180" : ""
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileDropdownOpen === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 space-y-1 py-2">
                                  {item.dropdown.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-6 space-y-3"
                  >
                    <a 
                      href="tel:+905330359573"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full py-4 bg-white/90 text-gray-700 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      HEMEN ARAYIN
                    </a>
                    <button 
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setQuoteModalOpen(true)
                      }}
                      className="w-full py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      TEKLİF AL
                    </button>
                  </motion.div>
                </nav>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 pt-8 border-t border-white/20"
                >
                  <div className="space-y-3 text-white/80">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Yalı Mah. Tuğra Sok. No:6 Kartal/İstanbul</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-white flex-shrink-0" />
                      <span>+90 507 437 34 40</span>
                    </p>
                    <div className="flex items-start gap-2">
                      <Mail className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-sm break-words">info@apartkartal.com.tr</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  )
}