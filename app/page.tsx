import Navbar from "@/components/layout/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Education from "@/components/sections/education"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Awards from "@/components/sections/awards"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </div>
    </main>
  )
}
