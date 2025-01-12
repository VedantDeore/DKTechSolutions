"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Shield, Clock, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react'

const warrantyFeatures = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description: "Our warranty covers all hardware components and workmanship defects."
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "We aim to resolve warranty claims within 3-5 business days."
  },
  {
    icon: CheckCircle,
    title: "No Hidden Fees",
    description: "All costs are covered under warranty, with no surprise charges."
  }
]

const faqItems = [
  {
    question: "What does the warranty cover?",
    answer: "Our warranty covers all hardware components and workmanship defects. This includes issues with the motherboard, CPU, RAM, storage devices, power supply, and other internal components. Software issues and physical damage are not covered under the standard warranty."
  },
  {
    question: "How long is the warranty period?",
    answer: "The standard warranty period is 1 year from the date of purchase or service. We also offer extended warranty options for up to 3 years."
  },
  {
    question: "How do I make a warranty claim?",
    answer: "To make a warranty claim, simply contact our support team via phone, email, or by visiting one of our service centers. You'll need to provide your proof of purchase and describe the issue you're experiencing. Our team will guide you through the next steps."
  },
  {
    question: "Is the warranty transferable?",
    answer: "No, our warranty is non-transferable and applies only to the original purchaser of the product or service."
  },
  {
    question: "Do you offer on-site warranty service?",
    answer: "Yes, we offer on-site warranty service for select products and business customers. Additional fees may apply for on-site service. Please contact our support team for more information."
  }
]

export default function WarrantyPage() {
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
              Our Warranty Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Peace of mind with every purchase and service. We stand behind our work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warranty Features */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warrantyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              >
                <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <feature.icon className="w-12 h-12 text-primary dark:text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-4">Warranty Details</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our warranty is designed to protect your investment and ensure your satisfaction with our products and services.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  What's Covered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Hardware component failures</li>
                  <li>Workmanship defects</li>
                  <li>Normal wear and tear</li>
                  <li>Manufacturing defects</li>
                  <li>Repair labor costs</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  What's Not Covered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Accidental damage</li>
                  <li>Software issues</li>
                  <li>Unauthorized modifications</li>
                  <li>Cosmetic damage</li>
                  <li>Loss or theft</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our warranty policy
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <span className="flex items-center">
                      <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-6">Need More Information?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our support team is here to help you understand our warranty policy and assist with any claims.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

