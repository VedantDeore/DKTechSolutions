"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

const useThemeTransition = () => {
  const { theme, setTheme } = useTheme()
  const [transitioning, setTransitioning] = React.useState(false)

  const toggleTheme = () => {
    setTransitioning(true)
    setTheme(theme === "light" ? "dark" : "light")
    setTimeout(() => setTransitioning(false), 300)
  }

  return { theme, toggleTheme, transitioning }
}

export function ThemeToggle() {
  const { theme, toggleTheme, transitioning } = useThemeTransition()

  return (
    <motion.button
      className="fixed bottom-4 right-4 z-50 rounded-full p-2 bg-primary text-primary-foreground shadow-lg overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-6 w-6" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-6 w-6" />
          </motion.div>
        )}
      </AnimatePresence>
      {transitioning && (
        <motion.div
          className="absolute inset-0 bg-primary"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 2, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  )
}

