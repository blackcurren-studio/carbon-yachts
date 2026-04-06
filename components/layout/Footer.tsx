"use client";

import { useState } from 'react'
import Link from 'next/link'
// Social icons as inline SVGs (lucide-react doesn't export Instagram/Youtube/Linkedin in this version)

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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.youtube.com/@carbonyachts" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="Carbon Yachts on YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/carbonyachts" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="Carbon Yachts on LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
