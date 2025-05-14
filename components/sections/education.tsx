"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useState } from "react"

export default function Education() {
  const educationData = [
    {
      degree: "BEng in Computer Science (+AI)",
      institution: "The Hong Kong University of Science and Technology",
      period: "2022 - 2027",
      description: "GPA: 3.94/4.3",
      logo: "./images/hkust.jpg",
      achievements: [
        "COMP3711 Design and Analysis of Algorithms",
        "COMP2211 Exploring Artificial Intelligence",
        "COMP2011 Programming with C++",
        "COMP2711 Discrete Mathematical Tools for Computer Science",
        "COMP2012 Object-Oriented Programming and Data Structures",
        "COMP2611 Computer Organization",
        "TEMG4940D T&M Prototyping and Research Project: Smart Digital Solutions - Net Zero Carbon Building AECOM",
        "TEMG4970C T&M IBPC Startup Project: ABPC2024 Deep Tech Startup Competition in Singapore",
        "TEMG4950N T&M Corporate Consulting Project: Meta LLM for Digital Transformation of Viu International",
        "COMP3111 Software Engineering"
      ],
    },
    {
      degree: "BBA in Finance",
      institution: "KTH Royal Institute of Technology",
      period: "2022 - 2027",
      description: "GPA: 3.94/4.3",
      logo: "./images/hkust.jpg",
      achievements: [
        "FINA3810 Bloomberg Market Concepts Certification",
        "FINA3103 Intermediate Investments",
        "ACCT3030 Intermediate Financial Accounting for Non-Accounting Majors",
      ],
    },
    {
      degree: "Exchange Program in KTH",
      institution: "KTH Royal Institute of Technology",
      period: "2024-2025 (Spring Semester)",
      description: "",
      logo: "./images/kth.png",
      achievements: [
        "DD2448 Foundations of Cryptography",
        "DD2358 Introduction to High Performance Computing",
        "DH2321 Information Visualization",
        "AK1213 Swedish Society, Culture and Industry in Historical Perspective"
      ],
    },
    {
      degree: "Secondary School",
      institution: "Carmel Divine Grace Foundation Secondary School",
      period: "2016 - 2022",
      description: "5** in Physics, Chemistry, 5* in Mathematics and Biology",
      logo: "./images/cdgfss.png",
      achievements: [
        "Deputy Leader in Orchestra",
        "Vice Chairman in the Extra curricular Activities Committee",
      ],
    }
  ]

  return (
    <section id="education" className="py-16 scroll-mt-16">
      <SectionHeading title="Education" />
      <div className="grid md:grid-cols-2 gap-6">
        {educationData.map((item, index) => {
          const [showAll, setShowAll] = useState(false)
          const hasExtra = item.achievements.length > 3
          const achievementsToShow = showAll ? item.achievements : item.achievements.slice(0, 3)
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-l-4 border-l-primary h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between gap-4 pb-2">
                  <div className="flex flex-row items-center gap-4">
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
                  </div>
                  <img
                    src={item.logo}
                    alt="University Logo"
                    className="h-16 w-16 object-contain rounded-md shadow-sm"
                  />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.period}
                  </div>
                  <p className="mb-2">{item.description}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mb-2">
                    {achievementsToShow.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  {hasExtra && (
                    <button
                      className="text-primary underline text-sm focus:outline-none"
                      onClick={() => setShowAll((prev) => !prev)}
                      type="button"
                    >
                      {showAll ? "Show less" : `Show more (${item.achievements.length - 3})`}
                    </button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
