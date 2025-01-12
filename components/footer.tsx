"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About Us</h4>
            <p className="text-sm text-muted-foreground">
              DK Tech Solutions provides professional computer repair and IT services with over 10 years of experience.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Services", "Support", "Service Locations", "Warranty", "Blogs", "Contact Us", "Brands We Deal"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-muted-foreground hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li> Shop no 14, Vijay Kiran Appt, opp Nilesh Super Market</li>
              <li>Nashik, Maharashtra 422002</li>
              <li>Phone: +91 93725 43762</li>
              <li>Email: dktechsolutions07@gmail.com</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Link key={index} href="https://www.instagram.com/dk_tech_solutions?igsh=MThzbm9vYmVtMGt6bw==" className="text-muted-foreground hover:text-primary">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © 2024 DK Tech Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

