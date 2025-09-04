"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedGradientProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedGradient({ children, className }: AnimatedGradientProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, #f42a93 0%, transparent 40%)",
            "radial-gradient(circle at 80% 20%, #0080FE 0%, transparent 40%)",
            "radial-gradient(circle at 40% 40%, #f42a93 0%, transparent 40%)",
            "radial-gradient(circle at 20% 80%, #f42a93 0%, transparent 40%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}