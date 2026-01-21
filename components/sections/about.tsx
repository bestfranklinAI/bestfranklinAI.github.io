"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { getImagePath } from "@/lib/utils"

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "20+" },
    { label: "Years Coding", value: "4+" },
  ]

  return (
    <section id="about" className="py-20 scroll-mt-16">
      <SectionHeading 
        title="About Me" 
        subtitle="Bridging the gap between technology and finance"
      />
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hi, I&apos;m <span className="text-foreground font-semibold">Franklin Cheung</span>, 
              a passionate developer and AI enthusiast currently pursuing a dual degree in{" "}
              <span className="text-teal font-medium">Computer Science (+AI)</span> and{" "}
              <span className="text-purple font-medium">Finance</span> at{" "}
              <a 
                href="https://techmgmt.hkust.edu.hk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-teal hover:underline inline-flex items-center gap-1"
              >
                HKUST <ExternalLink className="h-3 w-3" />
              </a>.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I love turning complex challenges into smart, user-friendly solutions — 
              whether it&apos;s building full-stack web apps, creating AI-powered tools, 
              or developing data-driven financial models. My unique background allows me 
              to bridge technical implementation with business strategy.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I&apos;m not coding, you can find me exploring new technologies, 
              reading about fintech innovations, or working on side projects that 
              combine my interests in AI and finance.
            </p>
          </div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-4 py-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-lg bg-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-gradient-primary text-primary-foreground font-poppins inline-flex items-center"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "./resume/cv.pdf"
                  link.download = "Franklin_Cheung_Resume.pdf"
                  link.click()
                }}
              >
                <Download className="h-4 w-4 mr-2" /> Download Resume
              </Button>
            </motion.div>

            <motion.a
              href="https://github.com/bestfranklinAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-all bg-card border border-border hover:border-teal hover:shadow-glow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4 mr-2" /> GitHub
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/franklin-cheung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-all bg-card border border-border hover:border-purple hover:shadow-glow-purple"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Right side - Profile image */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Decorative rings */}
            <motion.div
              className="absolute -inset-4 rounded-full border border-teal/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border border-purple/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Main image container */}
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal shadow-glow-md"
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsla(var(--teal), 0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={getImagePath("/images/selfie-profile.jpg")} 
                alt="Franklin Cheung" 
                className="object-cover w-full h-full"
              />
            </motion.div>
            
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground font-poppins text-sm font-semibold shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              AIA & Fung Scholar
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
