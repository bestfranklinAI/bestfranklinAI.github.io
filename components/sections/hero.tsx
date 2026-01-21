"use client"

import { useTypingEffect } from "@/hooks/use-typing-effect"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Code, TrendingUp, Database, Sparkles } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

// Floating geometric shapes component
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated circles */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-teal/10 to-purple/10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple/10 to-teal/10 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "10%" }}
      />
      
      {/* Floating icons */}
      <motion.div
        className="absolute hidden md:block"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "20%", left: "15%" }}
      >
        <div className="p-3 rounded-xl bg-surface/50 backdrop-blur-sm border border-border/50 shadow-glow-sm">
          <Code className="w-6 h-6 text-teal" />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute hidden md:block"
        animate={{
          y: [10, -10, 10],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ top: "30%", right: "20%" }}
      >
        <div className="p-3 rounded-xl bg-surface/50 backdrop-blur-sm border border-border/50 shadow-glow-purple">
          <TrendingUp className="w-6 h-6 text-purple" />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute hidden md:block"
        animate={{
          y: [-15, 15, -15],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ bottom: "25%", left: "20%" }}
      >
        <div className="p-3 rounded-xl bg-surface/50 backdrop-blur-sm border border-border/50 shadow-glow-sm">
          <Database className="w-6 h-6 text-teal" />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute hidden md:block"
        animate={{
          y: [5, -15, 5],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{ bottom: "35%", right: "15%" }}
      >
        <div className="p-3 rounded-xl bg-surface/50 backdrop-blur-sm border border-border/50 shadow-glow-purple">
          <Sparkles className="w-6 h-6 text-purple" />
        </div>
      </motion.div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
}

// Mouse parallax hook
function useMouseParallax() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      mouseX.set((clientX - centerX) / 50)
      mouseY.set((clientY - centerY) / 50)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return { x, y }
}

export default function Hero() {
  const { displayText } = useTypingEffect(
    ["Hi, I'm Franklin Cheung!", "Full-Stack Developer", "Finance Enthusiast", "AI Explorer"],
    {
      typingSpeed: 100,
      deletingSpeed: 60,
      delayBetweenTexts: 2000,
    }
  )

  const { x, y } = useMouseParallax()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Floating shapes with parallax */}
      {mounted && (
        <motion.div 
          className="absolute inset-0"
          style={{ x, y }}
        >
          <FloatingShapes />
        </motion.div>
      )}
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />
      
      {/* Main content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 backdrop-blur-sm border border-border/50 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
            </span>
            <span className="text-sm font-poppins text-muted-foreground">
              Available for opportunities
            </span>
          </motion.div>
          
          {/* Main headline with typing effect */}
          <h1 className="font-montserrat text-h1-mobile md:text-h1 font-bold mb-6">
            <span className="text-gradient">{displayText}</span>
            <span className="animate-blink text-teal">|</span>
          </h1>
          
          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A penultimate year dual-degree student at{" "}
            <span className="text-foreground font-medium">HKUST</span>, 
            passionate about building innovative solutions at the intersection of{" "}
            <span className="text-teal font-medium">Computer Science</span> and{" "}
            <span className="text-purple font-medium">Finance</span>.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={scrollToAbout}
                className="bg-gradient-primary text-primary-foreground font-poppins font-semibold px-8 py-6 text-base rounded-lg shadow-glow-md hover:shadow-glow-lg transition-shadow"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                className="border-2 border-teal text-teal hover:bg-teal/10 font-poppins font-semibold px-8 py-6 text-base rounded-lg inline-flex items-center"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "./resume/cv.pdf"
                  link.download = "Franklin_Cheung_Resume.pdf"
                  link.click()
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
