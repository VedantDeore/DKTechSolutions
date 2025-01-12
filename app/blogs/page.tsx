"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Search, Tag, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Computer Maintenance",
    excerpt: "Keep your computer running smoothly with these easy-to-follow maintenance tips.",
    category: "Maintenance",
    author: "John Doe",
    date: "2023-05-15",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/p/AF1QipNPfuVqUUkoZILqAapTwLlCPKd22RvZ0FhV9izI=s1360-w1360-h1020",
    featured: true
  },
  {
    id: 2,
    title: "Understanding SSD vs HDD: Which is Right for You?",
    excerpt: "Explore the pros and cons of SSDs and HDDs to make the best choice for your storage needs.",
    category: "Hardware",
    author: "Jane Smith",
    date: "2023-05-10",
    readTime: "7 min read",
    image: "https://lh3.googleusercontent.com/p/AF1QipNicFOTFiDCFznAsnXd6h3xrtjwQ5tLMFULz8yf=s1360-w1360-h1020"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Removing Malware",
    excerpt: "Learn how to detect and remove malware to keep your computer safe and secure.",
    category: "Security",
    author: "Mike Johnson",
    date: "2023-05-05",
    readTime: "10 min read",
    image: "https://raw.githubusercontent.com/VedantDeore/DKTechSolutions/refs/heads/main/d12d9f11-fa99-46d8-b1b5-f71ae4ed51d7%20(1).webp"
  },
  {
    id: 4,
    title: "Maximizing Your Computer's Performance for Gaming",
    excerpt: "Discover tips and tricks to optimize your computer for the best gaming experience.",
    category: "Performance",
    author: "Sarah Lee",
    date: "2023-04-30",
    readTime: "8 min read",
    image: "https://lh3.googleusercontent.com/p/AF1QipO7cq_9ey4xZuriVzyLb-Xab7_LmQIzm-9tajlI=s1360-w1360-h1020"
  },
  {
    id: 5,
    title: "The Future of Computing: Emerging Technologies",
    excerpt: "Explore cutting-edge technologies that are shaping the future of computing.",
    category: "Technology",
    author: "Alex Chen",
    date: "2023-04-25",
    readTime: "6 min read",
    image: "https://lh3.googleusercontent.com/p/AF1QipNB1JabAqYKGHsJQODFlMhNq_QeQ6WmzLzuuwl_=s1360-w1360-h1020"
  },
  {
    id: 6,
    title: "Troubleshooting Common Windows Errors",
    excerpt: "Learn how to diagnose and fix common Windows errors to keep your PC running smoothly.",
    category: "Troubleshooting",
    author: "Emily Brown",
    date: "2023-04-20",
    readTime: "9 min read",
    image: "https://raw.githubusercontent.com/VedantDeore/DKTechSolutions/refs/heads/main/a822c777-bbe1-4383-a792-33de82fdd6da.webp"
  }
]

const categories = ["All", "Maintenance", "Hardware", "Security", "Performance", "Technology", "Troubleshooting"]

const popularPosts = [
  { id: 1, title: "10 Essential Tips for Computer Maintenance" },
  { id: 3, title: "The Ultimate Guide to Removing Malware" },
  { id: 4, title: "Maximizing Your Computer's Performance for Gaming" }
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

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter(post =>
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === "All" || post.category === selectedCategory)
  )

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background dark:from-blue-900/30 dark:via-background dark:to-background">
      {/* Hero Section with Featured Post */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-blue-200 mb-6">
              DK Tech Solutions Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest in computer technology, tips, and insights
            </p>
          </motion.div>
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-full">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <Badge className="w-fit mb-2">{featuredPost.category}</Badge>
                      <h2 className="text-2xl font-bold mb-2">{featuredPost.title}</h2>
                      <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <User className="mr-2 h-4 w-4" />
                        <span className="mr-4">{featuredPost.author}</span>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span className="mr-4">{featuredPost.date}</span>
                        <Clock className="mr-2 h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <Button asChild>
                        <Link href={`/blogs/${featuredPost.id}`}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Posts */}
            <div className="lg:w-2/3">
              {/* Search and Filter */}
              <div className="mb-8 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search blog posts..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select
                  className="px-3 py-2 rounded-md border border-input bg-background text-sm"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Blog Post Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-8 md:grid-cols-2"
              >
                {filteredPosts.map((post) => (
                  <motion.div key={post.id} variants={itemVariants}>
                    <Card className="h-full overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative h-48">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge>{post.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <CardTitle className="mb-2">{post.title}</CardTitle>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          <div className="flex items-center text-sm text-muted-foreground mb-4">
                            <User className="mr-2 h-4 w-4" />
                            <span className="mr-4">{post.author}</span>
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full">
                          <Link href={`/blogs/${post.id}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Newsletter Subscription */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Subscribe to Our Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input type="email" placeholder="Enter your email" />
                    <Button type="submit" className="w-full">Subscribe</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Popular Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {popularPosts.map((post) => (
                      <li key={post.id}>
                        <Link href={`/blogs/${post.id}`} className="text-primary hover:underline">
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categories.filter(category => category !== "All").map((category) => (
                      <Badge
                        key={category}
                        variant="outline"
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
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
            <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-6">Need Expert Tech Advice?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our team of tech experts is ready to help you with any computer-related issues or questions.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

