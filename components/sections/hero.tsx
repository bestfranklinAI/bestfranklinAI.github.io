"use client"

import { useTypingEffect } from "@/hooks/use-typing-effect"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useCallback } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const { displayText } = useTypingEffect(["Hi, I'm Franklin Cheung!", "I'm a Developer", "I'm a Finance Enthusiast"], {
    typingSpeed: 130,
    deletingSpeed: 70,
    delayBetweenTexts: 1500,
  })

  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 top-16 z-0"
        style={{
          backgroundImage: "url('./images/home-page-profile.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay for better text contrast in light/dark mode */}
      <div className="absolute inset-0 top-16 z-10 bg-black/40 dark:bg-black/60 pointer-events-none" />
      <motion.div
        className="relative z-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          {displayText}
          <span className="animate-blink">|</span>
        </h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Hi! I'm Franklin, a penultimate year student at HKUST, and a passionate developer in machine learning and artificial intelligence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Button onClick={scrollToAbout} className="rounded-full" size="lg">
            Learn More <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
