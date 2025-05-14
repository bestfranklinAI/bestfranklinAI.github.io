import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const postPath = path.join(process.cwd(), "/public/posts", `${slug}.md`)
  let fileContent: string
  try {
    fileContent = await fs.readFile(postPath, "utf8")
  } catch (e) {
    return <main className="min-h-screen py-16"><div className="container mx-auto px-4 max-w-4xl"><h1 className="text-2xl font-bold">Post not found</h1></div></main>
  }
  const { data, content } = matter(fileContent)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Button variant="outline" size="icon" asChild className="mb-4">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {data.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {data.readTime}
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {data.tags && data.tags.join(", ")}
            </div>
          </div>

          <img
            src={data.image || "/placeholder.svg"}
            alt={data.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "/public/posts")
  const files = await fs.readdir(postsDir)
  return files.filter(f => f.endsWith(".md")).map(file => ({ slug: file.replace(/\.md$/, "") }))
}
