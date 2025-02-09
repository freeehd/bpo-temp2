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
      <motion.svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="black"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.2 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="35"
          stroke="black"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.2 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="25"
          stroke="black"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.2 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="7"
          fill="black"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        />
      </motion.svg>
    </motion.div>
  )
}

