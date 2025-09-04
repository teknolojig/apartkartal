"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface LensProps {
  children: React.ReactNode
  imageSrc: string
  zoomFactor?: number
  lensSize?: number
}

export default function Lens({
  children,
  imageSrc,
  zoomFactor = 2,
  lensSize = 150,
}: LensProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-lg cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      <motion.div
        className="absolute pointer-events-none rounded-full border-2 border-white shadow-2xl z-50"
        style={{
          width: lensSize,
          height: lensSize,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(2px)",
          left: position.x - lensSize / 2,
          top: position.y - lensSize / 2,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.8,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 },
        }}
      >
        <div
          className="w-full h-full rounded-full overflow-hidden"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: `${-position.x * zoomFactor + lensSize / 2}px ${
              -position.y * zoomFactor + lensSize / 2
            }px`,
            backgroundSize: `${containerRef.current?.offsetWidth ? containerRef.current.offsetWidth * zoomFactor : 0}px ${
              containerRef.current?.offsetHeight ? containerRef.current.offsetHeight * zoomFactor : 0
            }px`,
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>
    </div>
  )
}