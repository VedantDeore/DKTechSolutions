"use client"

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    name: "Sagar Patil",
    rating: 5,
    text: "Very good service. Highly recommended for laptop and desktop repair.",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 2,
    name: "Saurabh Patil",
    rating: 5,
    text: "Excellent service. They fixed my laptop's display issue quickly and at a reasonable price.",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 3,
    name: "Rahul Patil",
    rating: 5,
    text: "Great service and support. They resolved my laptop's overheating problem efficiently.",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 4,
    name: "Akshay Patil",
    rating: 5,
    text: "Professional and prompt service. They diagnosed and fixed my PC issues in no time.",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 5,
    name: "Vishal Patil",
    rating: 5,
    text: "Reliable and knowledgeable team. They provided excellent guidance for upgrading my computer.",
    image: "/placeholder.svg?height=40&width=40"
  }
]

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const moveReview = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection > 0) {
        return (prevIndex + 1) % reviews.length
      }
      return (prevIndex - 1 + reviews.length) % reviews.length
    })
  }, [])

  const nextReview = () => moveReview(1)
  const prevReview = () => moveReview(-1)

  useEffect(() => {
    const timer = setInterval(nextReview, 5000)
    return () => clearInterval(timer)
  }, [nextReview])

  const getVisibleReviews = () => {
    const visibleReviews = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length
      visibleReviews.push(reviews[index])
    }
    return visibleReviews
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-black overflow-hidden">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
          What Our Customers Say
        </h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              {getVisibleReviews().map((review, index) => (
                <motion.div
                  key={review.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                >
                  <Card className="h-full bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage src={review.image} alt={review.name} />
                          <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{review.name}</h3>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                                }`}
                                fill={i < review.rating ? 'currentColor' : 'none'}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{review.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" size="lg" className="group">
              <a 
                href="https://www.google.com/maps/place/DK+TECH+SOLUTIONS/@19.9931456,73.7742846,17z/data=!4m8!3m7!1s0x3bddeb655d5db877:0xcbe7cf9dcb07eb6f!8m2!3d19.9931456!4d73.7742846!9m1!1b1!16s%2Fg%2F11r0m71f63?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View All Reviews on Google Maps
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  )
}

