"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Monitor, Cog, Shield, Laptop, HardDrive, Network } from 'lucide-react'

const services = [
  {
    id: "computer-sales",
    title: "Computer Sales & Services",
    description: "Get the latest desktop computers and professional repair services for all brands.",
    icon: Monitor,
    image: "https://lh3.googleusercontent.com/p/AF1QipNlru-XmYPSdXicS3WNDwXog_tu57Gg5B_VzASD=s1360-w1360-h1020",
    link: "/services/computer-sales"
  },
  {
    id: "amc-managed",
    title: "AMC Managed Services",
    description: "Comprehensive annual maintenance contracts for your IT infrastructure.",
    icon: Cog,
    image: "https://raw.githubusercontent.com/VedantDeore/DKTechSolutions/refs/heads/main/Servies-AMC.webp",
    link: "/services/amc-managed"
  },
  {
    id: "os-installation",
    title: "OS Installation & Virus Cleaning",
    description: "Professional OS installation and virus removal services to keep your system secure.",
    icon: Shield,
    image: "https://scot-comp.co.uk/wp-content/uploads/2024/12/will-a-clean-install-remove-viruses.jpg",
    link: "/services/os-installation"
  },
  {
    id: "laptop-sales",
    title: "Laptop Sales & Services",
    description: "Wide range of laptops and expert repair services for all models.",
    icon: Laptop,
    image: "https://lh3.googleusercontent.com/p/AF1QipNepyHO8f4kPWJQ3EVyCfGagzv8dpMiRyKR0Fj-=s1360-w1360-h1020",
    link: "/services/laptop-sales"
  },
  {
    id: "data-recovery",
    title: "Data Recovery",
    description: "Professional data recovery services for all storage devices.",
    icon: HardDrive,
    image: "https://www.provendata.com/wp-content/uploads/2023/09/How-Does-a-Hard-Drive-Data-Recovery-Service-Work-What-to-Expect-from-the-Hard-Drive-Recovery-Process.jpg",
    link: "/services/data-recovery"
  },
  {
    id: "networking",
    title: "Home & Office Networking",
    description: "Complete networking solutions for homes and businesses.",
    icon: Network,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgi3Th4fh2hTyqsasrWeVqcofah37AyscsQ&s",
    link: "/services/networking"
  }
]

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background dark:from-blue-900/30 dark:via-background dark:to-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-blue-200 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions for all your technology needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <service.icon className="absolute top-4 right-4 w-8 h-8 text-white z-20" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <Button asChild variant="outline" className="group/button">
                        <Link href={service.link}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-blue-600/20 dark:from-blue-900/40 dark:to-blue-800/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-6">Need Technical Support?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our expert team is ready to help you with any technical issues. Contact us for quick and reliable solutions.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Support Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

