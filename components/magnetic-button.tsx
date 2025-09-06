"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface MagneticButtonProps extends ButtonProps {
  children: React.ReactNode
  strength?: number
}

export function MagneticButton({ children, strength = 0.3, className, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    const x = (clientX - left - width / 2) * strength
    const y = (clientY - top - height / 2) * strength

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div animate={{ x: position.x, y: position.y }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
      <Button ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
