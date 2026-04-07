"use client"

import { useState, useEffect, useRef } from "react"

const raleway = { fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }
const dmSans  = { fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif" }

interface ModelHeroProps {
  brandName:    string
  modelName:    string
  tagline:      string
  heroImageSrc: string
  heroImageAlt: string
  sections?:    string[]
}

const DEFAULT_SECTIONS = ["Highlights", "Gallery", "Specifications", "Video", "Configure", "Enquire"]

export default function ModelHero({
  brandName,
  modelName,
  tagline,
  heroImageSrc = "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop",
  heroImageAlt = "Sailing yacht on open water",
  sections = DEFAULT_SECTIONS,
}: ModelHeroProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0].toLowerCase())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { threshold: 0.4 }
    )

    const observer = observerRef.current

    sections.forEach((section) => {
      const el = document.getElementById(section.toLowerCase())
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [sections])

  const handleNavClick = (section: string) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="w-full bg-zinc-950">
      {/* SECTION 1 & 2 — Hero Image with Overlaid Text */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
        <img
          src={heroImageSrc}
          alt={heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

        {/* Overlaid text content */}
        <div className="absolute bottom-0 left-0 p-6 md:p-12">
          {/* Brand name eyebrow */}
          <p
            className="mb-2 text-[10px] uppercase text-zinc-400"
            style={{ ...raleway, letterSpacing: "5px" }}
          >
            {brandName}
          </p>

          {/* Model name */}
          <h1
            className="mb-4 font-bold uppercase text-4xl md:text-6xl text-white"
            style={{ ...raleway, letterSpacing: "3px" }}
          >
            {modelName}
          </h1>

          {/* Tagline */}
          <p
            className="font-light text-zinc-300 text-base md:text-lg"
            style={{ ...dmSans }}
          >
            {tagline}
          </p>
        </div>
      </div>

      {/* SECTION 3 — Anchor Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full bg-zinc-900 border-b border-zinc-800">
        <div className="flex overflow-x-auto whitespace-nowrap px-4 md:px-12">
          {sections.map((section) => {
            const isActive = activeSection === section.toLowerCase()
            return (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`relative py-4 px-4 text-[10px] uppercase transition-colors duration-200 shrink-0 ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
                style={{ ...raleway, letterSpacing: "4px" }}
              >
                {section}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
                )}
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

// Demo usage for v0 preview
export function ModelHeroDemo() {
  return (
    <ModelHero
      brandName="Saffier Yachts"
      modelName="SE 33 Life"
      tagline="Sailing refined to the point it's redefined."
      heroImageSrc="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop"
      heroImageAlt="Saffier SE 33 Life sailing yacht"
    />
  )
}
