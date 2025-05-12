"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function Education() {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2018 - 2020",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.",
      achievements: [
        "Thesis: 'Deep Learning Approaches for Natural Language Processing'",
        "GPA: 3.9/4.0",
        "Teaching Assistant for Introduction to Machine Learning",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "MIT",
      period: "2014 - 2018",
      description: "Focused on software engineering and web development. Participated in multiple hackathons.",
      achievements: [
        "Senior Project: 'Real-time Collaborative Code Editor'",
        "Dean's List for all semesters",
        "President of the Web Development Club",
      ],
    },
  ]

  return (
    <section id="education" className="py-16 scroll-mt-16">
      <SectionHeading title="Education" />
      <div className="grid md:grid-cols-2 gap-6">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-l-4 border-l-primary h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <GraduationCap className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <CardTitle>{item.degree}</CardTitle>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {item.period}
                </div>
                <p className="mb-2">{item.description}</p>
                <motion.ul
                  className="list-disc list-inside text-sm text-muted-foreground"
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
                  {item.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
