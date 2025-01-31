"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const Header = React.memo(function Header() {
  const { scrollY } = useScroll()
  const [isLightBackground, setIsLightBackground] = useState(false)

  // Transform opacity based on scroll position
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 1)"])

  useEffect(() => {
    const checkBackgroundColor = () => {
      const heroSection = document.querySelector("section")
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        setIsLightBackground(heroRect.bottom <= 0)
      }
    }

    window.addEventListener("scroll", checkBackgroundColor)
    return () => window.removeEventListener("scroll", checkBackgroundColor)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 sm:p-6 z-50"
      style={{ backgroundColor }}
    >
      <motion.button
        className={`text-sm sm:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-md transition-colors text-black`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open menu"
      >
        MENU
      </motion.button>
      <motion.div
        className={`text-xl sm:text-3xl font-bold transition-colors text-black`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        BPOhub
      </motion.div>
      <Link href="#contact" passHref>
        <motion.a
          className={`text-sm sm:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-md transition-colors text-black`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          CONTACT
        </motion.a>
      </Link>
    </motion.header>
  )
})

export default Header

