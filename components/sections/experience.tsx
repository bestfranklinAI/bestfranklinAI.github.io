"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function Experience() {
  const experienceData = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in building responsive web applications using React and Next.js.",
      responsibilities: [
        "Architected and implemented the company's design system",
        "Improved application performance by 40% through code optimization",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with UX/UI designers to implement new features",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2021",
      description: "Developed and maintained multiple web applications using the MERN stack.",
      responsibilities: [
        "Built RESTful APIs and microservices using Node.js and Express",
        "Implemented authentication and authorization systems",
        "Optimized database queries and improved application performance",
        "Participated in agile development processes and sprint planning",
      ],
    },
    {
      position: "Junior Web Developer",
      company: "WebCraft Studios",
      period: "2016 - 2018",
      description: "Assisted in the development of client websites using HTML, CSS, and JavaScript.",
      responsibilities: [
        "Developed responsive websites for various clients",
        "Fixed bugs and implemented new features in existing applications",
        "Collaborated with designers to implement pixel-perfect designs",
        "Participated in client meetings and requirement gathering",
      ],
    },
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
