"use client"

import { useAuth } from "@/context/auth-context"
import { redirect } from "next/navigation"
import { Ticket, Heart, User, LogOut } from "lucide-react"
import { useState } from "react"
import UserProfile from "@/components/user/user-profile"
import UserBookings from "@/components/user/user-bookings"
import UserWishlist from "@/components/user/user-wishlist"

export default function UserDashboard() {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState("bookings")

  if (!user || user.role !== "user") {
    redirect("/login")
  }

  const handleLogout = () => {
    logout()
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="card space-y-4 sticky top-20">
              <div className="pb-4 border-b border-slate-700">
                <p className="text-sm text-slate-400">Welcome back</p>
                <p className="text-xl font-bold">{user.name}</p>
                <p className="text-sm text-slate-400">{user.email}</p>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("bookings")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === "bookings" ? "bg-accent text-background font-medium" : "hover:bg-slate-700/50"
                  }`}
                >
                  <Ticket size={18} />
                  My Bookings
                </button>
                <button
                  onClick={() => setActiveTab("wishlist")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === "wishlist" ? "bg-accent text-background font-medium" : "hover:bg-slate-700/50"
                  }`}
                >
                  <Heart size={18} />
                  My Wishlist
                </button>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === "profile" ? "bg-accent text-background font-medium" : "hover:bg-slate-700/50"
                  }`}
                >
                  <User size={18} />
                  Profile
                </button>
              </nav>

              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-slate-600 hover:bg-slate-700/50 rounded-lg transition text-red-400"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>

          <div className="md:col-span-3">
            {activeTab === "bookings" && <UserBookings />}
            {activeTab === "wishlist" && <UserWishlist />}
            {activeTab === "profile" && <UserProfile user={user} />}
          </div>
        </div>
      </div>
    </div>
  )
}