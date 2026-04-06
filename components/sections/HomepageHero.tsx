"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

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

/*
  Each brand card has:
  - imageUrl: a representative boat/lifestyle shot (replace with real brand imagery)
  - logo: the brand logo SVG/PNG (replace with real assets)
  - label: brand name shown as fallback text
  - tagline: one-line brand descriptor — the "world" the brand represents
  - href: link to the brand page
*/
const BRANDS = [
  {
    label: "SAFFIER YACHTS",
    tagline: "Dutch precision sailing",
    href: "/saffier-yachts/",
    logo: LOGO_PLACEHOLDER,
    imageUrl: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80",
  },
  {
    label: "Y.YACHTS",
    tagline: "Carbon performance yachts",
    href: "/yyachts/",
    logo: LOGO_PLACEHOLDER,
    imageUrl: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&q=80",
  },
  {
    label: "SHOGUN YACHTS",
    tagline: "Blue water cruising",
    href: "/shogun-yachts/",
    logo: LOGO_PLACEHOLDER,
    imageUrl: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=600&q=80",
  },
  {
    label: "CANDELA",
    tagline: "Electric hydrofoil",
    href: "/candela/",
    logo: LOGO_PLACEHOLDER,
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
  },
  {
    label: "VIRTUE YACHTS",
    tagline: "Performance cruising",
    href: "/virtue-yachts/",
    logo: LOGO_PLACEHOLDER,
    imageUrl: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&q=80",
  },
  {
    label: "SANTASEVERA",
    tagline: "Italian craftsmanship",
    href: "/santasevera/",
    logo: LOGO_PLACEHOLDER,
    imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=80",
  },
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

      {/* ── Gradient fallback (no video) ── */}
      {!videoSrc && !posterSrc && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black"
          aria-hidden="true"
        />
      )}

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/*
        ── Bottom gradient ──
        Fades the video into the brand bar so the transition feels
        organic rather than a hard cut. Matches bg-zinc-950 of the bar.
      */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Hero copy — left-aligned, vertically centred ── */}
      <div className="relative z-10 flex flex-1 flex-col items-start justify-center w-full px-10 lg:px-20 gap-4 pb-56 pt-32">

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

      {/*
        ── Brand Bar — anchored to the base of the hero ──

        Design intent (high-end exclusive dealer, not broker):
        - Each brand gets a cropped boat image — not just a logo row
        - Logo sits centred over a subtle gradient at the bottom of the image
        - On hover: image brightens, tagline fades in, border highlights
        - The bar shares bg-zinc-950 with the FeaturedModels section below,
          creating a seamless visual continuation rather than a hard section break
        - On mobile: horizontal scroll (snap) so all brands are accessible
          without stacking into a grid that would feel like a catalogue
      */}
      <nav
        className="relative z-10 w-full bg-zinc-950 border-t border-zinc-800/60"
        aria-label="Brand navigation"
      >
        {/* ── Desktop: equal-width columns ── */}
        <ul className="hidden sm:flex items-stretch divide-x divide-zinc-800/60">
          {BRANDS.map((brand) => (
            <li key={brand.label} className="flex-1 min-w-0">
              <a
                href={brand.href}
                className="group relative flex flex-col overflow-hidden w-full"
                aria-label={`${brand.label} — ${brand.tagline}`}
              >
                {/* Brand image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={brand.imageUrl}
                    alt={`${brand.label} boat`}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-75 brightness-50"
                    sizes="(max-width: 1280px) 20vw, 16vw"
                  />

                  {/* Gradient — bottom of image, behind logo */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Logo — centred over gradient */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 px-3 gap-2">
                    <img
                      src={brand.logo}
                      alt={`${brand.label} logo`}
                      className="h-7 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    />
                    <span
                      className="text-[9px] font-medium uppercase tracking-[3px] text-zinc-400 group-hover:text-white transition-colors duration-300 text-center leading-tight"
                      style={raleway}
                    >
                      {brand.label}
                    </span>

                    {/* Tagline — hidden by default, fades in on hover */}
                    <span
                      className="text-[9px] font-light text-zinc-500 group-hover:text-zinc-300 transition-all duration-300 opacity-0 group-hover:opacity-100 text-center leading-tight"
                      style={dmSans}
                    >
                      {brand.tagline}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* ── Mobile: horizontal scroll with snap ── */}
        <ul
          className="flex sm:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none divide-x divide-zinc-800/60"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {BRANDS.map((brand) => (
            <li key={brand.label} className="snap-start flex-shrink-0 w-[45vw]">
              <a
                href={brand.href}
                className="group relative flex flex-col overflow-hidden w-full"
                aria-label={`${brand.label} — ${brand.tagline}`}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={brand.imageUrl}
                    alt={`${brand.label} boat`}
                    fill
                    className="object-cover brightness-50"
                    sizes="45vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-3 px-2 gap-1.5">
                    <img
                      src={brand.logo}
                      alt={`${brand.label} logo`}
                      className="h-6 w-auto object-contain opacity-80"
                      aria-hidden="true"
                    />
                    <span
                      className="text-[9px] font-medium uppercase tracking-[3px] text-zinc-400 text-center leading-tight"
                      style={raleway}
                    >
                      {brand.label}
                    </span>
                  </div>
                </div>
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
        .scrollbar-none {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
