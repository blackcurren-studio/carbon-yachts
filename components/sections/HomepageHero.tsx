"use client"

import { useEffect, useState } from "react"

interface HeroSectionProps {
  videoSrc?: string
  posterSrc?: string
}

const raleway: React.CSSProperties = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

const dmSans: React.CSSProperties = {
  fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

const SECOND_LINES = ["BY DESIGN.", "BY PERFORMANCE.", "BY SERVICE.", "BY PASSION."]

// Transparent 1×1 SVG — used as a logo placeholder until real assets are provided
const LOGO_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"

const BRANDS = [
  { label: "SAFFIER YACHTS", href: "/saffier-yachts/", logo: LOGO_PLACEHOLDER },
  { label: "Y.YACHTS",       href: "/yyachts/",        logo: LOGO_PLACEHOLDER },
  { label: "SHOGUN YACHTS",  href: "/shogun-yachts/",  logo: LOGO_PLACEHOLDER },
  { label: "VIRTUE YACHTS",  href: "/virtue-yachts/",  logo: LOGO_PLACEHOLDER },
  { label: "SANTASEVERA",    href: "/santasevera/",    logo: LOGO_PLACEHOLDER },
  { label: "CANDELA",        href: "/candela/",        logo: LOGO_PLACEHOLDER },
]

export default function HomepageHero({
  videoSrc = "",
  posterSrc = "",
}: HeroSectionProps) {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % SECOND_LINES.length)
        setAnimating(false)
      }, 350)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-zinc-950 flex flex-col"
      aria-label="Carbon Yachts hero"
    >
      {/* ── Video Background ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc || undefined}
        poster={posterSrc || undefined}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* ── Gradient fallback ── */}
      {!videoSrc && !posterSrc && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black"
          aria-hidden="true"
        />
      )}

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* ── Content — left-aligned ── */}
      <div className="relative z-10 flex flex-1 flex-col items-start justify-center w-full px-10 lg:px-20 gap-4 py-32">

        {/* Tagline — above headline */}
        <p
          className="text-sm font-light text-zinc-400 max-w-md leading-relaxed"
          style={dmSans}
        >
          {"Europe's"} most progressive marine brands. Chosen for Australia and New Zealand.
        </p>

        {/* Main headline */}
        <h1
          className="font-bold uppercase text-white leading-tight text-4xl sm:text-5xl md:text-6xl"
          style={{
            ...raleway,
            letterSpacing: "4px",
          }}
        >
          <span className="block">AHEAD.</span>

          <span
            className="block overflow-hidden whitespace-nowrap"
            aria-live="polite"
            aria-atomic="true"
          >
            <span
              key={index}
              style={{
                display: "block",
                animation: animating
                  ? "slideOut 0.35s ease forwards"
                  : "slideIn 0.4s ease forwards",
              }}
            >
              {SECOND_LINES[index]}
            </span>
          </span>
        </h1>
      </div>

      {/* ── Brand Logo Bar ── */}
      <nav
        className="relative z-10 w-full bg-black/60 border-t border-zinc-800"
        aria-label="Brand navigation"
      >
        {/* Mobile: 2-column grid */}
        <ul className="grid grid-cols-2 sm:hidden divide-y divide-zinc-800">
          {BRANDS.map((brand) => (
            <li key={brand.label} className="odd:border-r odd:border-zinc-800">
              <a
                href={brand.href}
                className="flex flex-col items-center justify-center gap-2 py-5 px-3 text-zinc-400 hover:text-white transition-colors duration-200"
                style={raleway}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.label} logo`}
                  className="h-8 w-auto object-contain opacity-70"
                  aria-hidden={true}
                />
                <span className="text-[10px] tracking-widest uppercase">{brand.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop: single row */}
        <ul className="hidden sm:flex items-stretch divide-x divide-zinc-800">
          {BRANDS.map((brand) => (
            <li key={brand.label} className="flex-1">
              <a
                href={brand.href}
                className="flex flex-col items-center justify-center gap-2 py-5 px-4 text-zinc-400 hover:text-white transition-colors duration-200 w-full h-full"
                style={raleway}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.label} logo`}
                  className="h-8 w-auto object-contain opacity-70"
                  aria-hidden={true}
                />
                <span className="text-[11px] tracking-widest uppercase">{brand.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── CSS keyframes ── */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-100%); }
        }
      `}</style>
    </section>
  )
}
