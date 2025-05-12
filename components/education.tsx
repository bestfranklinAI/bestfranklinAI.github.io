import SectionHeading from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2018 - 2020",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "MIT",
      period: "2014 - 2018",
      description: "Focused on software engineering and web development. Participated in multiple hackathons.",
    },
  ]

  return (
    <section id="education" className="py-16">
      <SectionHeading title="Education" />
      <div className="grid md:grid-cols-2 gap-6">
        {educationData.map((item, index) => (
          <Card key={index} className="border-l-4 border-l-primary">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <GraduationCap className="h-6 w-6 text-primary" />
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
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
