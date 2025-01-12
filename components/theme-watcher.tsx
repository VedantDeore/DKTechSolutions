"use client"

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function ThemeWatcher() {
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    document.body.classList.remove('theme-transition')
    window.setTimeout(() => {
      document.body.classList.add('theme-transition')
    }, 0)
  }, [theme, resolvedTheme])

  return null
}

