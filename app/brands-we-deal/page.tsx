"use client"

import { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Brand logos with both image and SVG paths
const brands = [
  { 
    name: "Apple", 
    image: "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z"/>
      <path d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"/>
    </svg>`
  },
  { 
    name: "HP", 
    image: "https://logos-world.net/wp-content/uploads/2020/11/HP-Logo.png",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="10"/>
      <text x="50" y="65" text-anchor="middle" font-size="40" fill="currentColor">HP</text>
    </svg>`
  },
  { 
    name: "Dell", 
    image: "https://cdn.freebiesupply.com/logos/large/2x/dell-2-logo-png-transparent.png",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  { 
    name: "Asus", 
    image: "https://logolook.net/wp-content/uploads/2023/09/Asus-Logo.png",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  { 
    name: "Nvidia", 
    image: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/527px-Nvidia_logo.svg.png?20150924223142",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  { 
    name: "MSI", 
    image: "https://logolook.net/wp-content/uploads/2023/10/MSI-Logo.png",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  { 
    name: "Lenovo", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  { 
    name: "SONY", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHinEOMI-Am_FHDzvZZnuudaLsSnSE9Of-A&s",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  { 
    name: "Acer", 
    image: "https://logos-world.net/wp-content/uploads/2022/11/Acer-Logo.png",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  { 
    name: "LG", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-ObYncNs6W43u-DweXic4PZ839bFflTogQ&s",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  { 
    name: "Samsung", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  { 
    name: "Google", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  { 
    name: "Gigabyte", 
    image: "https://1000logos.net/wp-content/uploads/2020/05/Gigabyte-Logo.png",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  { 
    name: "TATA", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzD9iBdEOivOry0YRMvDD5lHLFipaPcDRiQ&s",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect x="10" y="30" width="80" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="currentColor">LENOVO</text>
    </svg>`
  },
  
  // Add more brands with similar pattern...
].map(brand => ({
  ...brand,
  fallbackImage: "/placeholder.svg?height=100&width=200"
}))

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

interface BrandLogoProps {
  brand: typeof brands[0]
  className?: string
}

function BrandLogo({ brand, className }: BrandLogoProps) {
  const [imageError, setImageError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (imageError) {
    return (
      <div 
        className={cn("w-full h-full flex items-center justify-center", className)}
        dangerouslySetInnerHTML={{ 
          __html: brand.svg.replace('currentColor', 'rgb(var(--foreground))') 
        }} 
      />
    )
  }

  return (
    <Image
      src={brand.image}
      alt={`${brand.name} logo`}
      width={200}
      height={100}
      className={cn("object-contain transition-transform duration-300 group-hover:scale-110", className)}
      onError={() => setImageError(true)}
      priority
    />
  )
}

export default function BrandsWeDealPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-background dark:to-background">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background dark:from-blue-900/30 dark:via-background dark:to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4 md:px-6"
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-blue-200"
            >
              Brands We Deal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
            >
              We partner with leading technology brands to provide you with the best products and services.
            </motion.p>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Brands Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              className="group"
            >
              <Card className={cn(
                "relative overflow-hidden p-6 transition-all duration-300",
                "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm",
                "hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20",
                "transform hover:-translate-y-2 hover:bg-blue-50 dark:hover:bg-blue-900/30",
                "border border-blue-100 dark:border-blue-900"
              )}>
                <div className="relative w-full h-full flex items-center justify-center min-h-[150px]">
                  <BrandLogo brand={brand} className={cn("max-w-full max-h-[80px] transition-transform duration-300 group-hover:scale-110")} />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trust Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-black">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container px-4 md:px-6"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600 dark:text-blue-400">Trusted Partnerships</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our partnerships with industry-leading brands allow us to offer you the latest technology solutions and expert support. 
                Trust DK Tech Solutions for all your computer and technology needs.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

