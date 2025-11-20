"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
// import { AuthProvider } from "@/context/auth-context"


export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans bg-background text-foreground`}>
        <div>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
