"use client"

import EventCard from "./event-card"
import { events } from "@/data/mock-events"

export default function FeaturedEvents() {
  const featuredEvents = events.slice(0, 6)

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Featured <span className="text-primary">Events</span>
          </h2>
          <p className="text-muted-foreground">
            Check out the hottest events happening soon
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} featured />
          ))}
        </div>

      </div>
    </section>
  )
}
