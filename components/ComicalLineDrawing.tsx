import type React from "react"
import { motion } from "framer-motion"

interface ComicalLineDrawingProps {
  path: string
}

const ComicalLineDrawing: React.FC<ComicalLineDrawingProps> = ({ path }) => {
  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 200 100">
      <motion.path
        d={path}
        fill="none"
        stroke="#FF4500"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </svg>
  )
}

export default ComicalLineDrawing

