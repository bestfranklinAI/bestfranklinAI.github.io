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
  const categories = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "hpc", label: "HPC" },
    { value: "llm", label: "AI / LLM" },
  ];
  const allCategoryValues = categories.map((c) => c.value);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(allCategoryValues);

  const projectsData = [
    {
      title: "Utilizing LLM for Push Notification",
      description:
        "A full-featured platform with that optimize the generation of push notification with LLM.",
      image: "./images/temg4950n.png",
      technologies: ["React", "Node.js", "CrewAI", "Prompt Engineering", "RAG", "Llama"],
      category: ["fullstack", "llm"],
      liveLink: "#",
      githubLink: "https://github.com/TEMG4950N/copywriter_website",
      details:
        "Led development of an AI-powered push notification prototype for Meta and Viu, using LLMs, RAG, and CrewAI to generate engaging, localized content tailored to Hong Kong audiences Engineered a solution incorporating trending topics and memes, accelerating content creation through prompt engineering and diverse LLM experimentation (Llama, Gemma, DeepSeek, Sensenova Cantonese), aiming to significantly improve click-through rates.",
    },
    {
      title: "Exploring High Performance Computing (HPC)",
      description:
        "Exploring performance profiling and memory profiling to identify bottlnecks in the code and optimize the performance.",
      image: "./images/profiling.png",
      technologies: ["cProfile", "SnakeViz", "mprof"],
      category: ["hpc"],
      liveLink: "#",
      githubLink: "https://github.com/bestfranklinAI/hpc_hw1",
      details:
        "This project focuses on performance profiling and memory profiling to identify bottlenecks in the code and optimize performance. It includes a detailed analysis of the code's performance using cProfile, SnakeViz, and mprof, along with recommendations for optimization.",
    },
    {
      title: "Developing a Gauss-Seidel solver",
      description: "Explore multiple approaches to optimize iterative solvers using various Python tools and libraries",
      image: "./images/solver.jpg",
      technologies: ["cython", "cupy", "numpy"],
      category: ["hpc"],
      liveLink: "#",
      githubLink: "https://github.com/bestfranklinAI/Cython-HPC-",
      details:
        "The key tasks include: Developing a Gauss-Seidel solver using Python constructs (lists, arrays, or NumPy) and a vectorized Jacobi solver. Profiling the solvers to identify computational bottlenecks. Using Cython to annotate and optimize the most computationally expensive parts of the code. Porting the solver to Nvidia GPUs using PyTorch and CuPy, employing vectorized operations for efficiency. Measuring and comparing the performance of CPU vs. GPU implementations across different grid sizes. Saving the final grid matrix to an HDF5 file for further analysis.",
    },
    {
      title: "Smart Home APP",
      description: "A prototype of mobile app and dashboard for smart home management to reduce the consumption of electricity.",
      image: "./images/smart-home.png",
      technologies: ["React", "Figma", "IOT", "Machine Learning"],
      category: ["frontend"],
      liveLink: "https://smart-home-ochre.vercel.app/",
      githubLink: "https://github.com/bestfranklinAI/SmartHome",
      details:
        "This project is a prototype of a mobile app and dashboard for smart home management, designed to reduce electricity consumption. The app allows users to monitor and control their smart devices, providing insights into energy usage patterns. It includes features such as device scheduling, energy consumption tracking, and machine learning algorithms for predictive analytics.",
    },
    {
      title: "EAM System",
      description: "A web application for managing and tracking maintenance report in an organization.",
      image: "./images/eam.png",
      technologies: ["HTML", "CSS", "Llama", "ollama", "Flask", "RAG"],
      category: ["backend", "llm"],
      liveLink: "#",
      githubLink: "https://github.com/bestfranklinAI/EAM-System",
      details:
        "This project is a web application for managing and tracking maintenance reports in an organization. It allows users to create, update, and view maintenance reports, providing a centralized platform for asset management. The web app connect to local language model to process natural language description in the maintenance report and generate a summary for the management team. It includes features such as user authentication, report categorization, and data visualization.",
    },
    {
      title: "Optimizing lattice-Boltzmann code for 2D flow resolution",
      description: "Using HPC techniques to optimize the performance of a lattice-Boltzmann code",
      image: "./images/lattice-boltzmann.png",
      technologies: ["cython", "numba", "cuda", "pytorch"],
      category: ["hpc"],
      liveLink: "#",
      githubLink: "https://github.com/sazwu/2358final",
      details:
        "This project focuses on optimizing the performance of a lattice-Boltzmann code for simulating 2D flow resolution. It involves using HPC techniques such as numba, cython, parallel computing and GPU acceleration to improve the efficiency of the code. The project includes performance profiling, optimization strategies, and a comparison of CPU vs. GPU implementations.",
    },
    {
      title: "Mini-HKUST Examination System",
      description: "Using java to develop a mini-examination system for HKUST.",
      image: "./images/mini-hkust-exam.png",
      technologies: ["java", "javaFX", "Maven"],
      category: ["fullstack", "llm"],
      liveLink: "#",
      githubLink: "https://github.com/WaichL/COMP3111-Project",
      details:
        "This project is a Java-based application for managing and tracking student grades and exams at HKUST. It uses JavaFX for the user interface and a custom database implementation for storing and querying data.",
    }
  ]

  const filteredProjects = selectedCategories.length === 0
    ? projectsData
    : projectsData.filter((project) => {
        const projectCategories = Array.isArray(project.category)
          ? project.category
          : [project.category];
        return projectCategories.some((cat) => selectedCategories.includes(cat));
      });

  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <SectionHeading title="Projects" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Tabs defaultValue="all" value="" onValueChange={() => {}} className="mb-8">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-2xl mx-auto">
            <TabsTrigger
              value="all"
              onClick={() => setSelectedCategories(selectedCategories.length === allCategoryValues.length ? [] : allCategoryValues)}
              className={
                selectedCategories.length === allCategoryValues.length
                  ? "bg-primary text-primary-foreground"
                  : ""
              }
            >
              All
            </TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                onClick={() => {
                  setSelectedCategories((prev) =>
                    prev.includes(cat.value)
                      ? prev.filter((c) => c !== cat.value)
                      : [...prev, cat.value]
                  );
                }}
                className={selectedCategories.includes(cat.value) ? "bg-primary text-primary-foreground" : ""}
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategories.join(",")}
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
                    {project.liveLink && project.liveLink !== "#" && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" /> Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}
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
