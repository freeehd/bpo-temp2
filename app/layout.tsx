import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local"
import type React from "react" // Import React

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
})

export const metadata: Metadata = {
  title: "BPOhub",
  description: "Where Business Meets Innovation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${satoshi.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}

