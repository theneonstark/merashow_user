"use client"

import RootLayout from "../layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <RootLayout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">

            {/* MAIN HEADING */}
            <h1 className="text-4xl font-bold mb-10 text-foreground">
              About <span className="text-primary">HostMyShow</span>
            </h1>

            <div className="space-y-10">

              {/* MISSION */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    HostMyShow is your ultimate platform for discovering, managing, and attending events.
                    We connect event organizers with enthusiastic audiences, making it easy to book tickets
                    for concerts, movies, comedy shows, and more.
                  </p>
                </CardContent>
              </Card>

              {/* WHAT WE OFFER */}
              <Card>
                <CardHeader>
                  <CardTitle>What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Easy event discovery with smart filters</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Secure ticket booking and payment processing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Powerful tools for event organizers</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Real-time analytics and insights</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Dedicated admin panel for platform management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* WHY CHOOSE US */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    With years of experience in the event industry, we understand what it takes to create
                    memorable experiences. Our platform combines user-friendly design with robust features
                    to serve everyone — from casual event-goers to professional organizers.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}