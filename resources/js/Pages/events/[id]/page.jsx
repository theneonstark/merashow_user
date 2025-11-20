"use client"

import { useState } from "react"
import { MapPin, Calendar, Clock, Users, Share2, Heart } from "lucide-react"
import { events } from "@/data/mock-events"
import BookingModal from "@/components/booking-modal"

export default function EventDetailPage({ params }) {
  const event = events.find((e) => e.id === params.id)
  const [showBooking, setShowBooking] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-400">Event not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="rounded-xl overflow-hidden mb-8 bg-slate-800">
              <img src={event.poster || "/placeholder.svg"} alt={event.name} className="w-full h-96 object-cover" />
            </div>

            <div className="card mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-accent text-sm font-medium">{event.category}</p>
                  <h1 className="text-4xl font-bold mt-2">{event.name}</h1>
                  <p className="text-xl text-slate-400 mt-2">{event.artist}</p>
                </div>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition"
                >
                  <Heart size={24} className={isWishlisted ? "fill-red-500 text-red-500" : "text-slate-300"} />
                </button>
              </div>

              <div className="space-y-4 border-t border-slate-700 pt-6">
                <div className="flex gap-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-accent" />
                    <div>
                      <p className="text-sm text-slate-400">Date</p>
                      <p className="font-medium">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-accent" />
                    <div>
                      <p className="text-sm text-slate-400">Time</p>
                      <p className="font-medium">{event.time}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-accent" />
                    <div>
                      <p className="text-sm text-slate-400">Venue</p>
                      <p className="font-medium">{event.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-accent" />
                    <div>
                      <p className="text-sm text-slate-400">Available</p>
                      <p className="font-medium">{event.availableSeats} seats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4">About this event</h2>
              <p className="text-slate-300 leading-relaxed mb-6">{event.description}</p>

              <div className="bg-slate-700/30 border border-slate-700 rounded-lg p-4 mb-6">
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-slate-400 mb-3">
                  {event.venue}, {event.city}
                </p>
                <div className="w-full h-48 bg-slate-800 rounded flex items-center justify-center text-slate-500">
                  [Google Maps would be embedded here]
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card sticky top-20 space-y-6">
              <div>
                <p className="text-slate-400 text-sm mb-1">Price per ticket</p>
                <p className="text-4xl font-bold text-accent">₹{event.price}</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm mb-3">Seats available: {event.availableSeats}</p>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-accent to-accent-secondary h-2 rounded-full"
                    style={{
                      width: `${((500 - event.availableSeats) / 500) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <button
                onClick={() => setShowBooking(true)}
                className="w-full py-3 bg-accent hover:bg-accent-dark rounded-lg font-bold text-background transition"
              >
                Book Tickets Now
              </button>

              <button className="w-full py-3 border border-slate-600 hover:bg-slate-700/30 rounded-lg font-medium transition flex items-center justify-center gap-2">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {showBooking && <BookingModal event={event} onClose={() => setShowBooking(false)} />}
    </div>
  )
}
