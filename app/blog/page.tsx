import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default async function BlogPage() {
  // Read all markdown files from the posts directory
  const postsDir = path.join(process.cwd(), "/public/posts")
  const files = await fs.readdir(postsDir)
  const blogPosts = await Promise.all(
    files.filter(file => file.endsWith(".md")).map(async (file) => {
      const filePath = path.join(postsDir, file)
      const fileContent = await fs.readFile(filePath, "utf8")
      const { data } = matter(fileContent)
      return {
        id: file.replace(/\.md$/, ""),
        ...data,
      }
    })
  )

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
                  {post.tags && post.tags.map((tag: string, i: number) => (
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
