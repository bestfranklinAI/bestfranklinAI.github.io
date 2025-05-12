"use client"

import { useTypingEffect } from "@/hooks/use-typing-effect"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useCallback } from "react"

export default function Hero() {
  const text = useTypingEffect("I'm a Developer", 100)

  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 z-10"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlend: "overlay",
        }}
      />
      <div className="relative z-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {text}
          <span className="animate-blink">|</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          Hello! I'm John Doe, a passionate full-stack developer specializing in building exceptional digital
          experiences.
        </p>
        <Button onClick={scrollToAbout} className="rounded-full" size="lg">
          Learn More <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
