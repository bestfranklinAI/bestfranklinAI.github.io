import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { getImagePath } from "@/lib/utils"
import Navbar from "@/components/layout/navbar"

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  tags?: string[];
}

// Updated type to handle params as a Promise
type Params = {
  params: Promise<{ slug: string }> | { slug: string }
}

export default async function BlogPostPage({ params }: Params) {
  // Await params if it's a Promise
  const resolvedParams = 'then' in params ? await params : params
  const { slug } = resolvedParams

  const postPath = path.join(process.cwd(), "/public/posts", `${slug}.md`)
  let fileContent: string
  try {
    fileContent = await fs.readFile(postPath, "utf8")
  } catch (e) {
    return <main className="min-h-screen py-16"><div className="container mx-auto px-4 max-w-4xl"><h1 className="text-2xl font-bold">Post not found</h1></div></main>
  }
  const { data, content } = matter(fileContent)
  
  // Process markdown and fix image paths
  let processedContent = await remark().use(html).process(content)
  let contentHtml = processedContent.toString()
  
  // Replace image src paths to use the getImagePath helper
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  if (basePath) {
    contentHtml = contentHtml.replace(
      /src="\/images\//g,
      `src="${basePath}/images/`
    )
  }
  
  // Cast data to BlogPost interface
  const postData = data as BlogPost

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-4xl">
        <div className="mb-8">
          <Button variant="outline" size="icon" asChild className="mb-4">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {postData.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {postData.readTime}
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {postData.tags && postData.tags.join(", ")}
            </div>
          </div>

          <img
            src={postData.image ? getImagePath(postData.image) : getImagePath("/placeholder.svg")}
            alt={postData.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
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

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "/public/posts")
  const files = await fs.readdir(postsDir)
  return files.filter(f => f.endsWith(".md")).map(file => ({ slug: file.replace(/\.md$/, "") }))
}
