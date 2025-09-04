"use client"

import dynamic from "next/dynamic"
import { ComponentType, ReactNode } from "react"

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function LazySection({ children, fallback }: LazySectionProps) {
  return (
    <>
      {fallback || <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-32 mx-auto"></div>
        </div>
      </div>}
      {children}
    </>
  )
}

// Lazy load components
export const LazyTestimonials = dynamic(
  () => import("@/components/Testimonials"),
  { 
    loading: () => (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-32 mx-auto"></div>
        </div>
      </div>
    ),
    ssr: true
  }
)

export const LazyLocationTransport = dynamic(
  () => import("@/components/LocationTransport"),
  { 
    loading: () => (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-32 mx-auto"></div>
        </div>
      </div>
    ),
    ssr: true
  }
)

export const LazyApplicationProcess = dynamic(
  () => import("@/components/ApplicationProcess"),
  { 
    loading: () => (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-32 mx-auto"></div>
        </div>
      </div>
    ),
    ssr: true
  }
)

export const LazyGalleryModal = dynamic(
  () => import("@/components/GalleryModal"),
  { 
    loading: () => null,
    ssr: false
  }
)

export const LazyVideoModal = dynamic(
  () => import("@/components/VideoModal"),
  { 
    loading: () => null,
    ssr: false
  }
)

export const LazyQuoteModal = dynamic(
  () => import("@/components/QuoteModal"),
  { 
    loading: () => null,
    ssr: false
  }
)