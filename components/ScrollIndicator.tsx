"use client"

import { motion } from "framer-motion"

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute inset-4 flex items-end justify-center pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <motion.div
        className="w-6 h-10 border-2 border-black rounded-full p-1"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div
          className="w-1 h-2 bg-black rounded-full mx-auto"
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  )
}

export default ScrollIndicator

