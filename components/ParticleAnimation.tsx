"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ParticleAnimationProps {
  className?: string
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

export default function ParticleAnimation({ className }: ParticleAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const safeCtx = ctx // Create a non-null assertion for TypeScript

    const dpr = window.devicePixelRatio || 1
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      safeCtx.scale(dpr, dpr)
    }
    updateCanvasSize()

    const particles: Particle[] = []
    const particleCount = 50
    const particleBaseRadius = 1
    const particleVariance = 0.5

    class Particle {
      x: number
      y: number
      radius: number
      baseX: number
      baseY: number
      density: number
      color: string

      constructor() {
        this.x = (Math.random() * canvas.width) / dpr
        this.y = (Math.random() * canvas.height) / dpr
        this.radius = particleBaseRadius + Math.random() * particleVariance
        this.baseX = this.x
        this.baseY = this.y
        this.density = Math.random() * 30 + 1
        this.color = ["#FF4500", "#FFA500", "#FFD700"][Math.floor(Math.random() * 3)]
      }

      update() {
        this.x += (Math.random() - 0.5) * 0.5
        this.y += (Math.random() - 0.5) * 0.5

        if (Math.abs(this.x - this.baseX) > 50) {
          this.x = this.baseX + 50 * Math.sign(this.x - this.baseX)
        }
        if (Math.abs(this.y - this.baseY) > 50) {
          this.y = this.baseY + 50 * Math.sign(this.y - this.baseY)
        }
      }

      draw() {
        safeCtx.beginPath()
        safeCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        safeCtx.fillStyle = this.color
        safeCtx.fill()
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      safeCtx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })
      requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener("resize", updateCanvasSize)
    return () => window.removeEventListener("resize", updateCanvasSize)
  }, [])

  return isMounted ? (
      <canvas
          ref={canvasRef}
          className={cn("fixed inset-0 pointer-events-none", className)}
          style={{ width: "100%", height: "100%" }}
      />
  ) : null
}

