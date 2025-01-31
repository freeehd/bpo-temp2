"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ParticleAnimationProps {
  className?: string
}

export default function ParticleAnimation({ className }: ParticleAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
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
        this.color = ["#000000", "#FFA500", "#FFD700"][Math.floor(Math.random() * 3)]
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
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
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

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 pointer-events-none", className)}
      style={{ width: "100%", height: "100%" }}
    />
  )
}

