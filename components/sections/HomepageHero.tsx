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

const SECOND_LINES = [
  "BY DESIGN.",
  "BY INNOVATION.",
  "BY PASSION.",
  "BY PERFORMANCE.",
  "BY CONVICTION.",
  "BY NATURE.",
]

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

// Animation phase: "idle" → "out" → swap text → "in" → "idle"
type Phase = "idle" | "out" | "in"

export default function HomepageHero({
  videoSrc = "",
  posterSrc = "",
}: HeroSectionProps) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>("idle")

  useEffect(() => {
    const interval = setInterval(() => {
      // Phase 1: slide current line out upward
      setPhase("out")
      setTimeout(() => {
        // Phase 2: swap text while offscreen
        setIndex((prev) => (prev + 1) % SECOND_LINES.length)
        setPhase("in")
        // Phase 3: slide new line up from below into position
        setTimeout(() => {
          setPhase("idle")
        }, 400)
      }, 380)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const lineTransform =
    phase === "out"
      ? "translateY(-110%)"
      : phase === "in"
      ? "translateY(0%)"
      : "translateY(0%)"

  const lineInitialTransform = phase === "in" ? "translateY(110%)" : undefined

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      aria-label="Carbon Yachts hero"
    >
      {/* ── Video Background ── */}
      {videoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          poster={posterSrc || undefined}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      )}

      {/* ── Fallback background — deep navy radial gradient ── */}
      {!videoSrc && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 60% 40%, #0f1a2e 0%, #080c14 50%, #020408 100%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* ── Poster overlay when video present ── */}
      {videoSrc && posterSrc && (
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${posterSrc})`, backgroundSize: "cover" }}
          aria-hidden="true"
        />
      )}

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* ── Content — left-aligned ── */}
      <div className="relative z-10 flex flex-1 flex-col items-start justify-center w-full px-10 lg:px-20 gap-5 py-32">

        {/* Subhead — above headline */}
        <p
          className="text-[13px] uppercase tracking-[3px] font-light text-zinc-400"
          style={dmSans}
        >
          {"Europe's"} most progressive marine brands. Chosen for Australia and New Zealand.
        </p>

        {/* Main headline */}
        <h1
          className="uppercase text-white leading-tight"
          style={{
            ...raleway,
            fontWeight: 900,
            letterSpacing: "3px",
            fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
          }}
        >
          <span className="block">AHEAD.</span>

          {/* Animated second line — split-flap style */}
          <span
            className="block whitespace-nowrap"
            style={{ height: "1.05em", overflow: "hidden" }}
            aria-live="polite"
            aria-atomic="true"
          >
            <span
              key={index}
              style={{
                display: "block",
                transform: lineTransform,
                ...(phase === "in" ? { transform: "translateY(0%)", animationName: "none" } : {}),
                transition:
                  phase === "out"
                    ? "transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)"
                    : phase === "in"
                    ? "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    : "none",
              }}
            >
              {SECOND_LINES[index]}
            </span>
          </span>
        </h1>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mt-2">
          <a
            href="/fleet/"
            className="border border-white text-white px-7 py-3 text-[11px] uppercase tracking-[3px] transition-colors duration-200 hover:bg-white hover:text-zinc-950"
            style={raleway}
          >
            EXPLORE THE FLEET
          </a>
          <a
            href="/contact/"
            className="text-zinc-300 text-[11px] uppercase tracking-[3px] py-3 transition-colors duration-200 hover:text-white"
            style={raleway}
          >
            SPEAK WITH A SPECIALIST →
          </a>
        </div>
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
    </section>
  )
}
