"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { MonitorCheck, Shield, Laptop, HardDrive, Download, ArrowRight, Phone, MessageCircle, Mail } from 'lucide-react'

const supportTopics = [
  {
    id: "remote-desktop",
    title: "Remote Desktop Support",
    description: "Get instant technical support from our experts remotely. We can access and fix your computer issues from anywhere.",
    icon: MonitorCheck,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQO0RcQj3cTBuqFl8RDksDxqOIf5iJJ7Z8IA&s",
    link: "/support/remote-desktop"
  },
  {
    id: "laptop-guide",
    title: "Laptop Safe User Guide",
    description: "Learn best practices for laptop maintenance, security, and optimal performance with our comprehensive guide.",
    icon: Laptop,
    image: "https://lh3.googleusercontent.com/p/AF1QipOnRjy5BtOlZIWvhR7Kjk-A7K8NqBpw5-26w9bs=s1360-w1360-h1020",
    link: "/support/laptop-guide"
  },
  {
    id: "computer-guide",
    title: "Computer Safe User Guide",
    description: "Essential security tips and maintenance guidelines to keep your computer protected and running smoothly.",
    icon: Shield,
    image: "https://lh3.googleusercontent.com/p/AF1QipNB1JabAqYKGHsJQODFlMhNq_QeQ6WmzLzuuwl_=s1360-w1360-h1020",
    link: "/support/computer-guide"
  },
  {
    id: "buying-guide",
    title: "Guidelines to Buy a Best Computer",
    description: "Expert recommendations and tips for choosing the right computer components for your needs and budget.",
    icon: HardDrive,
    image: "https://lh3.googleusercontent.com/p/AF1QipNepyHO8f4kPWJQ3EVyCfGagzv8dpMiRyKR0Fj-=s1360-w1360-h1020",
    link: "/support/buying-guide"
  },
  {
    id: "software-support",
    title: "Software Installation Support",
    description: "Professional assistance with software installation, updates, and troubleshooting for all your applications.",
    icon: Download,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2o6ktMYh9oQV0Wz447SCm7_FePAKQycMJQ&s",
    link: "/support/software-support"
  }
]

const faqs = [
  {
    question: "How does remote desktop support work?",
    answer: "Our remote desktop support allows our technicians to securely access your computer over the internet to diagnose and fix issues. We use industry-standard encryption and you must approve the connection before we can access your system."
  },
  {
    question: "What should I do if my computer is running slow?",
    answer: "First, try restarting your computer. If the issue persists, check for available disk space, run a virus scan, and ensure all software is up to date. If you need further assistance, our remote support team can help diagnose and resolve the issue."
  },
  {
    question: "How often should I backup my data?",
    answer: "We recommend backing up important data at least weekly, or daily for business-critical information. Use external drives or cloud storage services for backups, and always backup before major software updates."
  },
  {
    question: "What antivirus software do you recommend?",
    answer: "We recommend using reputable antivirus software from established providers. The best choice depends on your specific needs and budget. Contact us for personalized recommendations based on your usage."
  },
  {
    question: "How can I protect my computer from viruses?",
    answer: "Keep your operating system and software updated, use reliable antivirus software, avoid suspicious downloads and links, and regularly backup your data. Our Computer Safe User Guide provides detailed security recommendations."
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

export default function SupportPage() {
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
              Technical Support & Resources
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get expert technical support and access comprehensive guides to keep your systems running smoothly
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Topics Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {supportTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                      <img
                        src={topic.image}
                        alt={topic.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <topic.icon className="absolute top-4 right-4 w-8 h-8 text-white z-20" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {topic.description}
                      </p>
                      <Button asChild variant="outline" className="group/button">
                        <Link href={topic.link}>
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

      {/* Quick Support Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-4">Quick Support Options</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the support option that works best for you. Our team is ready to help.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: "Call Us", info: "+91 9246 794 789", action: "Call Now" },
              { icon: MessageCircle, title: "Live Chat", info: "Chat with our experts", action: "Start Chat" },
              { icon: Mail, title: "Email Support", info: "support@dktechsolutions.com", action: "Send Email" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              >
                <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <item.icon className="w-12 h-12 text-primary dark:text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.info}</p>
                    <Button variant="outline">{item.action}</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common technical questions
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
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
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our technical support team is available 24/7 to help resolve your computer issues
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Support Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

