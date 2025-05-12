import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <SectionHeading title="Contact Me" />
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">john.doe@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-muted p-3 rounded-full hover:bg-primary/20 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="bg-muted p-3 rounded-full hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-muted p-3 rounded-full hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
