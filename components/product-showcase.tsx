"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function ProductShowcase() {
  return (
    <section className="w-full">
       {/* Top Showcase */}
      <div className="relative w-full bg-gradient-to-b from-[rgb(179,229,252)] to-white dark:from-blue-950 dark:to-background py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-2"
            >
              Premium Laptops
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-4"
            >
              All brands. Latest tech. Does it all.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              <Button variant="outline" size="sm" asChild>
                <Link href="/services/laptop-sales">Learn more</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/contact">Buy</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 relative w-full max-w-2xl"
            >
              <Image
                src="a.png"
                alt="Premium Laptops"
                className="w-full h-auto"
                width={500} // Provide default width for better layout
                height={300} // Provide default height for better layout
                style={{
                  display: 'block', // Ensure image is always displayed as a block
                  margin: '0 auto', // Center the image
                  maxWidth: '100%', // Prevent image from overflowing
                  height: 'auto', // Maintain aspect ratio
                }}
                onError={(e) => {
                  // Hide the image if it fails to load
                  e.currentTarget.style.display = 'none'
                }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Hello, Professional Computing.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Split Showcase  */}
      <div className="grid md:grid-cols-2">
        {/* Left Section */}
        <div className="relative bg-white dark:bg-black p-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <h2 className="text-2xl font-bold mb-1">DESKTOP</h2>
            <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-1">SOLUTIONS</h3>
            <p className="text-xl mb-4">High-performance computing.</p>
            <div className="flex gap-2 justify-center mb-6">
              <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/services/computer-sales">Learn more</Link>
              </Button>
              <Button variant="outline" size="sm" className="border-gray-200" asChild>
                <Link href="/contact">Buy</Link>
              </Button>
            </div>
            <div className="mt-4">
              <Image
                src="a.png"
                alt="Desktop Solutions"
                width={500}
                height={300}
                style={{
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: '100%',
                  height: 'auto',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="relative bg-black p-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <h2 className="text-2xl font-bold text-white mb-1">DATA</h2>
            <h3 className="text-lg text-gray-400 mb-1">RECOVERY</h3>
            <p className="text-xl text-white mb-4">Professional recovery services.</p>
            <div className="flex gap-2 justify-center mb-6">
              <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/services/data-recovery">Learn more</Link>
              </Button>
              <Button variant="outline" size="sm" className="border-gray-200 dark:text-white dark:border-white" asChild>
                <Link href="/contact">Buy</Link>
              </Button>
            </div>
            <div className="mt-4">
              <Image
                src="a.png"
                alt="Data Recovery Services"
                width={500}
                height={300}
                style={{
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: '100%',
                  height: 'auto',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
     

      {/* iPhone 16 Showcase */}
      <div className="relative w-full bg-gradient-to-b from-blue-900 to-blue-500 py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2"
            >
              dktech 16
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-white mb-4"
            >
              Hello, Artificial Intelligence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              <Button variant="outline" size="sm" className="text-blue-900 border-blue-200 dark:text-white dark:border-white" asChild>
                <Link href="/services/mobile-phone-repair">Learn more</Link>
              </Button>
              <Button size="sm" className="bg-white text-blue-500" asChild>
                <Link href="/contact">Buy</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 relative w-full max-w-2xl"
            >
              <Image
                src="https://www.apple.com/v/iphone-14-pro/a/images/overview/hero/hero_endframe__e5xbgo5ffjmu_large_2x.jpg"
                alt="iPhone 16"
                width={500}
                height={300}
                className="w-full h-auto"
                style={{
                  display: 'block',
                  margin: '0 auto',
                }}
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Services Grid */}
      <div className="grid md:grid-cols-2 gap-px">
        {/* Trade-in Services */}
        <div className="relative bg-gray-50 dark:bg-gray-900 p-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <h3 className="text-2xl font-bold mb-2">Trade-in Services</h3>
            <p className="text-muted-foreground mb-4">Get credit towards your next purchase.</p>
            <Button size="sm" variant="outline" asChild>
              <Link href="/services/trade-in">Get trade-in estimate</Link>
            </Button>
          </motion.div>
        </div>

        {/* Repair Services */}
        <div className="relative bg-gray-100 dark:bg-black p-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <h3 className="text-2xl font-bold mb-2">Repair Services</h3>
            <p className="text-muted-foreground mb-4">Professional repairs for all devices.</p>
            <Button size="sm" variant="outline" asChild>
              <Link href="/services/repair">Schedule a repair</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

