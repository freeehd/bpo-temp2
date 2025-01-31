import type React from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: React.ReactNode
  }
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4 text-gray-500 group-hover:text-blue-500 transition-colors duration-300">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-600">{service.description}</p>
      <div className="mt-4 flex items-center text-blue-500 font-medium">
        <span className="mr-2">Learn more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </motion.div>
  )
}

export default ServiceCard

