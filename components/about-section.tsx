"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

const stats = [
  { value: 5000, label: "Computers Repaired" },
  { value: 10, label: "Years of Experience" },
  { value: 2000, label: "Happy Customers" }
]

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepTime = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep += 1
      const progress = currentStep / steps
      const currentCount = Math.round(progress * value)
      
      if (currentStep === steps) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(currentCount)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-4xl font-bold text-primary"
    >
      {count.toLocaleString()}+
    </motion.span>
  )
}

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About DK Tech Solutions</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              With over a decade of experience, DK Tech Solutions has been providing top-notch computer repair and IT services.
              Our team of certified technicians is dedicated to solving your tech problems efficiently and effectively.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              {[
                "10+ Years of Experience",
                "Certified Technicians",
                "Fast Turnaround Time",
                "Affordable Pricing",
                "Customer Satisfaction Guaranteed",
                "Latest Tech Solutions",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg
                    className="text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <AnimatedNumber value={stat.value} />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

