"use client"

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { LoadingScreen } from "@/components/loading-screen"

const HeroSection = dynamic(() => import("@/components/hero-section").then(mod => ({ default: mod.HeroSection })), { ssr: false })
const FeaturedSection = dynamic(() => import("@/components/featured-section").then(mod => ({ default: mod.FeaturedSection })), { ssr: false })
const ProductShowcase = dynamic(() => import("@/components/product-showcase").then(mod => ({ default: mod.ProductShowcase })), { ssr: false })
const ServicesSection = dynamic(() => import("@/components/services-section").then(mod => ({ default: mod.ServicesSection })), { ssr: false })
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), { ssr: false })
const GoogleReviews = dynamic(() => import("@/components/google-reviews").then(mod => ({ default: mod.GoogleReviews })), { ssr: false })
const CTASection = dynamic(() => import("@/components/cta-section").then(mod => ({ default: mod.CTASection })), { ssr: false })
const InternetServicesSection = dynamic(() => import('@/components/internet-services-section').then(mod => mod.InternetServicesSection), { ssr: false })
const StarlinkSection = dynamic(() => import('@/components/starlink-section').then(mod => mod.StarlinkSection), { ssr: false })


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time - reduced to 800ms
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={`flex flex-col min-h-screen ${isLoading ? 'hidden' : ''}`}>
        <HeroSection />
        <FeaturedSection />
        <ProductShowcase />
        <ServicesSection />
        <AboutSection />
        <InternetServicesSection />
        <StarlinkSection />
        <GoogleReviews />
        <CTASection />
      </div>
    </>
  )
}

