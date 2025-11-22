"use client"

import {
  Mail,
  Phone,
  MapPin,
  Users,
  Ticket,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">

      {/* TOP CTA BAR */}
      <div className="bg-muted py-4 px-4 border-b border-border">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-4 text-foreground">
            <Ticket size={22} className="text-primary" />
            <h3 className="font-semibold text-lg">List Your Show</h3>

            <p className="text-muted-foreground hidden md:block">
              Got a show, event or activity? Partner with us & get listed on MERA SHOW.
            </p>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-white">
            Contact Today!
          </Button>
        </div>
      </div>

      {/* ICON SERVICES ROW */}
      <div className="bg-muted py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div className="flex flex-col items-center gap-3">
            <Users size={32} className="text-primary" />
            <p className="text-muted-foreground text-sm">24/7 CUSTOMER CARE</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Ticket size={32} className="text-primary" />
            <p className="text-muted-foreground text-sm">RESEND BOOKING CONFIRMATION</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Mail size={32} className="text-primary" />
            <p className="text-muted-foreground text-sm">SUBSCRIBE TO NEWSLETTER</p>
          </div>

        </div>
      </div>

      {/* SEPARATOR WITH LOGO */}
      <div className="relative my-6">
        <div className="border-t border-border w-full"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-card px-4">
          <img
            src="/merahost/logos/1763619275776.png"
            alt="MERA SHOW"
            className="h-10"
          />
        </div>
      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div className="container mx-auto px-4 pb-10 text-center">

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-6">
          <Facebook size={22} className="text-muted-foreground hover:text-primary cursor-pointer" />
          <Twitter size={22} className="text-muted-foreground hover:text-primary cursor-pointer" />
          <Instagram size={22} className="text-muted-foreground hover:text-primary cursor-pointer" />
          <Youtube size={22} className="text-muted-foreground hover:text-primary cursor-pointer" />
          <Linkedin size={22} className="text-muted-foreground hover:text-primary cursor-pointer" />
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
          Copyright 2025 © MERA SHOW. All Rights Reserved.
          The content and images used on this site are copyright protected.
          Unauthorized use is prohibited and punishable by law.
        </p>

      </div>
    </footer>
  )
}