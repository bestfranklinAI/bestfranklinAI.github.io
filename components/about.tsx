import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16">
      <SectionHeading title="About Me" />
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg mb-4">
            I'm a passionate full-stack developer with over 5 years of experience building web applications. I
            specialize in JavaScript, React, Node.js, and modern web technologies.
          </p>
          <p className="text-lg mb-4">
            My journey in software development began during my university years, and I've been hooked ever since. I love
            solving complex problems and creating intuitive, efficient solutions.
          </p>
          <p className="text-lg mb-6">
            When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.
          </p>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" /> Download Resume
          </Button>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
            <img src="/placeholder.svg?height=400&width=400" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
