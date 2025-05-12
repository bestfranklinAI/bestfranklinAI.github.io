"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-16">
      <SectionHeading title="Contact Me" />
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">john.doe@example.com</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="bg-muted p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-muted p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-muted p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
