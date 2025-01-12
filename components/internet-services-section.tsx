"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search } from 'lucide-react'
import Image from 'next/image'

export function InternetServicesSection() {
  const backgroundImageUrl = "https://api.starlink.com/public-files/home_a_hero_d.webp" // Replace with actual image URL if available

  return (
    <div className="relative">
      {backgroundImageUrl && (
        <Image
          src={backgroundImageUrl}
          alt="Background"
          fill
          className="absolute inset-0 object-cover opacity-50"
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      )}
      <div
        className={`relative z-10 py-20 md:py-32 overflow-hidden ${
          backgroundImageUrl ? "" : "bg-gradient-to-b from-blue-900 to-black"
        }`}
      >
        <section>
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
              >
                On-Site & Remote Tech Support
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-white mb-8"
              >
                Expert solutions for all your computer needs, wherever you are.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
              >
                <div className="relative w-full">
                  <Input
                    type="text"
                    placeholder="Describe your issue..."
                    className="pl-10 w-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Support Now
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6"
              >
                <Button variant="link" size="sm" asChild>
                  <Link href="/support" className="text-white underline">
                    View Support Options
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

