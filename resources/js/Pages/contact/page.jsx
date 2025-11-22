"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import RootLayout from "../layout"

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <RootLayout>
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Page Title */}
            <h1 className="text-4xl font-bold mb-2 text-center">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              We’d love to hear from you. Send us a message!
            </p>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Contact Info */}
              <div className="space-y-6">

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">support@hostmyshow.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">+91 1800-SHOW-123</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold">Office</h3>
                      <p className="text-muted-foreground">Mumbai, India</p>
                    </div>
                  </CardContent>
                </Card>

              </div>

              {/* Contact Form */}
              <Card>
                <CardContent className="space-y-5 p-6">

                  {/* Name */}
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label>Message</Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      rows="5"
                      required
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" className="w-full flex items-center gap-2" onClick={handleSubmit}>
                    <Send size={18} />
                    Send Message
                  </Button>

                  {/* Success Message */}
                  {submitted && (
                    <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-500 text-sm">
                      Thanks for your message! We'll get back to you soon.
                    </div>
                  )}

                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}
