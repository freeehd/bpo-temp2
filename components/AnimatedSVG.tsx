"use client"

import { motion } from "framer-motion"

export default function AnimatedSVG() {
  return (
    <motion.div
      className="absolute w-[60vw] h-[60vw] max-w-[400px] max-h-[400px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M200 50C117.157 50 50 117.157 50 200C50 282.843 117.157 350 200 350C282.843 350 350 282.843 350 200C350 117.157 282.843 50 200 50Z"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M200 100C144.772 100 100 144.772 100 200C100 255.228 144.772 300 200 300"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M200 150C172.386 150 150 172.386 150 200C150 227.614 172.386 250 200 250"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="25"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
        />
      </motion.svg>
    </motion.div>
  )
}

