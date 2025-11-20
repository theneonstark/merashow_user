"use client"

import { useState } from "react"
import { Link } from "@inertiajs/react"
import { Menu, X, LogOut, User } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { user, logout } = "useAuth()"

  const handleLogout = () => {
    logout()
    setIsDropdownOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/merahost/logos/1763619275776.png"
              alt="MERA SHOW"
              className="w-32 h-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-primary transition">
              Home
            </Link>
            <Link href="/events" className="text-sm hover:text-primary transition">
              Events
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* USER MENU */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition"
                >
                  <User size={18} className="text-primary" />
                  <span className="hidden sm:inline text-sm">{user.name}</span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg">
                    <Link
                      href={
                        user.role === "user"
                          ? "/user/dashboard"
                          : user.role === "organizer"
                          ? "/organizer/dashboard"
                          : "/admin/dashboard"
                      }
                      className="block px-4 py-2 text-sm hover:bg-primary/10 transition rounded-t-lg"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-primary/10 transition flex items-center gap-2 rounded-b-lg"
                    >
                      <LogOut size={16} className="text-primary" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm rounded-lg border border-primary text-primary hover:bg-primary/10 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm rounded-lg bg-primary text-white hover:bg-primary/90 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* MOBILE TOGGLER */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <Link href="/" className="text-sm hover:text-primary transition py-2">
              Home
            </Link>
            <Link href="/events" className="text-sm hover:text-primary transition py-2">
              Events
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition py-2">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition py-2">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}