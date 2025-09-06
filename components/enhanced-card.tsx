"use client"

import { motion } from "framer-motion"
import { Card, type CardProps } from "@/components/ui/card"
import type { ReactNode } from "react"

interface EnhancedCardProps extends CardProps {
  children: ReactNode
  hoverScale?: number
  hoverRotate?: number
}

export function EnhancedCard({ children, className, hoverScale = 1.02, hoverRotate = 1, ...props }: EnhancedCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className={`transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ${className}`} {...props}>
        {children}
      </Card>
    </motion.div>
  )
}
