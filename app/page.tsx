import Navbar from "@/components/layout/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Education from "@/components/sections/education"
import Courses from "@/components/sections/courses"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Awards from "@/components/sections/awards"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8 space-y-4">
        <About />
        <Education />
        <Courses />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} By Franklin Cheung
          </p>
        </div>
      </footer>
    </main>
  )
}
