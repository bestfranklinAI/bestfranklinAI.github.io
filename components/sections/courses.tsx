"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export default function Courses() {
  const computerScienceCourses = [
    { code: "COMP 1021", name: "Intro to Computer Science", grade: "A" },
    { code: "COMP 2011", name: "Programming with C++", grade: "A+" },
    { code: "COMP 2211", name: "Exploring AI", grade: "A" },
    { code: "COMP 2611", name: "Computer Organization", grade: "A+" },
    { code: "COMP 2711", name: "Discrete Math Tools", grade: "A" },
    { code: "COMP 3111", name: "Software Engineering", grade: "A+" },
    { code: "COMP 3711", name: "Design & Analysis of Algorithms", grade: "A+" },
  ]

  const financeCourses = [
    { code: "ACCT 2010", name: "Principles of Accounting I", grade: "A" },
    { code: "ACCT 2200", name: "Principles of Accounting II", grade: "A+" },
    { code: "ACCT 3030", name: "Introduction to Finance", grade: "A" },
    { code: "FINA 2303", name: "Financial Management", grade: "A" },
    { code: "FINA 3103", name: "Intermediate Investments", grade: "A" },
    { code: "FINA 3203", name: "Derivative Securities", grade: "A+" },
    { code: "FINA 4103", name: "FINA Market Trading and Structure", grade: "A+" },
  ]

  const CourseCard = ({ title, courses, icon: Icon, color }: {
    title: string
    courses: typeof computerScienceCourses
    icon: any
    color: string
  }) => (
    <Card className="overflow-hidden border-2 hover:border-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple/20">
      <CardHeader className={`bg-gradient-to-br ${color} text-white`}>
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-3">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex justify-between items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-purple">{course.code}</p>
                <p className="text-sm text-muted-foreground">{course.name}</p>
              </div>
              <span className={`font-bold text-sm px-2.5 py-1 rounded-md ${
                course.grade === "A+" 
                  ? "bg-gradient-to-r from-purple to-teal text-white" 
                  : "bg-purple/10 text-purple"
              }`}>
                {course.grade}
              </span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="courses" className="py-20 scroll-mt-16">
      <SectionHeading 
        title="Courses" 
        subtitle="Key courses"
      />
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CourseCard
            title="Computer Science"
            courses={computerScienceCourses}
            icon={BookOpen}
            color="from-purple to-purple/80"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CourseCard
            title="Finance"
            courses={financeCourses}
            icon={GraduationCap}
            color="from-teal to-teal/80"
          />
        </motion.div>
      </div>
    </section>
  )
}
