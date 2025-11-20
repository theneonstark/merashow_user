"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import RootLayout from "../layout"

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
          <h1 className="text-4xl font-bold mb-2 text-center">Get in Touch</h1>
          <p className="text-slate-400 text-center mb-12">We'd love to hear from you. Send us a message!</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="card flex items-start gap-4">
                <Mail className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-slate-400">support@hostmyshow.com</p>
                </div>
              </div>

              <div className="card flex items-start gap-4">
                <Phone className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-slate-400">+91 1800-SHOW-123</p>
                </div>
              </div>

              <div className="card flex items-start gap-4">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Office</h3>
                  <p className="text-slate-400">Mumbai, India</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="card space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-accent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-accent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows="5"
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-accent transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-accent hover:bg-accent-dark rounded-lg font-medium text-background transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>

              {submitted && (
                <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  Thanks for your message! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
    </RootLayout>
  )
}
