"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxTextProps {
  children: string
  className?: string
}

export function ParallaxText({ children, className }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className={cn(
              "text-6xl md:text-8xl font-bold text-primary/10 mr-8",
              className
            )}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}