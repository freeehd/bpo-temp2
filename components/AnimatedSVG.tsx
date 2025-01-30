"use client"

import { motion } from "framer-motion"

export default function AnimatedSVG() {
  return (
    <motion.div
      className="w-[60vw] h-[60vw] max-w-[400px] max-h-[400px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Replace this with your actual SVG content */}
        <motion.path
          d="M10 10 L90 10 L90 90 L10 90 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  )
}

