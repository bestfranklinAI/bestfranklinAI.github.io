import SectionHeading from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projectsData = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-16">
      <SectionHeading title="Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <Card key={index} className="overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between mt-auto">
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" /> Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
