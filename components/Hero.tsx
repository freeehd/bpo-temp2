"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Header from "./Header"
import CircularText from "./CircularText"
import AnimatedSVG from "./AnimatedSVG"
import CornerText from "./CornerText"
import ParallaxBackground from "./ParallaxBackground"
import ParticleAnimation from "./ParticleAnimation"
import { cn } from "@/lib/utils"
import ScrollIndicator from "./ScrollIndicator"
import React from "react"

const Hero = React.memo(function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])


  return (
    <section
      className={cn("relative min-h-screen bg-primary text-black overflow-hidden font-sans")}
      aria-label="Hero section"
    >
      <ParallaxBackground />
      <ParticleAnimation />
      <Header />
      <motion.div className={cn("absolute inset-0 flex flex-col items-center justify-center")} style={{ y, opacity }}>
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatedSVG />
          <CircularText />
        </div>
    
      </motion.div>
      <CornerText position="top-left" text="INNOVATE • TRANSFORM • GROW" />
      <CornerText position="top-right" text="24/7 GLOBAL SUPPORT" />
      <motion.div
        className={cn("absolute bottom-16 left-0 right-0 text-center text-sm font-medium")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
      </motion.div>
      <ScrollIndicator />
    </section>
  )
})

export default Hero

