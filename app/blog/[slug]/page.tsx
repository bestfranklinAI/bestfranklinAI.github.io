import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real application, you would fetch the blog post data based on the slug
  // For this example, we'll use hardcoded data
  const post = {
    title: "Getting Started with Next.js",
    date: "May 10, 2023",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Next.js is a React framework that enables you to build supercharged, server-rendered React applications with ease. It's designed to make the development process smoother and more intuitive, while also providing a great developer experience.</p>
      
      <h2>Why Next.js?</h2>
      
      <p>There are several reasons why Next.js has become one of the most popular frameworks for building React applications:</p>
      
      <ul>
        <li><strong>Server-Side Rendering (SSR)</strong>: Next.js allows you to render your React components on the server before sending them to the client. This can significantly improve the performance and SEO of your application.</li>
        <li><strong>Static Site Generation (SSG)</strong>: Next.js can generate static HTML pages at build time, which can be served directly from a CDN for blazing-fast performance.</li>
        <li><strong>Incremental Static Regeneration (ISR)</strong>: This feature allows you to update static pages after they've been built, without having to rebuild the entire site.</li>
        <li><strong>API Routes</strong>: Next.js provides a simple way to build API endpoints as part of your application.</li>
        <li><strong>File-based Routing</strong>: Next.js uses a file-based routing system, which makes it easy to create new pages and routes.</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>To create a new Next.js application, you can use the following command:</p>
      
      <pre><code>npx create-next-app my-next-app</code></pre>
      
      <p>This will create a new Next.js application in a directory called <code>my-next-app</code>. You can then navigate to this directory and start the development server:</p>
      
      <pre><code>cd my-next-app
npm run dev</code></pre>
      
      <p>Your Next.js application will now be running at <code>http://localhost:3000</code>.</p>
      
      <h2>Creating Pages</h2>
      
      <p>In Next.js, pages are React components exported from files in the <code>pages</code> directory. Each page is associated with a route based on its file name.</p>
      
      <p>For example, if you create a file at <code>pages/about.js</code> that exports a React component, it will be accessible at <code>/about</code>.</p>
      
      <pre><code>// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page</p>
    </div>
  )
}</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Next.js provides a powerful and flexible framework for building React applications. Whether you're building a simple blog or a complex web application, Next.js has the features and tools you need to succeed.</p>
      
      <p>In future posts, we'll explore more advanced features of Next.js, such as data fetching, authentication, and deployment.</p>
    `,
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Button variant="outline" size="icon" asChild className="mb-4">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {post.tags.join(", ")}
            </div>
          </div>

          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </main>
  )
}
