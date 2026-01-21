"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Layers, Database, Palette, Terminal, Cpu, TrendingUp, Brain } from "lucide-react"
import { motion } from "framer-motion"

// Skill badge component with hexagon-inspired design
function SkillBadge({ skill, level, index }: { skill: string; level: "expert" | "advanced" | "proficient"; index: number }) {
  const levelColors = {
    expert: "border-teal text-teal bg-teal/10 hover:bg-teal/20",
    advanced: "border-purple text-purple bg-purple/10 hover:bg-purple/20",
    proficient: "border-muted-foreground text-muted-foreground bg-muted/50 hover:bg-muted",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: level === "expert" 
          ? "0 0 20px hsla(var(--teal), 0.4)" 
          : level === "advanced" 
          ? "0 0 20px hsla(var(--purple), 0.4)"
          : "0 0 10px hsla(var(--muted-foreground), 0.2)"
      }}
      className={`
        px-4 py-2 rounded-lg border-2 font-poppins text-sm font-medium
        transition-all duration-300 cursor-default
        ${levelColors[level]}
      `}
    >
      {skill}
    </motion.div>
  )
}

export default function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Python", level: "expert" as const },
        { name: "JavaScript", level: "expert" as const },
        { name: "TypeScript", level: "advanced" as const },
        { name: "Java", level: "advanced" as const },
        { name: "C++", level: "proficient" as const },
        { name: "R", level: "proficient" as const },
      ],
    },
    {
      category: "Frontend Development",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "React", level: "expert" as const },
        { name: "Next.js", level: "expert" as const },
        { name: "Tailwind CSS", level: "expert" as const },
        { name: "Framer Motion", level: "advanced" as const },
        { name: "HTML5/CSS3", level: "expert" as const },
      ],
    },
    {
      category: "Backend & APIs",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: "advanced" as const },
        { name: "FastAPI", level: "advanced" as const },
        { name: "Flask", level: "advanced" as const },
        { name: "Express", level: "proficient" as const },
        { name: "REST APIs", level: "expert" as const },
      ],
    },
    {
      category: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB", level: "advanced" as const },
        { name: "PostgreSQL", level: "advanced" as const },
        { name: "MySQL", level: "proficient" as const },
        { name: "SQLite", level: "proficient" as const },
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "LangChain", level: "advanced" as const },
        { name: "RAG", level: "advanced" as const },
        { name: "Prompt Engineering", level: "expert" as const },
        { name: "PyTorch", level: "proficient" as const },
        { name: "Pandas/NumPy", level: "expert" as const },
      ],
    },
    {
      category: "Finance & Analytics",
      icon: <TrendingUp className="h-5 w-5" />,
      skills: [
        { name: "Financial Modeling", level: "advanced" as const },
        { name: "Portfolio Analysis", level: "advanced" as const },
        { name: "Bloomberg Terminal", level: "proficient" as const },
        { name: "Data Visualization", level: "advanced" as const },
      ],
    },
    {
      category: "DevOps & Cloud",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        { name: "Git/GitHub", level: "expert" as const },
        { name: "Docker", level: "proficient" as const },
        { name: "AWS", level: "proficient" as const },
        { name: "Azure", level: "proficient" as const },
        { name: "CI/CD", level: "proficient" as const },
      ],
    },
    {
      category: "Tools & Software",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        { name: "VS Code", level: "expert" as const },
        { name: "Figma", level: "proficient" as const },
        { name: "Cursor AI", level: "advanced" as const },
        { name: "Postman", level: "advanced" as const },
        { name: "Notion", level: "expert" as const },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <SectionHeading 
        title="Skills & Expertise" 
        subtitle="Technologies and tools I have worked with"
      />
      
      {/* Legend */}
      <motion.div 
        className="flex flex-wrap justify-center gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-teal" />
          <span className="text-muted-foreground">Expert</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-purple" />
          <span className="text-muted-foreground">Advanced</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-muted-foreground" />
          <span className="text-muted-foreground">Proficient</span>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-teal/50 transition-all duration-300 hover:shadow-glow-sm group">
              <CardContent className="p-6">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    className="p-2.5 rounded-lg bg-gradient-primary text-primary-foreground"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="font-montserrat font-semibold text-lg group-hover:text-gradient transition-all">
                    {category.category}
                  </h3>
                </div>
                
                {/* Skills grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      index={skillIndex}
                    />
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
