"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function CircularText() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const [fontSize, setFontSize] = useState("14px")

  useEffect(() => {
    const updateFontSize = () => {
      const size = Math.min(window.innerWidth, window.innerHeight) * 0.01
      setFontSize(`${size}px`)
    }

    updateFontSize()
    window.addEventListener("resize", updateFontSize)
    return () => window.removeEventListener("resize", updateFontSize)
  }, [])

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ rotate, scale }}
    >
      <svg className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px]" viewBox="0 0 100 100">
        <defs>
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
        </defs>
        <text style={{ fontSize }}>
          <textPath xlinkHref="#circlePath" className="fill-black" startOffset="0%">
            • WHERE BUSINESS MEETS INNOVATION •
          </textPath>
        </text>
      </svg>
    </motion.div>
  )
}

