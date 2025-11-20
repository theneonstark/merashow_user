"use client"

import { Link } from "@inertiajs/react"
import { Heart, MapPin, Calendar, Users } from "lucide-react"
import { useState } from "react"

export default function EventCard({ event, featured = false }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="group">
      <Link href={`/events/${event.id}`}>
        <div
          className={`relative overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/40 transition cursor-pointer`}
        >

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-t-xl h-48 md:h-64 bg-muted">
            <img
              src={event.poster || "/placeholder.svg"}
              alt={event.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Wishlist Button */}
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsWishlisted(!isWishlisted)
              }}
              className="absolute top-3 right-3 p-2 bg-background/70 backdrop-blur rounded-full border border-border hover:bg-background transition"
            >
              <Heart
                size={18}
                className={isWishlisted ? "fill-primary text-primary" : "text-foreground"}
              />
            </button>
          </div>

          {/* CONTENT */}
          <div className="p-4 space-y-3">

            {/* Title + Category */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-bold text-sm line-clamp-2 group-hover:text-primary transition">
                  {event.name}
                </h3>
                <p className="text-xs text-muted-foreground">{event.artist}</p>
              </div>

              <span className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 text-xs rounded-lg whitespace-nowrap font-medium">
                {event.category}
              </span>
            </div>

            {/* Info rows */}
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-primary" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span className="line-clamp-1">
                  {event.venue}, {event.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} className="text-primary" />
                <span>{event.availableSeats} seats available</span>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="pt-3 border-t border-border flex items-center justify-between">
              <span className="font-bold text-primary">₹{event.price}</span>

              <button className="px-3 py-1 bg-primary hover:bg-primary/90 rounded-lg text-sm text-white font-medium transition">
                Book Now
              </button>
            </div>
          </div>

        </div>
      </Link>
    </div>
  )
}