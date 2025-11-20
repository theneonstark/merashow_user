"use client"

import { useState } from "react"
import { X } from "lucide-react"
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const categories = ["Concert", "Movie", "Comedy", "Theater", "Sports", "Festival"]
const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Kolkata"]

export default function FilterBar({ filters, setFilters }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleReset = () => {
    setFilters({
      category: "all",
      city: "all",
      priceRange: [0, 5000],
    })
  }

  return (
    <div className="space-y-4">

      {/* Toggle + Reset */}
      <div className="flex flex-wrap gap-2 items-center">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="border-primary/40 text-primary hover:bg-primary/10"
        >
          {isOpen ? "▼ Hide Filters" : "► Show Filters"}
        </Button>

        {(filters.category !== "all" ||
          filters.city !== "all" ||
          filters.priceRange[1] !== 5000) && (
          <Button
            variant="ghost"
            onClick={handleReset}
            className="text-muted-foreground hover:text-primary flex items-center gap-2"
          >
            <X size={16} />
            Clear Filters
          </Button>
        )}
      </div>

      {/* FILTER PANEL */}
      {isOpen && (
        <Card className="border border-border bg-card">
          <CardContent className="pt-6 space-y-6">

            {/* Category */}
            <div className="space-y-2">
              <Label>Category</Label>
              <Select
                value={filters.category}
                onValueChange={(value) => setFilters({ ...filters, category: value })}
              >
                <SelectTrigger className="border-border bg-background">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label>City</Label>
              <Select
                value={filters.city}
                onValueChange={(value) => setFilters({ ...filters, city: value })}
              >
                <SelectTrigger className="border-border bg-background">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Slider */}
            <div className="space-y-3">
              <Label>
                Price Range: ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
              </Label>
              <Slider
                value={[filters.priceRange[1]]}
                min={0}
                max={5000}
                step={50}
                onValueChange={(value) =>
                  setFilters({
                    ...filters,
                    priceRange: [filters.priceRange[0], value[0]],
                  })
                }
                className="text-primary"
              />
            </div>

          </CardContent>
        </Card>
      )}
    </div>
  )
}