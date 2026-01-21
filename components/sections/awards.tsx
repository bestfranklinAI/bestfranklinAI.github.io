"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Medal, Star, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function Awards() {
  const awardsData = [
    {
      title: "Champion in JP Morgan Chase Code For Good 2025",
      organization: "JP Morgan Chase",
      year: "Oct 2025",
      description: "Developed a full-stack educational platform using Next.js and integrated tscircuit to render interactive 3D circuit visualizations for STEAM education.",
      icon: Trophy,
    },
    {
      title: "Global Coding Challenge 2025 - 2nd Place",
      organization: "UBS",
      year: "Sep 2025",
      description: "Secured 2nd Place out of 100+ teams by solving complex algorithmic challenges (Graph Theory, Shortest Path, Divide and Conquer) and cybersecurity CTF problems within 24 hours.",
      icon: Medal,
    },
    {
      title: "Champion - AI & Special Education Track",
      organization: "Mentor Mates @GoodNotes",
      year: "July 2025",
      description: "Champion in the \"AI & Special Education\" track, developing a gamified web app using Vite, p5.js, and ml5.js for real-time motion capture interactions.",
      icon: Trophy,
    },
    {
      title: "Generative AI Hackathon for Social Good 2023-2024 Champion",
      organization: "Generative AI Hackathon",
      year: "Oct 2024",
      description: "Prototyped a sustainable consumption app using LangChain to integrate RAG and tool calling for personalized recipe recommendations. Fine-tuned small open-source LLMs using Unsloth on Google Colab to optimize model performance.",
      icon: Award,
    },
    {
      title: "Most Innovative Award",
      organization: "CodeFree Bootcamp & Hackathon 2023",
      year: "Jul 2023 – Aug 2023",
      description: "Learnt DragOnce in 2 months to develop an application for reward point calculations. Enabled users to redeem points by recycling various items.",
      icon: Star,
    },
    {
      title: "AIA Scholarship",
      organization: "AIA Group",
      year: "2023",
      description: "Merit-based scholarship recognizing academic excellence and leadership potential",
      icon: Trophy,
    },
    {
      title: "Fung Scholarship",
      organization: "Fung Scholars Programme",
      year: "2024",
      description: "Prestigious scholarship supporting outstanding students for overseas exchange studies",
      icon: Medal,
    },
    {
      title: "Dean's List",
      organization: "HKUST",
      year: "All Semesters",
      description: "Recognition for outstanding academic performance",
      icon: Star,
    },
  ]

  return (
    <section id="awards" className="py-20 scroll-mt-16">
      <SectionHeading 
        title="Awards & Recognition" 
        subtitle="Achievements that highlight my journey"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-teal/50 transition-all duration-300 hover:shadow-card-hover group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-lg bg-gradient-primary text-primary-foreground"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <award.icon className="h-6 w-6" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-semibold text-lg group-hover:text-gradient transition-all">
                      {award.title}
                    </h3>
                    <p className="text-teal text-sm font-medium">{award.organization}</p>
                    <p className="text-muted-foreground text-xs mt-1">{award.year}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                  {award.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
