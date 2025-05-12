"use client"

import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1rem] w-[1rem] text-muted-foreground" />
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} aria-label="Toggle dark mode" />
      <Moon className="h-[1rem] w-[1rem] text-muted-foreground" />
    </div>
  )
}
