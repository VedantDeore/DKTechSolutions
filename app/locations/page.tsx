"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, MapPin, Clock, Phone, Mail, ArrowRight } from 'lucide-react'

const locations = [
  {
    id: 1,
    name: "DK TECH SOLUTIONS",
    address: "Shop no 14, Vijay Kiran Apartment, opposite Nilesh Super Market",
    area: "Tidke Colony",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422002",
    phone: "+91 93725 43762",
    email: "dktechsolutions07@gmail.com",
    hours: {
      weekdays: "9:00 AM - 9:00 PM",
      saturday: "9:00 AM - 7:00 PM",
      sunday: "10:00 AM - 5:00 PM"
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.366056925056!2d73.77170967371227!3d19.9931455814095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb655d5db877%3A0xcbe7cf9dcb07eb6f!2sDK%20TECH%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1735718711683!5m2!1sen!2sin"
  },
  {
    id: 2,
    name: "DK Tech Solutions",
    address: "Appt 1",
    area: "Pandit Colony",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422002",
    phone: "+91 77900 39001",
    email: "kukatpally@dktechsolutions.com",
    hours: {
      weekdays: "9:00 AM - 9:00 PM",
      saturday: "9:00 AM - 7:00 PM",
      sunday: "10:00 AM - 5:00 PM"
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.119065026734!2d73.77391852371271!3d20.00351693140152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba125543221%3A0x149b13ae76edbaeb!2sPandit%20Colony%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1735718776714!5m2!1sen!2sin"
  },
  
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

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.city.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
              Service Locations
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find the nearest DK Tech Solutions center for professional computer repair services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredLocations.map((location) => (
              <motion.div
                key={location.id}
                variants={itemVariants}
                className={`group ${selectedLocation === location.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedLocation(location.id)}
              >
                <Card className="h-full overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {location.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="aspect-video w-full overflow-hidden rounded-md">
                      <iframe
                        src={location.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="grid gap-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-medium">{location.address}</p>
                          <p className="text-sm text-muted-foreground">
                            {location.area}, {location.city}, {location.state} - {location.pincode}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-medium">Working Hours</p>
                          <p className="text-sm text-muted-foreground">Weekdays: {location.hours.weekdays}</p>
                          <p className="text-sm text-muted-foreground">Saturday: {location.hours.saturday}</p>
                          <p className="text-sm text-muted-foreground">Sunday: {location.hours.sunday}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-medium">Contact</p>
                          <p className="text-sm text-muted-foreground">{location.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">{location.email}</p>
                      </div>
                    </div>
                    <Button className="w-full group" asChild>
                      <Link href={`/contact?location=${location.id}`}>
                        Book Appointment
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </Button>
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
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-6">Need On-Site Support?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our technicians can visit your location for repairs and maintenance
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Request On-Site Service
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

