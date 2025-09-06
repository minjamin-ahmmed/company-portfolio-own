"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github, Calendar, Users, Award } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const categories = ["All", "Web Development", "Mobile App", "E-commerce", "Dashboard", "SaaS"]

const projects = [
  {
    id: 1,
    title: "E-commerce Platform Revolution",
    description:
      "Complete redesign and development of a multi-vendor e-commerce platform with advanced analytics and AI-powered recommendations.",
    longDescription:
      "Built a comprehensive e-commerce solution that handles over 10,000 daily transactions with real-time inventory management, advanced search capabilities, and personalized shopping experiences.",
    image: "/modern-ecommerce-dashboard.png",
    category: "E-commerce",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis", "AI/ML"],
    client: "RetailTech Solutions",
    duration: "6 months",
    team: "8 members",
    year: "2024",
    results: ["300% increase in conversion rate", "50% reduction in page load time", "99.9% uptime achieved"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics dashboard with advanced data visualization, custom reporting, and team collaboration features.",
    longDescription:
      "Developed a comprehensive analytics platform that processes millions of data points daily, providing actionable insights through interactive charts and customizable dashboards.",
    image: "/saas-analytics-dashboard-with-charts.jpg",
    category: "Dashboard",
    tags: ["React", "D3.js", "Node.js", "MongoDB", "WebSocket"],
    client: "DataFlow Analytics",
    duration: "4 months",
    team: "6 members",
    year: "2024",
    results: [
      "40% faster data processing",
      "Real-time collaboration for 1000+ users",
      "Custom reporting saved 20 hours/week",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Mobile Banking Revolution",
    description:
      "Secure mobile banking application with biometric authentication, real-time transactions, and advanced security features.",
    longDescription:
      "Created a next-generation mobile banking app with cutting-edge security, intuitive UX, and seamless integration with existing banking infrastructure.",
    image: "/mobile-banking-app.png",
    category: "Mobile App",
    tags: ["React Native", "Biometrics", "Encryption", "API Gateway"],
    client: "SecureBank Corp",
    duration: "8 months",
    team: "10 members",
    year: "2023",
    results: ["2M+ downloads in first year", "99.99% transaction success rate", "Bank-grade security certification"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare platform connecting patients, doctors, and administrators with telemedicine capabilities.",
    longDescription:
      "Built an integrated healthcare ecosystem that streamlines patient care, appointment scheduling, and medical record management with HIPAA compliance.",
    image: "/placeholder.svg?height=400&width=600&text=Healthcare+Platform",
    category: "Web Development",
    tags: ["Next.js", "HIPAA", "WebRTC", "PostgreSQL", "AWS"],
    client: "MedTech Innovations",
    duration: "10 months",
    team: "12 members",
    year: "2023",
    results: ["50,000+ patients served", "30% reduction in wait times", "HIPAA compliant infrastructure"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "AI-Powered Learning Platform",
    description:
      "Intelligent learning management system with personalized curricula, progress tracking, and adaptive assessments.",
    longDescription:
      "Developed an AI-driven educational platform that personalizes learning experiences and provides detailed analytics for educators and students.",
    image: "/placeholder.svg?height=400&width=600&text=Learning+Platform",
    category: "SaaS",
    tags: ["React", "Python", "TensorFlow", "GraphQL", "Docker"],
    client: "EduTech Global",
    duration: "7 months",
    team: "9 members",
    year: "2023",
    results: ["85% improvement in learning outcomes", "100,000+ active learners", "AI accuracy rate of 94%"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Real Estate Marketplace",
    description:
      "Modern property marketplace with virtual tours, AI-powered matching, and integrated financing solutions.",
    longDescription:
      "Created a comprehensive real estate platform that revolutionizes property discovery and transaction processes with cutting-edge technology.",
    image: "/placeholder.svg?height=400&width=600&text=Real+Estate+Platform",
    category: "Web Development",
    tags: ["Next.js", "Three.js", "Stripe", "Maps API", "ML"],
    client: "PropTech Ventures",
    duration: "9 months",
    team: "11 members",
    year: "2022",
    results: [
      "$50M+ in transactions facilitated",
      "60% faster property discovery",
      "Virtual tours increased engagement by 200%",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_80%,rgba(251,146,60,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                Our Portfolio
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Showcasing Our{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Best Work
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our portfolio of successful projects that have helped businesses transform their digital presence
              and achieve remarkable results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden glass glass-dark border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="icon" variant="secondary" className="w-8 h-8" asChild>
                        <Link href={project.liveUrl}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="icon" variant="secondary" className="w-8 h-8" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">{project.description}</p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.team}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal/Detail View */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </Button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-muted-foreground">{selectedProject.client}</p>
                </div>
                <Badge variant="secondary">{selectedProject.category}</Badge>
              </div>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{selectedProject.longDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Duration</h4>
                  <p className="text-muted-foreground">{selectedProject.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Team Size</h4>
                  <p className="text-muted-foreground">{selectedProject.team}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Year</h4>
                  <p className="text-muted-foreground">{selectedProject.year}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4">Key Results</h4>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="flex items-center">
                      <Award className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href={selectedProject.liveUrl}>
                    View Live Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={selectedProject.githubUrl}>
                    View Code
                    <Github className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Let's work together to create something amazing that drives real results for your business.
            </p>
            <Button size="lg" className="px-8 py-6 text-lg font-semibold" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
