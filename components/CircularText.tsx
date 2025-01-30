"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function CircularText() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <motion.div className="absolute inset-0 flex items-center justify-center" style={{ rotate }}>
      <svg className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px]" viewBox="0 0 100 100">
        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
        <text>
          <textPath xlinkHref="#circlePath" className="text-xl fill-current">
            WHERE BUSINESS MEETS INNOVATION • WHERE BUSINESS MEETS INNOVATION •
          </textPath>
        </text>
      </svg>
    </motion.div>
  )
}

