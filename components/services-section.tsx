"use client"

import { useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion"
import Link from "next/link"
import { Computer, HardDrive, Shield, Cpu, Smartphone, Wrench, Network, PenToolIcon as Tool, Clock, Laptop, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const categories = [
  { icon: Computer, label: "Computer Sales", href: "/services/computer-sales" },
  { icon: Tool, label: "AMC Services", href: "/services/amc-managed" },
  { icon: Shield, label: "OS Installation", href: "/services/os-installation" },
  { icon: Laptop, label: "Laptop Sales", href: "/services/laptop-sales" },
  { icon: HardDrive, label: "Data Recovery", href: "/services/data-recovery" },
  { icon: Network, label: "Networking", href: "/services/networking" },
];

const featuredServices = [
  {
    title: "Computer Sales & Services",
    subtitle: "Professional Solutions",
    description: "Get the latest desktop computers and expert repair services",
    price: "Starting from ₹25,000",
    image: "https://lh3.googleusercontent.com/p/AF1QipNlru-XmYPSdXicS3WNDwXog_tu57Gg5B_VzASD=s1360-w1360-h1020",
    href: "/services/computer-sales",
  },
  {
    title: "AMC Managed Services",
    subtitle: "Annual Maintenance",
    description: "Comprehensive IT support and maintenance contracts",
    price: "Starting from ₹999/month",
    image: "https://raw.githubusercontent.com/VedantDeore/DKTechSolutions/main/Servies-AMC.webp",
    href: "/services/amc-managed",
  },
  {
    title: "OS Installation",
    subtitle: "Software Solutions",
    description: "Professional OS installation and virus removal",
    price: "Starting from ₹499",
    image: "https://scot-comp.co.uk/wp-content/uploads/2024/12/will-a-clean-install-remove-viruses.jpg",
    href: "/services/os-installation",
  },
  {
    title: "Laptop Sales & Services",
    subtitle: "Expert Support",
    description: "Wide range of laptops and repair services",
    price: "Starting from ₹35,000",
    image: "https://lh3.googleusercontent.com/p/AF1QipNepyHO8f4kPWJQ3EVyCfGagzv8dpMiRyKR0Fj-=s1360-w1360-h1020",
    href: "/services/laptop-sales",
  },
  {
    title: "Data Recovery",
    subtitle: "Professional Recovery",
    description: "Recover your valuable data from any device",
    price: "Starting from ₹1,999",
    image:
      "https://www.provendata.com/wp-content/uploads/2023/09/How-Does-a-Hard-Drive-Data-Recovery-Service-Work-What-to-Expect-from-the-Hard-Drive-Recovery-Process.jpg",
    href: "/services/data-recovery",
  },
  {
    title: "Networking Solutions",
    subtitle: "Complete Setup",
    description: "Home and office networking solutions",
    price: "Starting from ₹2,999",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgi3Th4fh2hTyqsasrWeVqcofah37AyscsQ&s",
    href: "/services/networking",
  },
];

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(300); // Initial width, adjust as needed

    useEffect(() => {
        const updateCardWidth = () => {
            const containerWidth = window.innerWidth;
            let newCardWidth = 300; // Default card width

            if (containerWidth < 768) {
              newCardWidth = containerWidth - 32; // Adjust for smaller screens
            } else {
              newCardWidth = 300; // Card width for larger screens
            }
            setCardWidth(newCardWidth)
          };

          updateCardWidth();
          window.addEventListener('resize', updateCardWidth);
          return () => window.removeEventListener('resize', updateCardWidth);
    }, [])


  const scrollTo = (index: number) => {
      const scrollLeft = index * (cardWidth + 24);
      const container = document.querySelector('.services-carousel');
      if (container) {
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
      setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollTo(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(currentIndex + 1, featuredServices.length - 1);
    scrollTo(newIndex);
  };

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
          >
            The most comprehensive computer solutions for your needs.
          </motion.p>
        </div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group flex flex-col items-center justify-center p-4 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
            >
              <category.icon className="w-8 h-8 mb-2 text-gray-500 group-hover:text-primary transition-colors" />
              <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors text-center">
                {category.label}
              </span>
            </Link>
          ))}
        </motion.div>

        {/* Featured Services */}
        <div className="relative">
          <div
            className="services-carousel flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none snap-center"
                style={{ width: `${cardWidth}px` }}
              >
                <Link href={service.href}>
                  <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        style={{width: `${cardWidth}px`}}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-primary dark:text-primary-400">{service.subtitle}</p>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <p className="text-sm font-semibold text-primary dark:text-primary-400">
                        {service.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700"
              onClick={handleNext}
              disabled={currentIndex === featuredServices.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

