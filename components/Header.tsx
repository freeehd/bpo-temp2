"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.button className="text-white text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        MENU
      </motion.button>
      <motion.div
        className="text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        BPOhub
      </motion.div>
      <Link href="#contact">
        <motion.button className="text-white text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          CONTACT
        </motion.button>
      </Link>
    </motion.header>
  )
}

