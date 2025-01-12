"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function StarlinkSection() {
  const services = [
    {
      title: "Residential",
      tagline: "Connect at home",
      image: "https://api.starlink.com/public-files/home_a_residential_d.webp", // Replace with relevant image
      link: "/services/residential", // Replace with relevant link
    },
    {
      title: "Business",
      tagline: "Connect on the go",
      image: "https://api.starlink.com/public-files/home_a_roam_d.webp", // Replace with relevant image
      link: "/services/business", // Replace with relevant link
    },
    {
      title: "Enterprise",
      tagline: "Connect on the water",
      image: "https://api.starlink.com/public-files/home_boats_d.jpg", // Replace with relevant image
      link: "/services/enterprise", // Replace with relevant link
    },
  ]

  return (
    <section className="bg-black">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-lg"></div>
                <div className="absolute top-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-lg">{service.tagline}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DK Tech Solutions for Businesses and Power Users
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Reliable high-speed internet designed to keep businesses connected.
          </p>
          <Button asChild>
            <Link href="/contact" className="text-white">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

