"use client"

import { motion } from "framer-motion"

interface CornerTextProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  text: string
}

export default function CornerText({ position, text }: CornerTextProps) {
  const positionClasses = {
    "top-left": "top-14 left-6",
    "top-right": "top-14 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-right": "bottom-6 right-6",
  }

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} text-xs sm:text-sm tracking-wider font-medium text-black`}
      initial={{ opacity: 0, y: position.includes("top") ? -20 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      {text}
    </motion.div>
  )
}

