"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Experience() {
  const experienceData = [
    {
      position: "AI Project Developer",
      company: "BeNovelty",
      location: "Hong Kong",
      period: "Jun 2025 - Aug 2025",
      description: "AI-Powered Web Scraping & Monitoring",
      responsibilities: [
        "Engineered a live scraping engine using crawl4ai and LLMs, pinpointing key information changes on different website for efficient user retrieval.",
      ],
    },
    {
      position: "Data Analyst",
      company: "HAECO",
      location: "Hong Kong",
      period: "Jun 2024 - Aug 2024",
      description: "Enterprise Asset Management & Data Analytics",
      responsibilities: [
        "Deployed offline, privacy-first AI solutions using Ollama and local LLMs to securely process sensitive enterprise maintenance data of over 100,000 assets.",
        "Applied K-Nearest Neighbors (KNN) clustering to auto-categorize over 10,000 monthly reports and analyze root causes of maintenance issues."
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 scroll-mt-16">
      <SectionHeading 
        title="Experience" 
        subtitle="My journey and achievements"
      />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal via-purple to-transparent hidden md:block" />
        
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-primary border-4 border-background hidden md:block"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                viewport={{ once: true }}
              />
              
              <Card className="border-l-4 border-l-teal bg-card/50 backdrop-blur-sm hover:shadow-glow-sm transition-all duration-300 group">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <motion.div
                    className="p-3 rounded-lg bg-gradient-primary text-primary-foreground"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Briefcase className="h-5 w-5" />
                  </motion.div>
                  <div className="flex-1">
                    <CardTitle className="font-montserrat text-xl group-hover:text-gradient transition-all">
                      {item.position}
                    </CardTitle>
                    <p className="text-teal font-medium">{item.company}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <motion.ul
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {item.responsibilities.map((responsibility, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                        {responsibility}
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
