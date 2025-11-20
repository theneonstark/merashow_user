"use client"

import RootLayout from "../layout"

export default function AboutPage() {
  return (
    <RootLayout>
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About HostMyShow</h1>

          <div className="space-y-8">
            <section className="card">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed">
                HostMyShow is your ultimate platform for discovering, managing, and attending events. We connect event
                organizers with enthusiastic audiences, making it easy to book tickets for concerts, movies, comedy
                shows, and more.
              </p>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Easy event discovery with smart filters</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Secure ticket booking and payment processing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Powerful tools for event organizers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Real-time analytics and insights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Dedicated admin panel for platform management</span>
                </li>
              </ul>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                With years of experience in the event industry, we understand what it takes to create memorable
                experiences. Our platform combines user-friendly design with robust features to serve everyone - from
                casual event-goers to professional organizers.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
    </RootLayout>
  )
}
