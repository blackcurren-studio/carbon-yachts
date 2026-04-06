"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const raleway: React.CSSProperties = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

const FLEET_COLUMNS = [
  {
    brand: "SAFFIER YACHTS",
    href: "/saffier-yachts/",
    models: [
      { label: "Saffier SE 24 Lite",     href: "/saffier-yachts/se-24-lite/" },
      { label: "Saffier SE 27 Leisure",  href: "/saffier-yachts/se-27-leisure/" },
      { label: "Saffier SE 33 Life",     href: "/saffier-yachts/se-33-life/" },
      { label: "Saffier SE 37 Lounge",   href: "/saffier-yachts/se-37-lounge/" },
      { label: "Saffier SE 38 Leader",   href: "/saffier-yachts/se-38-leader/" },
      { label: "Saffier SL 46",          href: "/saffier-yachts/sl-46/" },
    ],
  },
  {
    brand: "YYACHTS",
    href: "/yyachts/",
    models: [
      { label: "YYachts Y6",           href: "/yyachts/y6/" },
      { label: "YYachts Y7",           href: "/yyachts/y7/" },
      { label: "YYachts Y8",           href: "/yyachts/y8/" },
      { label: "YYachts Y9",           href: "/yyachts/y9/" },
      { label: "YYachts Y Breeze 75",  href: "/yyachts/y-breeze-75/" },
      { label: "YYachts Y Custom",     href: "/yyachts/y-custom/" },
    ],
  },
  {
    brand: "SHOGUN YACHTS",
    href: "/shogun-yachts/",
    models: [
      { label: "Shogun 43", href: "/shogun-yachts/43/" },
      { label: "Shogun 50", href: "/shogun-yachts/50/" },
    ],
  },
  {
    brand: "VIRTUE YACHTS",
    href: "/virtue-yachts/",
    models: [
      { label: "Virtue V10 T-Top",    href: "/virtue-yachts/v10-t-top/" },
      { label: "Virtue V10 Cabin",    href: "/virtue-yachts/v10-cabin/" },
      { label: "Virtue V14 Hard Top", href: "/virtue-yachts/v14-hard-top/" },
    ],
  },
  {
    brand: "SANTASEVERA",
    href: "/santasevera/",
    models: [
      { label: "Santasevera 36", href: "/santasevera/36/" },
      { label: "Santasevera 42", href: "/santasevera/42/" },
      { label: "Santasevera 52", href: "/santasevera/52/" },
    ],
  },
  {
    brand: "CANDELA",
    href: "/candela/",
    models: [
      { label: "Candela C-8",  href: "/candela/c-8/" },
      { label: "Candela P-12", href: "/candela/p-12/" },
    ],
  },
]

const TENDERS_TOYS = [
  { label: "ASTenders",    href: "/astenders/" },
  { label: "Awake Boards", href: "/awake-boards/" },
  { label: "Lind Surf",    href: "/lind-surf/" },
]

const NAV_LINKS = [
  { label: "FLEET",   href: "/fleet/",   hasMega: true },
  { label: "EVENTS",  href: "/events/",  hasMega: false },
  { label: "NEWS",    href: "/news/",    hasMega: false },
  { label: "JOURNAL", href: "/journal/", hasMega: false },
  { label: "ABOUT",   href: "/about/",   hasMega: false },
  { label: "CONTACT", href: "/contact/", hasMega: false },
]

export default function NavBar() {
  const [visible, setVisible]       = useState(true)
  const [lastY, setLastY]           = useState(0)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [megaOpen, setMegaOpen]     = useState(false)
  // mobile: which brand accordion is open (by index, or -1 for none)
  const [openBrand, setOpenBrand]   = useState<number>(-1)
  // mobile: whether FLEET sub-section is expanded
  const [fleetOpen, setFleetOpen]   = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y < lastY || y < 60)
      setLastY(y)
      if (megaOpen) setMegaOpen(false)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastY, megaOpen])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    if (megaOpen) document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [megaOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const handleMobileClose = () => {
    setMenuOpen(false)
    setFleetOpen(false)
    setOpenBrand(-1)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
        style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
        aria-label="Site navigation"
      >
        <div className="flex items-center justify-between px-6 lg:px-10 py-4 bg-black/40 backdrop-blur-md border-b border-white/10">
          {/* Wordmark */}
          <a
            href="/"
            className="text-white text-sm uppercase tracking-widest shrink-0"
            style={raleway}
            aria-label="Carbon Yachts — home"
          >
            CARBON YACHTS
          </a>

          {/* Centre nav — desktop only */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
            ref={megaRef}
          >
            {NAV_LINKS.map((link) =>
              link.hasMega ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setMegaOpen((o) => !o)}
                    className="flex items-center gap-1 text-zinc-300 hover:text-white text-xs uppercase tracking-widest transition-colors duration-200 focus-visible:outline-none"
                    style={raleway}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      className="transition-transform duration-200"
                      style={{ transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-300 hover:text-white text-xs uppercase tracking-widest transition-colors duration-200"
                  style={raleway}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Right — Enquire + mobile hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/contact/"
              className="hidden md:inline-flex items-center border border-white text-white text-xs uppercase tracking-widest px-5 py-2 hover:bg-white/10 transition-colors duration-200"
              style={raleway}
            >
              ENQUIRE
            </a>
            <button
              className="md:hidden text-white focus-visible:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* ── FLEET Mega-menu — desktop ── */}
        {megaOpen && (
          <div
            className="hidden md:block w-full bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800"
            role="region"
            aria-label="Fleet mega-menu"
          >
            {/* Brand columns — 6 brands only */}
            <div className="max-w-screen-xl mx-auto px-10 pt-10 pb-8 grid grid-cols-6 gap-8">
              {FLEET_COLUMNS.map((col) => (
                <div key={col.brand}>
                  <a
                    href={col.href}
                    className="block text-white text-[10px] uppercase tracking-widest mb-4 hover:text-zinc-300 transition-colors duration-200 font-bold"
                    style={raleway}
                    onClick={() => setMegaOpen(false)}
                  >
                    {col.brand}
                  </a>
                  <ul className="flex flex-col gap-2">
                    {col.models.map((model) => (
                      <li key={model.label}>
                        <a
                          href={model.href}
                          className="text-zinc-400 hover:text-white text-xs transition-colors duration-200 leading-relaxed"
                          style={raleway}
                          onClick={() => setMegaOpen(false)}
                        >
                          {model.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Tenders | Toys — bottom bar */}
            <div className="border-t border-zinc-800 bg-zinc-900">
              <div className="max-w-screen-xl mx-auto px-10 py-4 flex items-center gap-8">
                {/* Label */}
                <span
                  className="text-zinc-500 text-[10px] uppercase tracking-widest shrink-0"
                  style={raleway}
                >
                  TENDERS | TOYS
                </span>
                {/* Inline links */}
                <div className="flex items-center gap-6 flex-1">
                  {TENDERS_TOYS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-zinc-400 hover:text-white text-xs uppercase tracking-widest transition-colors duration-200"
                      style={raleway}
                      onClick={() => setMegaOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                {/* View all */}
                <a
                  href="/tenders-toys/"
                  className="text-zinc-400 hover:text-white text-[10px] uppercase tracking-widest transition-colors duration-200 shrink-0"
                  style={raleway}
                  onClick={() => setMegaOpen(false)}
                >
                  VIEW ALL →
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── Mobile full-screen menu overlay ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-zinc-950 flex flex-col overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Close button */}
          <div className="flex justify-end px-6 py-5 border-b border-zinc-800">
            <button
              className="text-white focus-visible:outline-none"
              onClick={handleMobileClose}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Primary links */}
          <nav className="flex flex-col px-8 pt-8 gap-1" aria-label="Mobile primary navigation">
            {NAV_LINKS.map((link) =>
              link.hasMega ? (
                <div key={link.label}>
                  {/* FLEET accordion toggle */}
                  <button
                    onClick={() => {
                      setFleetOpen((o) => !o)
                      setOpenBrand(-1)
                    }}
                    className="flex items-center justify-between w-full text-white text-2xl uppercase tracking-widest py-3 hover:text-zinc-300 transition-colors duration-200 focus-visible:outline-none"
                    style={raleway}
                    aria-expanded={fleetOpen}
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className="transition-transform duration-200"
                      style={{ transform: fleetOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  {/* FLEET sub-accordion */}
                  {fleetOpen && (
                    <div className="flex flex-col border-l border-zinc-800 ml-2 pl-4 pb-2 gap-1">
                      {FLEET_COLUMNS.map((col, idx) => (
                        <div key={col.brand}>
                          {/* Brand toggle */}
                          <button
                            onClick={() => setOpenBrand(openBrand === idx ? -1 : idx)}
                            className="flex items-center justify-between w-full text-zinc-300 text-sm uppercase tracking-widest py-3 hover:text-white transition-colors duration-200 focus-visible:outline-none"
                            style={raleway}
                            aria-expanded={openBrand === idx}
                          >
                            {col.brand}
                            <ChevronDown
                              size={14}
                              className="transition-transform duration-200"
                              style={{ transform: openBrand === idx ? "rotate(180deg)" : "rotate(0deg)" }}
                            />
                          </button>

                          {/* Model list */}
                          {openBrand === idx && (
                            <ul className="flex flex-col gap-2 pl-3 pb-3">
                              {col.models.map((model) => (
                                <li key={model.label}>
                                  <a
                                    href={model.href}
                                    onClick={handleMobileClose}
                                    className="text-zinc-500 text-xs uppercase tracking-wider hover:text-white transition-colors duration-200"
                                    style={raleway}
                                  >
                                    {model.label}
                                  </a>
                                </li>
                              ))}
                              {/* Brand overview link */}
                              <li>
                                <a
                                  href={col.href}
                                  onClick={handleMobileClose}
                                  className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-white transition-colors duration-200"
                                  style={raleway}
                                >
                                  VIEW ALL {col.brand} →
                                </a>
                              </li>
                            </ul>
                          )}
                        </div>
                      ))}

                      {/* Tenders | Toys — flat section */}
                      <div className="pt-2 border-t border-zinc-800 mt-1">
                        <p
                          className="text-zinc-500 text-[10px] uppercase tracking-widest py-2"
                          style={raleway}
                        >
                          TENDERS | TOYS
                        </p>
                        <ul className="flex flex-col gap-2 pl-3">
                          {TENDERS_TOYS.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                onClick={handleMobileClose}
                                className="text-zinc-400 text-xs uppercase tracking-wider hover:text-white transition-colors duration-200"
                                style={raleway}
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleMobileClose}
                  className="text-white text-2xl uppercase tracking-widest py-3 hover:text-zinc-300 transition-colors duration-200 block"
                  style={raleway}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Enquire CTA */}
          <div className="px-8 pt-10 pb-12 mt-auto">
            <a
              href="/contact/"
              onClick={handleMobileClose}
              className="inline-flex items-center border border-white text-white text-xs uppercase tracking-widest px-6 py-3 hover:bg-white/10 transition-colors duration-200"
              style={raleway}
            >
              ENQUIRE
            </a>
          </div>
        </div>
      )}
    </>
  )
}
