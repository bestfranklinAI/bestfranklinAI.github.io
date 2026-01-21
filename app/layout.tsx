import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Franklin Cheung",
  description: "A dual degree student at HKUST, majoring in Computer Science and Finance. Passionate about machine learning, artificial intelligence, and fintech innovation.",
  generator: 'Next.js',
  keywords: ['Franklin Cheung', 'Full-Stack Developer', 'Finance', 'AI', 'Machine Learning', 'HKUST', 'Portfolio'],
  authors: [{ name: 'Franklin Cheung' }],
  openGraph: {
    title: 'Franklin Cheung | Full-Stack Developer & Finance',
    description: 'A dual degree student at HKUST, majoring in Computer Science and Finance.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1419" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="./images/home-icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
