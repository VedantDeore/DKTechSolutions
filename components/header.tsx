"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Laptop, PenToolIcon as Tool, HeadphonesIcon, MapPin, Users, BookOpen, PhoneCall, ChevronDown, ChevronUp, Shield } from 'lucide-react'

const navItems = [
  { name: "Home", href: "/", icon: Laptop },
  { name: "Services", href: "/services", icon: Tool },
  { name: "Support", href: "/support", icon: HeadphonesIcon },
  { name: "Locations", href: "/locations", icon: MapPin },
  { name: "Brands We Deal", href: "/brands-we-deal", icon: Users },
  { name: "About Us", href: "/about", icon: Users },
  { name: "Blog", href: "/blogs", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: PhoneCall },
  { name: "Warranty", href: "/warranty", icon: Shield },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const pathname = usePathname()
  const isLargeScreen = useMediaQuery({ minWidth: 1024 })
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  const isSmallScreen = useMediaQuery({ maxWidth: 767 })

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  React.useEffect(() => {
    if (isLargeScreen) {
      setIsOpen(false)
      setActiveDropdown(null)
    }
  }, [isLargeScreen])

  const renderNavItems = () => {
    if (isLargeScreen) {
      return (
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      )
    } else if (isMediumScreen) {
      return (
        <nav className="hidden md:flex lg:hidden items-center space-x-1">
          {navItems.slice(0, 5).map((item) => (
            <motion.div
              key={item.href}
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                <item.icon className="w-4 h-4 mr-1" />
                <span className="hidden xl:inline">{item.name}</span>
              </Link>
            </motion.div>
          ))}
          <div className="relative">
            <Button
              variant="ghost"
              className="flex items-center px-2 py-2 text-sm font-medium"
              onClick={() => toggleDropdown('more')}
            >
              More
              {activeDropdown === 'more' ? (
                <ChevronUp className="ml-1 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-1 h-4 w-4" />
              )}
            </Button>
            {activeDropdown === 'more' && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {navItems.slice(5).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                        pathname === item.href && "bg-gray-100 text-gray-900"
                      )}
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <item.icon className="inline-block w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      )
    }
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Laptop className="h-6 w-6 text-primary" />
          <span className="font-bold text-sm sm:text-base">
            DK Tech Solutions
          </span>
        </Link>

        {renderNavItems()}

        <div className="flex items-center space-x-4">
          <Button className="hidden sm:inline-flex">
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                      <Laptop className="h-6 w-6 text-primary" />
                      <span className="font-bold">DK Tech Solutions</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-4 flex-grow">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center py-2 text-base font-medium transition-colors hover:text-primary",
                          pathname === item.href ? "text-primary" : "text-muted-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pb-8">
                    <Button className="w-full" onClick={() => setIsOpen(false)}>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

