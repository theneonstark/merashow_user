"use client"

import { Search } from "lucide-react"
import { useState } from "react"

export default function HeroBanner() {
  const [search, setSearch] = useState("")

  return (
    <div className="bg-background border-b border-border py-16">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Your Gateway to <span className="text-primary">Unforgettable Events</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Discover and book tickets for concerts, movies, comedy shows, and more
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <Search
              className="absolute left-4 top-3.5 text-muted-foreground"
              size={20}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events, artists, venues..."
              className="w-full pl-12 pr-4 py-3 
              bg-background border border-border 
              rounded-lg shadow-sm
              focus:border-primary focus:ring-primary/20 focus:outline-none
              transition
              placeholder-muted-foreground"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
