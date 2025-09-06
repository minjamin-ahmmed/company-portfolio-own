"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  offset?: number
  className?: string
}

export function ParallaxSection({ children, offset = 50, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, offset])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}
