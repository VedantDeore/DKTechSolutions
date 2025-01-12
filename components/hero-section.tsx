"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, Facebook, Twitter, Instagram, Laptop, HardDrive, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const trendingServices = [
  {
    id: "01",
    title: "COMPUTER REPAIR SERVICES",
    icon: "🔧",
    link: "/services/computer-sales",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    id: "02",
    title: "DATA RECOVERY SOLUTIONS",
    icon: "💾",
    link: "/services/data-recovery",
    color: "from-purple-500/20 to-purple-600/20"
  }
]

const tags = [
  "Expert Support", "Hardware", "Software", 
  "Security", "Networking", "Maintenance",
  "Recovery", "Repair", "Technology", 
  "Professional"
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [binaryText, setBinaryText] = useState("TECHNOLOGY")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
    let iteration = 0
    clearInterval(intervalRef.current!)
    intervalRef.current = setInterval(() => {
      setBinaryText(prevText =>
        prevText
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return "TECHNOLOGY"[index]
            }
            return Math.random() > 0.5 ? "0" : "1"
          })
          .join("")
      )
      if (iteration >= "TECHNOLOGY".length) {
        clearInterval(intervalRef.current!)
      }
      iteration += 1 / 3
    }, 30)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    clearInterval(intervalRef.current!)
    setBinaryText("TECHNOLOGY")
  }

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -bottom-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-blue-500/20 to-primary/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-start mb-12"
        >
          <div className="max-w-2xl">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                SHAPING THE FUTURE
              </span>
              <span className="block mt-2">
                WITH{" "}
                <motion.span
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="inline-block cursor-pointer"
                >
                  {binaryText}
                </motion.span>
                :
              </span>
              <span className="block mt-2">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                  SOLUTIONS & IMPACT
                </span>
              </span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Discover how DK Tech Solutions is revolutionizing
              computer repair and IT services with professional expertise
            </motion.p>
          </div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild
              className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              <Link href="/contact">
                Contact Us
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ml-2 group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Solutions Sidebar */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3"
          >
            <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Solutions</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Professional computer repair and IT services for all your technology needs
              </p>
              <div className="mt-4">
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full justify-between hover:shadow-md transition-all duration-300"
                >
                  <Link href="/services" className="group">
                    View All Services
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Central Services Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5"
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-40 bg-gradient-to-r from-primary to-blue-600 relative">
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                    backgroundSize: "24px",
                    opacity: 0.3
                  }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Professional Services</span>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, x: 20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 border-2 border-white dark:border-gray-800"
                      />
                    ))}
                    <motion.div
                      initial={{ scale: 0, x: 20 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-primary border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-white"
                    >
                      +5
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Expert Services</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive computer repair and IT services delivered by certified technicians
                </p>
              </div>
            </Card>

            {/* Service Cards */}
            <div className="grid grid-cols-1 gap-4 mt-4">
              <Link href="/services/laptop-sales">
                <Card className="p-4 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-8 h-8 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-lg flex items-center justify-center text-primary"
                    >
                      <Laptop className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">Computer & Laptop Services</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Expert repair services for all brands and models</p>
                    </div>
                  </div>
                </Card>
              </Link>
              <Link href="/services/data-recovery">
                <Card className="p-4 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-primary/20 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400"
                    >
                      <HardDrive className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">Data Recovery</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Professional data recovery from all storage devices</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4"
          >
            <Card className="p-6 mb-4 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Trending services worth exploring
              </h3>
              <div className="space-y-4">
                {trendingServices.map((service) => (
                  <Link href={service.link} key={service.id}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center justify-between p-4 rounded-lg bg-gradient-to-r ${service.color} hover:shadow-md transition-all duration-300`}
                    >
                      <div className="flex items-center gap-4">
                        <motion.span 
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-2xl"
                        >
                          {service.icon}
                        </motion.span>
                        <div>
                          <span className="text-sm text-gray-500">{service.id}</span>
                          <h4 className="font-semibold">{service.title}</h4>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Tags Cloud */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 cursor-pointer
                      ${activeTag === tag 
                        ? 'bg-primary text-primary-foreground border-primary' 
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary'
                      }`}
                    onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <motion.div 
              variants={fadeInUp}
              className="flex justify-end gap-4 mt-4"
            >
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link 
                     href={
                     index === 0 ? "https://www.instagram.com/dk_tech_solutions?igsh=MThzbm9vYmVtMGt6bw==" : 
                      index === 1 ? "https://www.twitter.com" : 
                      "https://www.facebook.com"
                      }  
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

