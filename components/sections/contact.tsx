"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, MapPin, Clock, ArrowUpRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

// Social link component
function SocialLink({ 
  href, 
  icon: Icon, 
  label, 
  color 
}: { 
  href: string
  icon: React.ElementType
  label: string
  color: "teal" | "purple"
}) {
  const colorClasses = {
    teal: "hover:border-teal hover:text-teal hover:shadow-glow-sm group-hover:bg-teal",
    purple: "hover:border-purple hover:text-purple group-hover:bg-purple",
  }
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 transition-all duration-300 ${colorClasses[color]}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`p-2 rounded-lg bg-surface group-hover:text-primary-foreground transition-colors ${colorClasses[color]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <span className="font-medium">{label}</span>
      <ArrowUpRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  )
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormState({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    
    // You would typically send this to an API
    console.log("Form submitted:", formState)
  }

  return (
    <section id="contact" className="py-20 scroll-mt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
      </div>
      
      <SectionHeading 
        title="Get In Touch" 
        subtitle="Let's connect and discuss opportunities"
      />
      
      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-montserrat font-semibold text-gradient">
              Let's Build Something Great
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, innovative projects, 
              or potential collaborations. Whether you're a recruiter, fellow developer, 
              or just want to say hi — I'd love to hear from you!
            </p>
          </div>

          {/* Quick info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal" />
              <span>Hong Kong</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple" />
              <span>GMT+8</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-teal" />
              <span>Open to opportunities</span>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-3">
            <SocialLink
              href="mailto:hycheung@connect.ust.hk"
              icon={Mail}
              label="hycheung@connect.ust.hk"
              color="teal"
            />
            <SocialLink
              href="https://www.linkedin.com/in/franklin-cheung/"
              icon={Linkedin}
              label="LinkedIn Profile"
              color="purple"
            />
            <SocialLink
              href="https://github.com/bestfranklinAI"
              icon={Github}
              label="GitHub Profile"
              color="teal"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-surface border-border/50 focus:border-teal transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-surface border-border/50 focus:border-teal transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="bg-surface border-border/50 focus:border-teal transition-colors resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="h-4 w-4 mr-2" />
                    </motion.div>
                  ) : (
                    <Send className="h-4 w-4 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
