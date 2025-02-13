"use client"

import { motion } from "framer-motion"
import { Check, Phone } from "lucide-react"

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="text-5xl md:text-7xl font-serif text-gray-800 mb-6" variants={itemVariants}>
            Your Business, Your Brand—We Represent You
          </motion.h2>
          <motion.p className="text-lg md:text-xl text-gray-600 mb-12" variants={itemVariants}>
            At BPOHub.com, we work as an extension of your team. Every interaction is handled with professionalism,
            empathy, and a deep understanding of your brand voice.
          </motion.p>

          <motion.h3 className="text-3xl md:text-5xl font-serif text-gray-800 mb-8" variants={itemVariants}>
            Why Businesses Choose BPOHub.com
          </motion.h3>

          <motion.ul className="space-y-6 text-left mb-12" variants={containerVariants}>
            {[
              "Customer-First Approach – Your success is our mission. We tailor our services to meet your specific needs.",
              "Cost-Effective Scaling – Reduce expenses while expanding your team with flexible outsourcing.",
              "Seamless Integration – We blend into your existing workflows for a frictionless experience.",
              "24/7 Global Support – Keep your business running around the clock with a worldwide team.",
              "Tech-Driven Performance – Enhance productivity with AI, automation, and data-driven insights.",
            ].map((item, index) => (
              <motion.li key={index} className="flex items-start" variants={itemVariants}>
                <Check className="w-8 h-8 text-primary mr-4 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-600">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.h3 className="text-3xl md:text-5xl font-serif text-gray-800" variants={itemVariants}>
              Your Growth Starts Here
            </motion.h3>
            <motion.p className="text-lg md:text-xl text-gray-600" variants={itemVariants}>
              Don't let operational challenges hold you back. Outsource smarter, scale faster, and provide the
              experience your customers deserve.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-6 h-6 mr-3" />
                Talk to Our Experts Today
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

