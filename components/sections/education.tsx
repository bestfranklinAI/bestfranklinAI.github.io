"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export default function Education() {
  const educationData = [
    {
      degree: "Dual Degree: BEng in Computer Scienc (+AI) & BBA in Finance",
      institution: "Hong Kong University of Science and Technology",
      location: "Hong Kong",
      period: "Sep 2022 - Jun 2027 (Expected)",
      details: "Focus on AI/ML, Algorithm, Financial Markets Structure, and Fintech Innovation",
      achievements: [
        "Dean's List (Multiple Semesters)",
        "AIA Scholarship",
        "Fung Scholarship",
      ],
    },
    {
      degree: "Exchange Program",
      institution: "KTH Royale Institute of Technology",
      location: "Stockholm, Sweden",
      period: "Jan 2025 - Jun 2025",
      details: "Cross-cultural academic experience in Computer Science",
      achievements: [],
    },
  ]

  return (
    <section id="education" className="py-20 scroll-mt-16">
      <SectionHeading 
        title="Education" 
        subtitle="Academic background and achievements"
      />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-teal to-transparent hidden md:block" />
        
        <div className="space-y-8">
          {educationData.map((item, index) => (
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
                className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-purple to-teal border-4 border-background hidden md:block"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                viewport={{ once: true }}
              />
              
              <Card className="border-l-4 border-l-purple bg-card/50 backdrop-blur-sm hover:shadow-glow-sm transition-all duration-300 group">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <motion.div
                    className="p-3 rounded-lg bg-gradient-to-br from-purple to-teal text-primary-foreground"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <GraduationCap className="h-5 w-5" />
                  </motion.div>
                  <div className="flex-1">
                    <CardTitle className="font-montserrat text-xl group-hover:text-gradient transition-all">
                      {item.degree}
                    </CardTitle>
                    <p className="text-purple font-medium">{item.institution}</p>
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
                  <p className="text-muted-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-teal" />
                    {item.details}
                  </p>
                  
                  {item.achievements.length > 0 && (
                    <motion.div
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
                      <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-purple" />
                        Achievements
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full bg-surface border border-border/50 text-muted-foreground hover:border-purple hover:text-purple transition-all"
                            variants={{
                              hidden: { opacity: 0, scale: 0.8 },
                              visible: { opacity: 1, scale: 1 },
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
