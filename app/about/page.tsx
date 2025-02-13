"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import Header from "@/components/Header"
import Image from "next/image"

const AboutPage = () => {
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
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h1
                className="text-5xl md:text-7xl font-serif text-gray-800 mb-6 text-center"
                variants={itemVariants}
              >
                About BPOHub.com
              </motion.h1>
              <motion.h2
                className="text-3xl md:text-4xl font-serif text-gray-700 mb-12 text-center"
                variants={itemVariants}
              >
                We understand your problems because We've lived It
              </motion.h2>

              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <Image
  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-tI62drrL3yqgC8U68QWCCn3lnvMLvr.svg"                    alt="BPOHub Team"
                    width={600}
                    height={400}
                    className=""
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <p className="text-lg text-gray-600 mb-6">
                    At BPOHub.com, we understand the realities of running a business—because we've been there ourselves.
                    Like you, we started with a vision, a dream, and a long list of challenges to overcome.
                  </p>
                  <p className="text-lg text-gray-600">
                    From managing customer support and expanding operations to balancing efficiency while controlling
                    costs, we've faced it all. We know the frustration of stretched resources, the fear of losing
                    customers due to poor service, and the difficulty of finding a reliable outsourcing partner. That's
                    why we created BPOHub.com—to be the solution we wished we had when we started.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-16" variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600">
                  Our mission is simple: to help businesses unlock seamless, scalable, and cost-effective outsourcing
                  solutions. Whether you're a startup streamlining operations or an established company looking to
                  enhance customer experiences, we're here to support your journey to success.
                </p>
              </motion.div>

              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" variants={containerVariants}>
                <motion.div className="bg-white rounded-lg shadow-lg p-8" variants={itemVariants}>
                  <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">What We Do</h3>
                  <p className="text-lg text-gray-600 mb-4">
                    We specialize in providing world-class customer support, back-office solutions, and process
                    automation—allowing you to focus on what truly matters: growing your business.
                  </p>
                  <p className="text-lg text-gray-600">
                    Hiring the wrong person can cost a business dearly—not just financially, but also in lost time and
                    missed opportunities. By outsourcing, business owners can eliminate the stress of hiring, reduce
                    operational risks, and free up valuable time to focus on scaling and innovation.
                  </p>
                </motion.div>
                <motion.div className="bg-white rounded-lg shadow-lg p-8" variants={itemVariants}>
                  <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "We've Walked in Your Shoes",
                      "Customer Centric Approach",
                      "Scalable & Flexible Solutions",
                      "Technology-Driven Efficiency",
                      "Global Reach, Local Expertise",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" />
                        <span className="text-lg text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-16" variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">Our Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { title: "Empathy", description: "We genuinely care about our clients and their customers." },
                    {
                      title: "Excellence",
                      description: "We strive to provide outstanding service at every touchpoint.",
                    },
                    {
                      title: "Innovation",
                      description: "We embrace technology and fresh strategies to keep businesses ahead of the curve.",
                    },
                    { title: "Integrity", description: "Transparency and honesty guide all of our decisions." },
                    {
                      title: "Collaboration",
                      description: "We don't just work for you—we work with you as an extension of your team.",
                    },
                  ].map((value, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-xl font-semibold text-primary mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="text-center" variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">
                  Join Us in Redefining Business Efficiency
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We're not just another outsourcing provider—we're a strategic partner in your success. Let us handle
                  the complexities, so you can focus on building, innovating, and scaling.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Partner with BPOHub.com
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutPage

