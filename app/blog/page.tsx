import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "getting-started-with-nextjs",
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
      date: "May 10, 2023",
      readTime: "5 min read",
      tags: ["Next.js", "React", "Web Development"],
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: "mastering-typescript",
      title: "Mastering TypeScript for React Development",
      excerpt: "Discover how TypeScript can improve your React development experience with static typing.",
      date: "June 15, 2023",
      readTime: "8 min read",
      tags: ["TypeScript", "React", "JavaScript"],
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: "tailwind-css-tips",
      title: "10 Tailwind CSS Tips to Improve Your Workflow",
      excerpt: "Practical tips and tricks to make the most out of Tailwind CSS in your projects.",
      date: "July 22, 2023",
      readTime: "6 min read",
      tags: ["CSS", "Tailwind", "Web Design"],
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: "state-management-react",
      title: "Modern State Management in React",
      excerpt: "Comparing different state management solutions for React applications in 2023.",
      date: "August 5, 2023",
      readTime: "10 min read",
      tags: ["React", "State Management", "Redux", "Zustand"],
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="bg-muted text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
