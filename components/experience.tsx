import SectionHeading from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experienceData = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in building responsive web applications using React and Next.js. Implemented CI/CD pipelines and improved performance by 40%.",
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple web applications using the MERN stack. Collaborated with UX designers to implement user-friendly interfaces.",
    },
    {
      position: "Junior Web Developer",
      company: "WebCraft Studios",
      period: "2016 - 2018",
      description:
        "Assisted in the development of client websites using HTML, CSS, and JavaScript. Gained experience in responsive design and cross-browser compatibility.",
    },
  ]

  return (
    <section id="experience" className="py-16">
      <SectionHeading title="Experience" />
      <div className="space-y-6">
        {experienceData.map((item, index) => (
          <Card key={index} className="border-l-4 border-l-primary">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Briefcase className="h-6 w-6 text-primary" />
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
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
