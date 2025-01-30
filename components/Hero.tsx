"use client"

import { motion } from "framer-motion"
import Header from "./Header"
import CircularText from "./CircularText"
import AnimatedSVG from "./AnimatedSVG"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary text-white overflow-hidden">
      <Header />
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatedSVG />
        <CircularText />
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Keep scrolling for the good stuff.
      </motion.div>
    </section>
  )
}

