import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio - Premium Digital Agency",
  description: "Creating exceptional digital experiences with modern technology and innovative design.",
  generator: "v0.app",
  keywords: ["portfolio", "digital agency", "web development", "design", "SaaS"],
  authors: [{ name: "Portfolio Team" }],
  openGraph: {
    title: "Portfolio - Premium Digital Agency",
    description: "Creating exceptional digital experiences with modern technology and innovative design.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="smooth-scroll" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <ScrollToTop />
            </div>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
