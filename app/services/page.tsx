"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  Zap,
  Search,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Target,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies for optimal performance and scalability.",
    features: [
      "React & Next.js Development",
      "Full-Stack Solutions",
      "API Development & Integration",
      "Database Design & Optimization",
      "Progressive Web Apps (PWA)",
      "E-commerce Platforms",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
    startingPrice: "From $5,000",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience and drive engagement across all devices.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Design System Creation",
      "Usability Testing",
      "Responsive Design",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Principle", "InVision", "Sketch"],
    startingPrice: "From $3,000",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional performance and user experience.",
    features: [
      "iOS & Android Development",
      "React Native Solutions",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "Performance Optimization",
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"],
    startingPrice: "From $8,000",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description:
      "Comprehensive digital marketing strategies to increase your online visibility and drive qualified traffic.",
    features: [
      "Technical SEO Audits",
      "Content Strategy",
      "Local SEO Optimization",
      "Performance Marketing",
      "Analytics & Reporting",
      "Conversion Optimization",
    ],
    technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs"],
    startingPrice: "From $2,000",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast websites optimized for speed, Core Web Vitals, and exceptional user experience.",
    features: [
      "Core Web Vitals Optimization",
      "Page Speed Improvements",
      "Image & Asset Optimization",
      "Caching Strategies",
      "CDN Implementation",
      "Performance Monitoring",
    ],
    technologies: ["Lighthouse", "WebPageTest", "GTmetrix", "Cloudflare"],
    startingPrice: "From $1,500",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description:
      "Comprehensive security solutions and ongoing maintenance to keep your applications safe and up-to-date.",
    features: [
      "Security Audits",
      "SSL Implementation",
      "Regular Updates",
      "Backup Solutions",
      "Monitoring & Alerts",
      "24/7 Support",
    ],
    technologies: ["SSL/TLS", "Cloudflare", "AWS Security", "Monitoring Tools"],
    startingPrice: "From $500/month",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
    icon: Target,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We build your solution using best practices, with rigorous testing throughout the development process.",
    icon: Code,
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support, maintenance, and optimization services.",
    icon: Zap,
  },
]

const benefits = [
  {
    title: "Expert Team",
    description: "Work with experienced developers and designers who stay current with the latest technologies.",
    icon: Users,
  },
  {
    title: "Fast Delivery",
    description: "Efficient project management and agile development practices ensure timely delivery.",
    icon: Clock,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes guarantee reliable, bug-free solutions.",
    icon: CheckCircle,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                Our Services
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Digital Solutions
              </span>{" "}
              for Your Business
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From web development to mobile apps, we offer end-to-end digital services to help your business thrive in
              the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass glass-dark border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.startingPrice}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds
              your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              We're committed to delivering exceptional results and building long-term partnerships with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Let's discuss your project requirements and how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold bg-transparent" asChild>
                <Link href="/projects">View Our Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
