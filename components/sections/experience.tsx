"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function Experience() {
  const experienceData = [
    {
      position: "Data Analyst",
      company: "HAECO",
      period: "Jun 2024 - Aug 2024",
      description:
        "",
      responsibilities: [
        "Developed an Enterprise Asset Management System (EAM) for asset tracking.",
        "Analyzed data from the EAM and automated report generation to derive actionable insights."
      ],
    },
    {
      position: "Software Developer Intern",
      company: "EHF Limited",
      period: "Dec 2023 -  Jan 2024",
      description: "",
      responsibilities: [
        "Utilize React.js to develop multiple user-friendly websites, ensuring seamless user experiences",
        "Integrate backend APIs built with Node.js and utilize MongoDB as the primary database solution for storing and retrieving data"
      ],
    }
  ]

  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <SectionHeading title="Experience" />
      <div className="space-y-6">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Briefcase className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <CardTitle>{item.position}</CardTitle>
                  <p className="text-muted-foreground">{item.company}</p>
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
                  {item.responsibilities.map((responsibility, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      {responsibility}
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
