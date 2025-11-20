"use client"

// import { useAuth } from "@/context/auth-context"
// import { redirect } from "next/navigation"
import EventGrid from "@/components/event-grid"
import HeroBanner from "@/components/hero-banner"
import FeaturedEvents from "@/components/featured-events"
import RootLayout from "./layout"

export default function HomePage() {
  const { user } = 'useAuth()'

  if (user?.role === "admin") {
    redirect("/admin/dashboard")
  }
  if (user?.role === "organizer") {
    redirect("/organizer/dashboard")
  }

  return (
    <RootLayout>
      <HeroBanner />
      <FeaturedEvents />
      <EventGrid />
    </RootLayout>
  )
}
