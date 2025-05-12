"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Layers, Database, Palette, Terminal, Cpu } from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "PHP"],
    },
    {
      category: "Frontend",
      icon: <Palette className="h-5 w-5" />,
      skills: ["React", "Next.js", "Vue.js", "Angular", "HTML5", "CSS3", "Tailwind CSS", "SASS"],
    },
    {
      category: "Backend",
      icon: <Layers className="h-5 w-5" />,
      skills: ["Node.js", "Express", "Django", "Flask", "ASP.NET", "Laravel"],
    },
    {
      category: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis", "Firebase"],
    },
    {
      category: "DevOps & Tools",
      icon: <Terminal className="h-5 w-5" />,
      skills: ["Git", "Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Jest", "Cypress"],
    },
    {
      category: "Software & Tools",
      icon: <Cpu className="h-5 w-5" />,
      skills: ["VS Code", "Figma", "Adobe XD", "Photoshop", "Jira", "Notion", "Postman"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-16 scroll-mt-16">
      <SectionHeading title="Skills & Expertise" />
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillsData.map((category, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="bg-primary/10 p-2 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Badge variant="secondary">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
