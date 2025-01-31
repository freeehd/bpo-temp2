"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import {
  BarChart3,
  ClipboardList,
  HeadphonesIcon,
  Calculator,
  Code2,
  Database,
  Users,
  Building2,
  Shield,
  Home,
  Cog,
} from "lucide-react"
import ParticleAnimation from "./ParticleAnimation"
import ComicalLineDrawing from "./ComicalLineDrawing"

const services = [
  {
    icon: BarChart3,
    title: "Enterprise Resource Punning",
    description: "We'll help you 'resource' your way to success!",
    position: { top: "5%", left: "5%" },
    drawingPath: "M10 80 Q 95 10 180 80",
  },
  {
    icon: ClipboardList,
    title: "Project Manage-mint",
    description: "Fresh ideas to keep your projects cool as a cucumber!",
    position: { top: "5%", right: "5%" },
    drawingPath: "M10 40 Q 95 110 180 40",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Su-port",
    description: "We'll wine and dine your customers' problems away!",
    position: { top: "25%", left: "15%" },
    drawingPath: "M10 10 Q 95 80 180 10",
  },
  {
    icon: Calculator,
    title: "Finance & A-count-ing",
    description: "We'll make your numbers count, one digit at a time!",
    position: { top: "25%", right: "15%" },
    drawingPath: "M180 10 Q 95 80 10 10",
  },
  {
    icon: Cog,
    title: "Engineering Ser-vices",
    description: "We'll engineer solutions faster than you can say 'eureka'!",
    position: { top: "45%", left: "5%" },
    drawingPath: "M10 50 Q 95 0 180 50",
  },
  {
    icon: Code2,
    title: "Soft-where Development",
    description: "We'll build your software anywhere, even in thin air!",
    position: { top: "45%", right: "5%" },
    drawingPath: "M10 10 Q 95 110 180 10",
  },
  {
    icon: Users,
    title: "Human Re-sources",
    description: "We'll help you find the right humans for your resource pool!",
    position: { top: "65%", left: "15%" },
    drawingPath: "M180 80 Q 95 10 10 80",
  },
  {
    icon: Building2,
    title: "Property Manage-meant",
    description: "We meant to say we're property experts!",
    position: { top: "65%", right: "15%" },
    drawingPath: "M10 10 Q 95 110 180 10",
  },
  {
    icon: Database,
    title: "Data Pro-cessing",
    description: "We'll process your data faster than you can say 'byte'!",
    position: { bottom: "25%", left: "5%" },
    drawingPath: "M180 80 Q 95 10 10 80",
  },
  {
    icon: Shield,
    title: "IT Su-port & Security",
    description: "We'll guard your bits and bytes like a knight in shining armor!",
    position: { bottom: "25%", right: "5%" },
    drawingPath: "M10 80 Q 95 10 180 80",
  },
  {
    icon: Home,
    title: "Real Estate Virtual Assist-ants",
    description: "We'll help you close deals without leaving your couch!",
    position: { bottom: "5%", left: "30%" },
    drawingPath: "M10 40 Q 95 110 180 40",
  },
]

function FloatingCard({
  service,
  mouseX,
  mouseY,
  index,
}: {
  service: (typeof services)[0]
  mouseX: number
  mouseY: number
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  useEffect(() => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = mouseX - centerX
    const distanceY = mouseY - centerY

    const maxDistance = 300
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    const strength = Math.min(distance / maxDistance, 1)

    const moveX = distanceX * strength * 0.05
    const moveY = distanceY * strength * 0.05

    x.set(moveX)
    y.set(moveY)
  }, [mouseX, mouseY, x, y])

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      className="absolute z-10"
      style={{
        ...service.position,
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative w-64 p-6 rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg group overflow-hidden">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Icon className="w-10 h-10 mb-4 text-primary transition-transform duration-300 group-hover:scale-110 relative z-10" />
        <h3 className="text-lg font-semibold mb-2 text-gray-800 relative z-10">{service.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed relative z-10">{service.description}</p>
        <ComicalLineDrawing path={service.drawingPath} />
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gray-50 overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_70%)]" />
      <ParticleAnimation className="opacity-30" />

      <div className="container mx-auto px-4 relative min-h-[1200px] flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-20">
          <motion.h1
            className="text-5xl md:text-7xl font-serif text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Seriously Un-serious Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We put the "fun" in "functional" and the "laughter" in "solutions"
          </motion.p>
        </div>

        {services.map((service, index) => (
          <FloatingCard
            key={service.title}
            service={service}
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

