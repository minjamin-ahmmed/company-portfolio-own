"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All",
  "Web Development",
  "Design",
  "Technology",
  "Business",
  "Tutorials",
];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping web development, from AI integration to new frameworks and performance optimization techniques.",
    content: `The web development landscape is evolving rapidly, with new technologies and methodologies emerging constantly. In 2024, we're seeing several key trends that are reshaping how we build and deploy web applications.

**AI Integration in Development**
Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development process. From AI-powered code completion to automated testing and deployment, developers are leveraging AI to increase productivity and reduce errors.

**Performance-First Approach**
With Core Web Vitals becoming increasingly important for SEO and user experience, developers are adopting a performance-first mindset. This includes optimizing for faster loading times, better interactivity, and visual stability.

**The Rise of Edge Computing**
Edge computing is bringing computation closer to users, reducing latency and improving performance. Frameworks like Next.js and platforms like Vercel are making it easier to deploy applications at the edge.

**Sustainable Web Development**
Environmental consciousness is driving developers to create more sustainable websites. This includes optimizing for energy efficiency, reducing data transfer, and choosing green hosting providers.`,
    image: "/placeholder.svg?height=400&width=600&text=Web+Development+Trends",
    category: "Web Development",
    author: "Sarah Chen",
    authorImage: "/placeholder.svg?height=100&width=100&text=Sarah",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Web Development", "AI", "Performance", "Trends"],
    featured: true,
  },
  {
    id: 2,
    title: "Building Accessible Web Applications: A Complete Guide",
    excerpt:
      "Learn how to create inclusive web experiences that work for everyone, including users with disabilities and assistive technologies.",
    content: `Web accessibility isn't just a legal requirement—it's a moral imperative and good business practice. Creating accessible web applications ensures that everyone can use your product, regardless of their abilities.

**Understanding WCAG Guidelines**
The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for creating accessible content. We'll explore the four main principles: Perceivable, Operable, Understandable, and Robust.

**Semantic HTML Foundation**
Using proper HTML semantics is the foundation of accessibility. This includes using heading hierarchies, form labels, and ARIA attributes appropriately.

**Testing for Accessibility**
Regular testing with screen readers, keyboard navigation, and automated tools helps ensure your application remains accessible throughout development.`,
    image: "/placeholder.svg?height=400&width=600&text=Web+Accessibility",
    category: "Web Development",
    author: "Marcus Rodriguez",
    authorImage: "/placeholder.svg?height=100&width=100&text=Marcus",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["Accessibility", "WCAG", "Inclusive Design"],
    featured: false,
  },
  {
    id: 3,
    title: "Design Systems That Scale: Lessons from Building Enterprise UIs",
    excerpt:
      "Discover best practices for creating design systems that can grow with your organization and maintain consistency across products.",
    content: `Design systems are the backbone of consistent, scalable user interfaces. After building design systems for multiple enterprise clients, we've learned valuable lessons about what works and what doesn't.

**Component Architecture**
A well-structured component library starts with atomic design principles. We'll explore how to build components that are flexible, reusable, and maintainable.

**Documentation and Adoption**
The best design system is useless if teams don't adopt it. Learn strategies for creating comprehensive documentation and driving adoption across your organization.

**Versioning and Evolution**
Design systems must evolve with your product. We'll discuss versioning strategies and how to manage breaking changes without disrupting development workflows.`,
    image: "/placeholder.svg?height=400&width=600&text=Design+Systems",
    category: "Design",
    author: "Emily Watson",
    authorImage: "/placeholder.svg?height=100&width=100&text=Emily",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Design Systems", "UI/UX", "Enterprise"],
    featured: true,
  },
  {
    id: 4,
    title: "Optimizing React Applications for Production",
    excerpt:
      "Performance optimization techniques for React applications, from code splitting to bundle analysis and runtime optimizations.",
    content: `React applications can become slow and bloated without proper optimization. Here are proven techniques to keep your React apps fast and efficient in production.

**Code Splitting Strategies**
Learn how to implement effective code splitting using React.lazy, dynamic imports, and route-based splitting to reduce initial bundle sizes.

**Bundle Analysis and Optimization**
Use tools like webpack-bundle-analyzer to identify and eliminate unnecessary dependencies and optimize your build process.

**Runtime Performance**
Optimize component rendering with React.memo, useMemo, and useCallback to prevent unnecessary re-renders and improve user experience.`,
    image: "/placeholder.svg?height=400&width=600&text=React+Optimization",
    category: "Technology",
    author: "David Kim",
    authorImage: "/placeholder.svg?height=100&width=100&text=David",
    date: "2023-12-28",
    readTime: "15 min read",
    tags: ["React", "Performance", "Optimization"],
    featured: false,
  },
  {
    id: 5,
    title: "The Business Case for Modern Web Technologies",
    excerpt:
      "How investing in modern web technologies can drive business growth, improve user experience, and reduce long-term costs.",
    content: `Modern web technologies aren't just about staying current—they're strategic business investments that can drive growth and competitive advantage.

**ROI of Performance Improvements**
Studies show that even small improvements in page load times can significantly impact conversion rates and revenue. We'll explore the business metrics that matter.

**Developer Productivity and Costs**
Modern frameworks and tools can dramatically improve developer productivity, reducing time-to-market and long-term maintenance costs.

**Future-Proofing Your Investment**
Learn how to evaluate and adopt new technologies in a way that protects your investment and ensures long-term success.`,
    image: "/placeholder.svg?height=400&width=600&text=Business+Technology",
    category: "Business",
    author: "Priya Patel",
    authorImage: "/placeholder.svg?height=100&width=100&text=Priya",
    date: "2023-12-20",
    readTime: "7 min read",
    tags: ["Business", "ROI", "Strategy"],
    featured: false,
  },
  {
    id: 6,
    title: "Getting Started with Next.js 14: A Comprehensive Tutorial",
    excerpt:
      "Step-by-step guide to building your first Next.js application with the latest features including App Router and Server Components.",
    content: `Next.js 14 introduces powerful new features that make building React applications faster and more efficient. This comprehensive tutorial will get you up and running.

**Setting Up Your Development Environment**
We'll start with creating a new Next.js project and configuring your development environment for optimal productivity.

**Understanding App Router**
The new App Router provides a more intuitive way to handle routing, layouts, and data fetching. Learn how to leverage these features effectively.

**Server Components and Client Components**
Understand when and how to use Server Components for better performance and Client Components for interactivity.

**Deployment and Production Optimization**
Finally, we'll cover deployment strategies and production optimizations to ensure your application performs well at scale.`,
    image: "/placeholder.svg?height=400&width=600&text=Next.js+Tutorial",
    category: "Tutorials",
    author: "Alex Thompson",
    authorImage: "/placeholder.svg?height=100&width=100&text=Alex",
    date: "2023-12-15",
    readTime: "20 min read",
    tags: ["Next.js", "Tutorial", "React", "App Router"],
    featured: true,
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<
    (typeof blogPosts)[0] | null
  >(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  if (selectedPost) {
    return (
      <div className="min-h-screen">
        {/* Blog Post Header */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Button
                variant="ghost"
                onClick={() => setSelectedPost(null)}
                className="mb-8"
              >
                ← Back to Blog
              </Button>

              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">
                  {selectedPost.category}
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Image
                      src={selectedPost.authorImage || "/placeholder.svg"}
                      alt={selectedPost.author}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(selectedPost.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
              </div>

              <Image
                src={selectedPost.image || "/placeholder.svg"}
                alt={selectedPost.title}
                width={800}
                height={400}
                className="w-full h-64 sm:h-96 object-cover rounded-lg mb-8"
              />
            </div>
          </div>
        </section>

        {/* Blog Post Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {selectedPost.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h3
                        key={index}
                        className="text-xl font-semibold mt-8 mb-4"
                      >
                        {paragraph.slice(2, -2)}
                      </h3>
                    );
                  }
                  return (
                    <p
                      key={index}
                      className="mb-6 leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={selectedPost.authorImage || "/placeholder.svg"}
                      alt={selectedPost.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{selectedPost.author}</p>
                      <p className="text-sm text-muted-foreground">Author</p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/contact">
                      Work With Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(10,147,150,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_70%,rgba(10,147,150,0.1),transparent_50%)]" />

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
                Our Blog
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Insights &{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Knowledge
              </span>{" "}
              Sharing
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stay updated with the latest trends, best practices, and insights
              from our team of experts in web development, design, and
              technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                Our most popular and impactful articles, handpicked by our
                editorial team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden glass glass-dark border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        onClick={() => setSelectedPost(post)}
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
              {selectedCategory === "All"
                ? "Latest Articles"
                : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden glass glass-dark border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-1 text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{post.author}</span>
                      <div className="flex items-center gap-3">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <Button
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Subscribe to our newsletter to get the latest articles and
              insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
