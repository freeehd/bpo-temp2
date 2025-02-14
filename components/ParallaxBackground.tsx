"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ParallaxBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        }

        // Set initial window size
        handleResize()

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const xOffset = (mousePosition.x / (windowSize.width || 1) - 0.5) * 20
    const yOffset = (mousePosition.y / (windowSize.height || 1) - 0.5) * 20

    return (
        <motion.div
            className="absolute inset-0 z-0"
            style={{
                background: `radial-gradient(circle at ${50 + xOffset}% ${50 + yOffset}%, #FF8C5A 0%, #FF6B35 100%)`,
                transition: "background 0.3s ease",
            }}
            animate={{
                background: `radial-gradient(circle at ${50 + xOffset}% ${50 + yOffset}%, #FF8C5A 0%, #FF6B35 100%)`,
            }}
        />
    )
}

