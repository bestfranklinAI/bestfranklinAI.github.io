"use client"

import { useState } from "react"
import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Maximize2, ArrowUpRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { getImagePath } from "@/lib/utils"

// Tech badge component
function TechBadge({ tech }: { tech: string }) {
  return (
    <motion.span
      className="px-3 py-1 text-xs font-poppins font-medium rounded-full bg-surface border border-border/50 text-muted-foreground hover:border-teal hover:text-teal transition-all"
      whileHover={{ scale: 1.05, boxShadow: "0 0 10px hsla(var(--teal), 0.3)" }}
    >
      {tech}
    </motion.span>
  )
}

export default function Projects() {
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "fullstack", label: "Full Stack" },
    { value: "llm", label: "AI / LLM" },
    { value: "hpc", label: "HPC" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
  ]
  
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const projectsData = [
    {
      title: "Mini Tools Web App",
      description: "A collection of mini tools within a single web app.",
      image: getImagePath("/images/mini-tools.png"),
      technologies: ["Vite", "React"],
      category: ["frontend"],
      liveLink: "https://franklin.is-a.dev/mini-tools/",
      githubLink: "https://github.com/bestfranklinAI/mini-tools",
      details: "A collection of mini tools include LaTeX generator, live markdown previewer, timer, random spinner, and more. Built with Vite and React for fast performance and seamless user experience.",
      metrics: ["LaTeX generator", "Markdown previewer", "Productivity tools"],
    },
    {
      title: "Mini-HKUST Examination System",
      description: "Using Java to develop a mini-examination system for HKUST.",
      image: getImagePath("/images/mini-hkust-exam.png"),
      technologies: ["Java", "JavaFX", "Maven"],
      category: ["fullstack"],
      liveLink: "#",
      githubLink: "https://github.com/WaichL/COMP3111-Project",
      details: "This project is a Java-based application for managing and tracking student grades and exams at HKUST. It uses JavaFX for the user interface and a custom database implementation for storing and querying data.",
      metrics: ["JavaFX UI", "Custom database", "Grade management"],
    },
    {
      title: "Math Buddy",
      description: "A webapp that uses motion tracking technology to engage SEN children in Hong Kong to learn mathematics.",
      image: getImagePath("/images/math-buddy.png"),
      technologies: ["Vite", "p5.js", "ml5.js"],
      category: ["frontend"],
      liveLink: "https://franklin.is-a.dev/SEN-GAME/",
      githubLink: "https://github.com/bestfranklinAI/SEN-GAME",
      details: "Includes object catcher, basket counting, and other interactive games using built-in camera for hand tracking to play with AR games. Designed specifically for special education needs children.",
      metrics: ["Motion tracking", "AR games", "SEN education"],
    },
    {
      title: "Crypto Analysis Engine",
      description: "Using Flask REST API endpoint with C++ calculation engine to offer real-time cryptocurrency indicators.",
      image: getImagePath("/images/crypto-analysis.png"),
      technologies: ["FastAPI", "pybind11", "WebSocket", "C++"],
      category: ["backend"],
      liveLink: "#",
      githubLink: "https://github.com/bestfranklinAI/crypto-analysis",
      details: "A production-grade hybrid Python-C++ system that ingests live cryptocurrency trades from Binance WebSocket API, computes technical indicators (RSI, VWAP, etc.) with microsecond latency, and exposes real-time insights via REST and WebSocket APIs.",
      metrics: ["Microsecond latency", "Real-time processing", "Technical indicators"],
    },
    {
      title: "LLM Router",
      description: "A backend server hosted in Azure to route all OpenAI compatible LLM requests, offering one API for many different LLM service providers.",
      image: getImagePath("/images/llm-router.png"),
      technologies: ["FastAPI", "Azure", "OpenAI API"],
      category: ["backend", "llm"],
      liveLink: "#",
      githubLink: "https://github.com/bestfranklinAI/LLM-Router",
      details: "OpenWebUI supported, OpenAI compatible endpoint to route LLM requests. Supports both streaming and non-streaming. Currently supports all OpenAI compatible service providers including but not limited to Cerebras, Groq, Gemini, Open Router, and Poe. Avoids geo-restriction by hosting in the US.",
      metrics: ["Multi-provider routing", "Streaming support", "Azure hosted"],
    },
    {
      title: "LLM Push Notification Platform",
      description: "AI-powered platform optimizing push notification generation using LLMs for Meta and Viu.",
      image: getImagePath("/images/temg4950n.png"),
      technologies: ["React", "Node.js", "CrewAI", "RAG", "Llama"],
      category: ["fullstack", "llm"],
      liveLink: "#",
      githubLink: "https://github.com/TEMG4950N/copywriter_website",
      details: "Led development of an AI-powered push notification prototype for Meta and Viu, using LLMs, RAG, and CrewAI to generate engaging, localized content tailored to Hong Kong audiences.",
      metrics: ["40% faster content creation", "Multi-LLM experimentation", "Cantonese localization"],
    },
    {
      title: "High Performance Computing Exploration",
      description: "Performance profiling and optimization techniques for computational bottleneck analysis.",
      image: getImagePath("/images/profiling.png"),
      technologies: ["cProfile", "SnakeViz", "mprof", "Python"],
      category: ["hpc"],
      liveLink: "#",
      githubLink: "https://github.com/bestfranklinAI/hpc_hw1",
      details: "Comprehensive performance and memory profiling project to identify and optimize computational bottlenecks using industry-standard tools.",
      metrics: ["Memory optimization", "CPU profiling", "Bottleneck analysis"],
    },
    {
      title: "Gauss-Seidel Solver Optimization",
      description: "Multi-approach optimization of iterative solvers using Python, Cython, and GPU acceleration.",
      image: getImagePath("/images/solver.jpg"),
      technologies: ["Cython", "CuPy", "NumPy", "PyTorch"],
      category: ["hpc"],
      liveLink: "#",
      githubLink: "https://github.com/bestfranklinAI/Cython-HPC-",
      details: "Developed optimized Gauss-Seidel and Jacobi solvers, comparing CPU vs GPU implementations across different grid sizes with HDF5 output.",
      metrics: ["GPU acceleration", "Performance comparison", "Vectorized operations"],
    },
    {
      title: "Smart Home Management App",
      description: "Mobile app prototype for smart home management focused on reducing electricity consumption.",
      image: getImagePath("/images/smart-home.png"),
      technologies: ["React", "Figma", "IoT", "Machine Learning"],
      category: ["frontend"],
      liveLink: "https://smart-home-ochre.vercel.app/",
      githubLink: "https://github.com/bestfranklinAI/SmartHome",
      details: "Innovative platform enabling users to monitor smart devices with energy tracking, scheduling, and predictive analytics using ML algorithms.",
      metrics: ["Energy tracking", "ML predictions", "Device scheduling"],
    },
    {
      title: "Enterprise Asset Management System",
      description: "Web application for managing maintenance reports with AI-powered natural language processing.",
      image: getImagePath("/images/eam.png"),
      technologies: ["Flask", "Llama", "RAG", "HTML/CSS"],
      category: ["fullstack", "llm"],
      liveLink: "#",
      githubLink: "https://github.com/bestfranklinAI/EAM-System",
      details: "Centralized platform connecting to local LLMs to process maintenance reports and generate management summaries using RAG.",
      metrics: ["NLP processing", "Auto-summarization", "Report categorization"],
    },
    {
      title: "Lattice-Boltzmann Flow Optimization",
      description: "HPC techniques to optimize 2D flow resolution simulations using parallel computing.",
      image: getImagePath("/images/lattice-boltzmann.png"),
      technologies: ["Cython", "Numba", "CUDA", "PyTorch"],
      category: ["hpc"],
      liveLink: "#",
      githubLink: "https://github.com/sazwu/2358final",
      details: "Optimized lattice-Boltzmann code performance using GPU acceleration, parallel computing, and comprehensive profiling.",
      metrics: ["GPU optimization", "Parallel computing", "Performance profiling"],
    },
  ]

  const filteredProjects = selectedCategory === "all"
    ? projectsData
    : projectsData.filter((project) => {
        const projectCategories = Array.isArray(project.category)
          ? project.category
          : [project.category]
        return projectCategories.includes(selectedCategory)
      })

  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="A showcase of my past projects"
      />

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent p-0">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className={`
                  px-4 py-2 rounded-full font-poppins text-sm font-medium transition-all
                  data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground
                  data-[state=inactive]:bg-card data-[state=inactive]:border data-[state=inactive]:border-border
                  data-[state=inactive]:hover:border-teal
                `}
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
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
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-teal/50 transition-all duration-300 hover:shadow-card-hover">
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  
                  {/* Quick action buttons on hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm">
                    {project.liveLink && project.liveLink !== "#" && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-teal text-primary-foreground hover:bg-teal/80 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-purple text-primary-foreground hover:bg-purple/80 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg group-hover:text-gradient transition-all">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-poppins text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* Metrics */}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <span 
                          key={metric}
                          className="text-xs text-teal font-medium"
                        >
                          • {metric}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter className="pt-0 mt-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-border hover:border-teal hover:bg-teal/10 group/btn"
                      >
                        <Maximize2 className="h-4 w-4 mr-2" /> 
                        View Details
                        <ArrowUpRight className="h-4 w-4 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-card border-border">
                      <DialogHeader>
                        <DialogTitle className="font-montserrat text-2xl text-gradient">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription asChild>
                          <div className="mt-4 space-y-4">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-foreground leading-relaxed">
                              {project.details}
                            </p>
                            
                            {/* Tech stack in modal */}
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <TechBadge key={tech} tech={tech} />
                              ))}
                            </div>
                            
                            {/* Metrics in modal */}
                            {project.metrics && (
                              <div className="grid grid-cols-3 gap-3">
                                {project.metrics.map((metric) => (
                                  <div 
                                    key={metric}
                                    className="p-3 rounded-lg bg-surface text-center"
                                  >
                                    <span className="text-sm text-teal font-medium">
                                      {metric}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {/* Action buttons */}
                            <div className="flex gap-4 pt-4">
                              {project.liveLink && project.liveLink !== "#" && (
                                <Button asChild className="bg-gradient-primary">
                                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                                  </a>
                                </Button>
                              )}
                              <Button variant="outline" asChild className="border-border hover:border-purple">
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
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
