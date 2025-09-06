"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountUp from "react-countup";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    department: "Leadership",
    bio: "Visionary leader with 10+ years in tech startups. Previously led product at two unicorn companies and has a passion for building teams that ship exceptional products.",
    image: "/placeholder.svg?height=400&width=400&text=Sarah+Chen",
    skills: [
      "Strategic Planning",
      "Product Vision",
      "Team Leadership",
      "Fundraising",
    ],
    location: "San Francisco, CA",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@company.com",
    },
    achievements: [
      "Forbes 30 Under 30",
      "TechCrunch Disruptor Award",
      "Y Combinator Alum",
    ],
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    department: "Engineering",
    bio: "Full-stack architect with expertise in scalable systems. Former senior engineer at Google with a track record of building products used by millions.",
    image: "/placeholder.svg?height=400&width=400&text=Marcus+Rodriguez",
    skills: [
      "System Architecture",
      "Cloud Infrastructure",
      "Team Management",
      "DevOps",
    ],
    location: "Austin, TX",
    social: {
      linkedin: "#",
      github: "#",
      email: "marcus@company.com",
    },
    achievements: [
      "Google Cloud Certified",
      "AWS Solutions Architect",
      "Open Source Contributor",
    ],
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Head of Design",
    department: "Design",
    bio: "Creative director with a passion for user-centered design. Previously at Apple and Airbnb, specializing in design systems and user research.",
    image: "/placeholder.svg?height=400&width=400&text=Emily+Watson",
    skills: ["UI/UX Design", "Design Systems", "User Research", "Prototyping"],
    location: "New York, NY",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@company.com",
    },
    achievements: [
      "Webby Award Winner",
      "Design Systems Expert",
      "Adobe Creative Resident",
    ],
  },
  {
    id: 4,
    name: "David Kim",
    role: "Senior Full-Stack Developer",
    department: "Engineering",
    bio: "Passionate developer with expertise in modern web technologies. Loves solving complex problems and mentoring junior developers.",
    image: "/placeholder.svg?height=400&width=400&text=David+Kim",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    location: "Seattle, WA",
    social: {
      linkedin: "#",
      github: "#",
      email: "david@company.com",
    },
    achievements: [
      "React Contributor",
      "Tech Conference Speaker",
      "Hackathon Winner",
    ],
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Product Manager",
    department: "Product",
    bio: "Data-driven product manager with a background in user psychology. Expert at translating user needs into product features that drive growth.",
    image: "/placeholder.svg?height=400&width=400&text=Priya+Patel",
    skills: [
      "Product Strategy",
      "Data Analysis",
      "User Research",
      "Agile Methodology",
    ],
    location: "Boston, MA",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "priya@company.com",
    },
    achievements: [
      "Product Management Certified",
      "Growth Hacking Expert",
      "Analytics Specialist",
    ],
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "DevOps Engineer",
    department: "Engineering",
    bio: "Infrastructure specialist focused on reliability and scalability. Passionate about automation and building robust deployment pipelines.",
    image: "/placeholder.svg?height=400&width=400&text=Alex+Thompson",
    skills: ["Kubernetes", "Docker", "CI/CD", "Monitoring", "Security"],
    location: "Denver, CO",
    social: {
      linkedin: "#",
      github: "#",
      email: "alex@company.com",
    },
    achievements: [
      "Kubernetes Certified",
      "Security Expert",
      "Infrastructure Automation",
    ],
  },
  {
    id: 7,
    name: "Lisa Zhang",
    role: "Senior UI/UX Designer",
    department: "Design",
    bio: "Creative problem solver with a keen eye for detail. Specializes in creating intuitive interfaces that users love to interact with.",
    image: "/placeholder.svg?height=400&width=400&text=Lisa+Zhang",
    skills: [
      "Interface Design",
      "User Testing",
      "Figma",
      "Animation",
      "Accessibility",
    ],
    location: "Los Angeles, CA",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa@company.com",
    },
    achievements: [
      "Design Award Winner",
      "Accessibility Advocate",
      "Design Mentor",
    ],
  },
  {
    id: 8,
    name: "James Wilson",
    role: "Mobile Developer",
    department: "Engineering",
    bio: "Mobile-first developer with expertise in both native and cross-platform development. Passionate about creating smooth, performant mobile experiences.",
    image: "/placeholder.svg?height=400&width=400&text=James+Wilson",
    skills: ["React Native", "Swift", "Kotlin", "Flutter", "Mobile UX"],
    location: "Miami, FL",
    social: {
      linkedin: "#",
      github: "#",
      email: "james@company.com",
    },
    achievements: [
      "App Store Featured",
      "Mobile Expert",
      "Performance Optimization",
    ],
  },
];

const departments = ["All", "Leadership", "Engineering", "Design", "Product"];

const stats = [
  { end: 15, suffix: "+", label: "Team Members" },
  { end: 8, suffix: "", label: "Countries" },
  { end: 50, suffix: "+", label: "Years Combined Experience" },
  { end: 100, suffix: "%", label: "Remote-First" },
];

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filteredMembers =
    selectedDepartment === "All"
      ? teamMembers
      : teamMembers.filter(
          (member) => member.department === selectedDepartment
        );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(10,147,150,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(10,147,150,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium"
              >
                Meet Our Team
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Talented People
              </span>{" "}
              Behind Our Success
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're a diverse team of passionate professionals from around the
              world, united by our commitment to creating exceptional digital
              experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                    duration={2}
                    separator=","
                  />
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {departments.map((department) => (
              <Button
                key={department}
                variant={
                  selectedDepartment === department ? "default" : "outline"
                }
                onClick={() => setSelectedDepartment(department)}
                className="transition-all duration-300"
              >
                {department}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden glass glass-dark border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-2">
                        {member.social.linkedin && (
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-8 h-8"
                            asChild
                          >
                            <Link href={member.social.linkedin}>
                              <Linkedin className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {member.social.twitter && (
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-8 h-8"
                            asChild
                          >
                            <Link href={member.social.twitter}>
                              <Twitter className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {member.social.github && (
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-8 h-8"
                            asChild
                          >
                            <Link href={member.social.github}>
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {member.social.email && (
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-8 h-8"
                            asChild
                          >
                            <Link href={`mailto:${member.social.email}`}>
                              <Mail className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {member.role}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        {member.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {member.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{member.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {member.achievements && member.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2">
                          Achievements
                        </h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {member.achievements
                            .slice(0, 2)
                            .map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-center">
                                <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              We believe in creating an environment where everyone can do their
              best work and grow professionally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Remote-First",
                description:
                  "Work from anywhere in the world with flexible hours and async communication.",
                icon: "🌍",
              },
              {
                title: "Growth Mindset",
                description:
                  "Continuous learning opportunities, mentorship programs, and conference attendance.",
                icon: "📚",
              },
              {
                title: "Work-Life Balance",
                description:
                  "Unlimited PTO, mental health support, and respect for personal time.",
                icon: "⚖️",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              We're always looking for talented individuals who share our
              passion for creating exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-transparent"
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
