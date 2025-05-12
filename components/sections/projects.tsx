"use client"

import { useState } from "react"
import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Maximize2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projectsData = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveLink: "#",
      githubLink: "#",
      details:
        "This e-commerce platform provides a complete solution for online stores. It includes product management, shopping cart functionality, secure checkout with Stripe, user authentication, and an admin dashboard for managing products, orders, and customers.",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      category: "frontend",
      liveLink: "#",
      githubLink: "#",
      details:
        "This task management app allows teams to collaborate on projects in real-time. Features include task creation, assignment, status tracking, due dates, comments, file attachments, and notifications. The app uses Firebase for real-time updates and authentication.",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      category: "frontend",
      liveLink: "#",
      githubLink: "#",
      details:
        "This weather dashboard provides detailed weather information for any location. It displays current conditions, hourly forecasts, and 7-day forecasts. Users can save favorite locations and view historical weather data. The app uses the OpenWeather API and Chart.js for data visualization.",
    },
    {
      title: "Content Management System",
      description: "A headless CMS built with Node.js and GraphQL for managing digital content.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
      category: "backend",
      liveLink: "#",
      githubLink: "#",
      details:
        "This headless CMS provides a flexible solution for managing digital content. It includes content modeling, versioning, publishing workflows, user management, and a GraphQL API for retrieving content. The system is containerized with Docker for easy deployment.",
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-first web application for tracking workouts and fitness progress.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Redux", "Firebase", "D3.js"],
      category: "mobile",
      liveLink: "#",
      githubLink: "#",
      details:
        "This fitness tracking app helps users monitor their workout routines and progress. Features include workout planning, exercise tracking, progress visualization, goal setting, and social sharing. The app uses D3.js for data visualization and Firebase for backend services.",
    },
    {
      title: "AI Image Generator",
      description: "A web application that generates images using AI based on text prompts.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Flask", "TensorFlow", "React"],
      category: "ai",
      liveLink: "#",
      githubLink: "#",
      details:
        "This AI image generator creates unique images based on text descriptions. It uses a deep learning model trained on millions of images to generate high-quality, creative visuals. The app includes features for adjusting generation parameters, saving favorites, and sharing creations.",
    },
  ]

  const filteredProjects =
    activeTab === "all" ? projectsData : projectsData.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <SectionHeading title="Projects" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-2xl mx-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="ai">AI/ML</TabsTrigger>
          </TabsList>
        </Tabs>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Badge variant="secondary">{tech}</Badge>
                    </motion.div>
                  ))}
                </CardContent>
                <CardFooter className="flex justify-between mt-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Maximize2 className="h-4 w-4 mr-2" /> Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>
                          <div className="mt-4">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-md mb-4"
                            />
                            <p className="mb-4">{project.details}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, i) => (
                                <Badge key={i} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-4">
                              <Button asChild>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                                </a>
                              </Button>
                              <Button variant="outline" asChild>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4 mr-2" /> View Code
                                </a>
                              </Button>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                  <div className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" /> Code
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> Demo
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
