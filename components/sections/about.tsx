"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-16">
      <SectionHeading title="About Me" />
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-4">
            hiiI'm a passionate full-stack developer with over 5 years of experience building web applications. I
            specialize in JavaScript, React, Node.js, and modern web technologies.
          </p>
          <p className="text-lg mb-4">
            My journey in software development began during my university years, and I've been hooked ever since. I love
            solving complex problems and creating intuitive, efficient solutions.
          </p>
          <p className="text-lg mb-6">
            When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              className="flex items-center gap-2"
              onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume/cv.pdf";
              link.download = "Franklin_Cheung_Resume.pdf";
              link.click();
              }}
            >
              <Download className="h-4 w-4" /> Download Resume
            </Button>

            <motion.a
              href="https://github.com/bestfranklinAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors bg-muted hover:bg-primary hover:text-primary-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4 mr-2" /> GitHub
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/franklin-cheung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors bg-muted hover:bg-primary hover:text-primary-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/images/selfie-profile.jpg" alt="Profile" className="object-cover w-full h-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
