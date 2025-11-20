"use client"

import { useState } from "react"
import EventGrid from "@/components/event-grid"
import FilterBar from "@/components/filter-bar"
import RootLayout from "../layout"

export default function EventsPage() {
  const [filters, setFilters] = useState({
    category: "all",
    city: "all",
    priceRange: [0, 5000],
  })

  return (
    <RootLayout>
      <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Browse All Events</h1>
        <p className="text-slate-400 mb-8">Find and book tickets for your favorite events</p>
        <FilterBar filters={filters} setFilters={setFilters} />
        <EventGrid filters={filters} />
      </div>
    </div>
    </RootLayout>
  )
}
