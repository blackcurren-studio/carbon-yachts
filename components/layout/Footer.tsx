"use client";

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, Youtube, Linkedin } from 'lucide-react'

const fleetLinks = [
  { label: 'Saffier Yachts', href: '/saffier-yachts/' },
  { label: 'Y.Yachts', href: '/yyachts/' },
  { label: 'Shogun Yachts', href: '/shogun-yachts/' },
  { label: 'Virtue Yachts', href: '/virtue-yachts/' },
  { label: 'Santasevera', href: '/santasevera/' },
  { label: 'Candela', href: '/candela/' },
  { label: 'Tenders & Toys', href: '/fleet/tenders/' },
  { label: 'Available Stock', href: '/available-now/' },
]

const exploreLinks = [
  { label: 'About Us', href: '/about-us/' },
  { label: 'Journal & News', href: '/journal/' },
  { label: 'Expert Reviews', href: '/reviews/' },
  { label: 'Events', href: '/events/' },
  { label: 'Service & Support', href: '/service/' },
  { label: 'Contact', href: '/contact/' },
]

const offices = [
  {
    city: 'Sydney — Pittwater',
    address: '1856 Pittwater Road, Church Point NSW 2105',
  },
  {
    city: 'Sydney — Mosman',
    address: "Ferguson's Boatshed, 83 Parriwi Road, Mosman NSW 2088",
  },
  {
    city: 'Gold Coast',
    address: 'K05, 1 Boatworks Drive, Coomera QLD 4209',
  },
]

const bodyStyle = {
  fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: 300,
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">

      {/* TOP — Newsletter */}
      <div className="border-b border-zinc-800">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-sm">
            <h2
              className="text-2xl font-bold tracking-[4px] uppercase text-white mb-3"
              style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
            >
              JOIN THE FLEET
            </h2>
            <p className="text-zinc-400 text-sm leading-[1.8]" style={bodyStyle}>
              Subscribe for exclusive invitations, new model premieres, and editorial content.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md"
            aria-label="Newsletter signup"
          >
            {submitted ? (
              <p className="text-zinc-400 text-sm leading-[1.8] py-2" style={bodyStyle}>
                Thank you for subscribing.
              </p>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-transparent border border-zinc-700 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 rounded-none h-11 px-4 text-sm"
                  style={bodyStyle}
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="font-bold tracking-[4px] uppercase text-xs bg-white text-zinc-950 hover:bg-zinc-200 rounded-none h-11 px-6 shrink-0 transition-colors"
                  style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
                >
                  SUBSCRIBE
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* MIDDLE — Link directory */}
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Column 1: Brand & Contact */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-8" aria-label="Carbon Yachts home">
              <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <ellipse cx="20" cy="14" rx="19" ry="13" stroke="white" strokeWidth="1.5" />
                <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fill="white" fontSize="11" fontFamily="Raleway, Inter, Arial, sans-serif" fontWeight="700" letterSpacing="1">CY</text>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-white text-sm font-bold tracking-[6px] uppercase" style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>CARBON</span>
                <span className="text-zinc-300 text-[10px] font-semibold tracking-[5px] uppercase mt-0.5" style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>YACHTS</span>
              </div>
            </Link>

            <address className="not-italic flex flex-col gap-2" style={bodyStyle}>
              <a href="tel:+61299796612" className="text-zinc-400 text-sm leading-[1.8] hover:text-white transition-colors" style={bodyStyle}>
                (02) 9979 6612
              </a>
              <a href="mailto:info@carbonyachts.com.au" className="text-zinc-400 text-sm leading-[1.8] hover:text-white transition-colors" style={bodyStyle}>
                info@carbonyachts.com.au
              </a>
            </address>
          </div>

          {/* Column 2: The Fleet */}
          <div>
            <h3 className="text-sm font-semibold tracking-[4px] uppercase text-white mb-6" style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
              THE FLEET
            </h3>
            <ul className="flex flex-col gap-2.5">
              {fleetLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-zinc-400 text-sm leading-[1.8] hover:text-white transition-colors" style={bodyStyle}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h3 className="text-sm font-semibold tracking-[4px] uppercase text-white mb-6" style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
              EXPLORE
            </h3>
            <ul className="flex flex-col gap-2.5">
              {exploreLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-zinc-400 text-sm leading-[1.8] hover:text-white transition-colors" style={bodyStyle}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Offices */}
          <div>
            <h3 className="text-sm font-semibold tracking-[4px] uppercase text-white mb-6" style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
              OFFICES
            </h3>
            <div className="flex flex-col gap-4">
              {offices.map(({ city, address }) => (
                <div key={city}>
                  <p className="text-zinc-300 text-sm font-normal leading-[1.8]" style={{ ...bodyStyle, fontWeight: 400 }}>
                    {city}
                  </p>
                  <p className="text-zinc-500 text-sm leading-[1.8]" style={bodyStyle}>
                    {address}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-zinc-800 mt-6 pt-5">
              <p className="text-zinc-500 text-xs leading-[1.8] italic" style={bodyStyle}>
                Agents also available in Melbourne, Perth &amp; Auckland — contact us to connect.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM — Legal & Social */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs leading-[1.8]" style={bodyStyle}>
            &copy; 2026 Carbon Yachts. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="text-zinc-500 text-xs hover:text-white transition-colors" style={bodyStyle}>
              Privacy Policy
            </Link>
            <Link href="/terms/" className="text-zinc-500 text-xs hover:text-white transition-colors" style={bodyStyle}>
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/carbonyachts" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="Carbon Yachts on Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@carbonyachts" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="Carbon Yachts on YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/carbonyachts" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="Carbon Yachts on LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
