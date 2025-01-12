"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users, Clock, DollarSign, Laptop, CheckCircle } from 'lucide-react'

export default function AboutPage() {
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
              About DK Tech Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for all laptop repair needs since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-6">Welcome to DK Tech Solutions</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Since 2010, we have been delivering top-notch services with unmatched quality and affordable pricing.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our team of highly skilled and experienced technicians is dedicated to providing comprehensive laptop repair services. Whether you're facing hardware issues, software glitches, or any technical problem, we ensure a quick and effective solution, available at your home, office, or anywhere across [City/Region].
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We specialize in repairing all major laptop brands, including Dell, HP, Lenovo, Acer, Apple, Compaq, Toshiba, Sony, Samsung, and Asus. Just give us a call whenever you need reliable laptop repair services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <img src="/placeholder.svg?height=400&width=600" alt="DK Tech Solutions Team" className="rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-4">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              At DK Tech Solutions, we take pride in our team of trained, certified, and customer-oriented professionals. Our goal is to deliver reliable, high-quality service tailored to your needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expertise", description: "Skilled professionals delivering reliable solutions" },
              { title: "Customer Focus", description: "Building long-term relationships through transparency" },
              { title: "Versatility", description: "Catering to various IT-related needs" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              >
                <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-4">Why Choose DK Tech Solutions?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Expert Technicians", description: "Skilled professionals who deliver reliable and effective solutions." },
              { icon: Clock, title: "Fast Service", description: "We attend to complaints all over [City/Region] within an hour." },
              { icon: DollarSign, title: "Affordable Rates", description: "High-quality services at competitive prices." },
              { icon: Laptop, title: "Comprehensive Support", description: "On-site, in-store, and online remote support available." },
              { icon: CheckCircle, title: "Registered & Trusted", description: "We are a government-registered business and comply with all tax regulations." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              >
                <Card className="h-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <item.icon className="w-12 h-12 text-primary dark:text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-blue-600/20 dark:from-blue-900/40 dark:to-blue-800/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              To provide professional IT solutions at reasonable prices while ensuring customer satisfaction. At DK Tech Solutions, we combine expertise, technology, and a customer-centric approach to deliver services that exceed expectations.
            </p>
            <Button size="lg">
              Contact Us <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

