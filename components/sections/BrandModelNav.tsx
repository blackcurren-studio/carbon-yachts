"use client"

import { useEffect, useRef, useState } from "react"

const raleway = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}
const dmSans = {
  fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

interface Model {
  name: string
  id: string
}

interface BrandModelNavProps {
  brandName: string
  models: Model[]
}

export function BrandModelNav({ brandName, models }: BrandModelNavProps) {
  const [visible, setVisible] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Fade in after scrolling past hero (scrollY > 500)
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track which section is active via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    models.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [models])

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      {/* Google Fonts preconnect + import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .bnav-scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .bnav-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* ── DESKTOP: sticky top bar (md and up) ── */}
      <nav
        aria-label="Brand navigation"
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-16 items-center px-8 border-b border-zinc-800/60 bg-zinc-950/95 backdrop-blur-md transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transform: visible ? "translateY(0)" : "translateY(-6px)",
        }}
      >
        {/* Left: Brand name */}
        <div className="flex-none w-48">
          <span
            className="text-white text-sm font-bold tracking-[3px] uppercase"
            style={raleway}
          >
            {brandName}
          </span>
        </div>

        {/* Center: model links */}
        <div className="flex-1 flex items-center justify-center gap-8">
          {models.map((model) => {
            const isActive = activeId === model.id
            return (
              <a
                key={model.id}
                href={`#${model.id}`}
                onClick={(e) => handleAnchor(e, model.id)}
                className="relative text-[11px] uppercase tracking-[2.5px] transition-colors duration-200 whitespace-nowrap group"
                style={{
                  ...raleway,
                  color: isActive ? "#ffffff" : "#a1a1aa",
                }}
              >
                {model.name}
                {/* Active indicator line */}
                <span
                  className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-white transition-opacity duration-200"
                  style={{ opacity: isActive ? 1 : 0 }}
                />
                {/* Hover indicator line */}
                <span className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            )
          })}
        </div>

        {/* Right: Enquire button */}
        <div className="flex-none w-48 flex justify-end">
          <a
            href="#enquire"
            onClick={(e) => handleAnchor(e, "enquire")}
            className="inline-flex items-center justify-center h-9 px-5 rounded-none border border-zinc-500 text-zinc-200 text-[11px] uppercase tracking-[2.5px] transition-all duration-200 hover:bg-white hover:text-zinc-950 hover:border-white"
            style={raleway}
          >
            Enquire
          </a>
        </div>
      </nav>

      {/* ── MOBILE: fixed bottom tab bar (below md) ── */}
      <nav
        aria-label="Brand navigation"
        className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 h-14 items-center border-t border-zinc-800/60 bg-zinc-950/95 backdrop-blur-md transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        {/* Scrollable model links */}
        <div
          ref={scrollRef}
          className="flex-1 flex items-center h-full overflow-x-auto bnav-scrollbar-hide"
          style={{ overflowX: "auto" }}
        >
          {models.map((model) => {
            const isActive = activeId === model.id
            return (
              <a
                key={model.id}
                href={`#${model.id}`}
                onClick={(e) => handleAnchor(e, model.id)}
                className="relative flex items-center h-full px-4 whitespace-nowrap text-[10px] uppercase tracking-[2px] transition-colors duration-200 flex-shrink-0"
                style={{
                  ...raleway,
                  color: isActive ? "#ffffff" : "#a1a1aa",
                }}
              >
                {model.name}
                {/* Active indicator top line */}
                <span
                  className="absolute top-0 left-2 right-2 h-[2px] bg-white transition-opacity duration-200"
                  style={{ opacity: isActive ? 1 : 0 }}
                />
              </a>
            )
          })}
        </div>

        {/* Fixed Enquire button — not inside the scroll area */}
        <div className="flex-none flex items-center h-full pr-3 pl-2 border-l border-zinc-800/60">
          <a
            href="#enquire"
            onClick={(e) => handleAnchor(e, "enquire")}
            className="inline-flex items-center justify-center h-8 px-4 border border-zinc-600 text-zinc-200 text-[10px] uppercase tracking-[2px] transition-all duration-200 active:bg-white active:text-zinc-950 active:border-white"
            style={raleway}
          >
            Enquire
          </a>
        </div>
      </nav>
    </>
  )
}
