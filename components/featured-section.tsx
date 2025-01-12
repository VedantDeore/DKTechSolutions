"use client"

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function FeaturedSection() {
  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      </div>

      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* PRO Text with Enhanced Glow Effect */}
          <div className="relative h-[200px] mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Outer Glow */}
              <div className="absolute text-[150px] font-bold text-white opacity-10 blur-[50px] select-none">
                PRO
              </div>
              
              {/* Middle Glow */}
              <div className="absolute text-[150px] font-bold text-white opacity-20 blur-[25px] select-none">
                PRO
              </div>

              {/* Inner Glow */}
              <div className="absolute text-[150px] font-bold text-white opacity-50 blur-[8px] select-none">
                PRO
              </div>
              
              {/* Main Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative text-[150px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-400 via-white to-blue-500 select-none"
                style={{
                  textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)'
                }}
              >
                PRO
              </motion.div>

              {/* Animated Shine Effect */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, -20% 100%)' }}
              />
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Professional IT Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Expert Computer Repair & Support
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Link href="/services">
                Learn more
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 bg-black/20 backdrop-blur-sm"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              animate={{ 
                opacity: [0, 1, 0],
                x: ['100%', '-100%']
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full"
              style={{
                top: `${30 + (i * 20)}%`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

