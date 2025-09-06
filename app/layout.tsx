import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { NexivoLoader } from "@/components/nexivo-loader";
import { Suspense } from "react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "nexivo - Advanced Web Development",
  description:
    "Creating exceptional digital experiences with modern technology and innovative design.",
  generator: "nexivo.app",
  keywords: [
    "nexivo",
    "nexivo team",
    "nexivo projects",
    "digital agency",
    "web development",
    "web development services",
    "web development agency",
    "design",
    "design services",
    "design agency",
    "SaaS",
    "SaaS services",
    "SaaS agency",
    "SaaS development",
    "SaaS development services",
    "SaaS development agency",
    "SaaS development projects",
  ],
  authors: [{ name: "nexivo Team" }],
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
  openGraph: {
    title: "nexivo - Advanced Web Development",
    description:
      "Creating exceptional digital experiences with modern technology and innovative design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll" suppressHydrationWarning>
      <body className={`font-sans ${spaceGrotesk.variable} antialiased`}>
        <NexivoLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
  );
}
