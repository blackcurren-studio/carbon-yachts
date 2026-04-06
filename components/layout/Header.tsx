'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, ChevronDown, ArrowRight } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const fleetBrands = [
  {
    id: 'saffier',
    brand: 'SAFFIER YACHTS',
    eyebrow: 'SAILING',
    href: '/saffier-yachts/',
    models: [
      { label: 'Saffier SE 24 Lite', href: '/saffier-yachts/se-24-lite/' },
      { label: 'Saffier SE 28 Leopard', href: '/saffier-yachts/se-28-leopard/' },
      { label: 'Saffier SE 33 Life', href: '/saffier-yachts/se-33-life/' },
      { label: 'Saffier SE 37 Lounge', href: '/saffier-yachts/se-37-lounge/' },
      { label: 'Saffier SE 38 Leader', href: '/saffier-yachts/se-38-leader/' },
      { label: 'Saffier SL 46', href: '/saffier-yachts/sl-46/' },
    ],
  },
  {
    id: 'yyachts',
    brand: 'Y.YACHTS',
    eyebrow: 'CARBON SAILING',
    href: '/yyachts/',
    models: [
      { label: 'YYachts Y6', href: '/yyachts/y6/' },
      { label: 'YYachts Y7', href: '/yyachts/y7/' },
      { label: 'YYachts Y8', href: '/yyachts/y8/' },
      { label: 'YYachts Y9', href: '/yyachts/y9/' },
      { label: 'YYachts Y Breeze 75', href: '/yyachts/y-breeze-75/' },
      { label: 'YYachts Y Custom', href: '/yyachts/y-custom/' },
    ],
  },
  {
    id: 'shogun',
    brand: 'SHOGUN YACHTS',
    eyebrow: 'PERFORMANCE',
    href: '/shogun-yachts/',
    models: [
      { label: 'Shogun 43', href: '/shogun-yachts/43/' },
      { label: 'Shogun 50', href: '/shogun-yachts/50/' },
    ],
  },
  {
    id: 'virtue',
    brand: 'VIRTUE YACHTS',
    eyebrow: 'MOTOR',
    href: '/virtue-yachts/',
    models: [
      { label: 'Virtue V10 T-Top', href: '/virtue-yachts/v10-t-top/' },
      { label: 'Virtue V10 Cabin', href: '/virtue-yachts/v10-cabin/' },
      { label: 'Virtue V14 Hard Top', href: '/virtue-yachts/v14-hard-top/' },
    ],
  },
  {
    id: 'santasevera',
    brand: 'SANTASEVERA',
    eyebrow: 'MOTOR',
    href: '/santasevera/',
    models: [
      { label: 'Santasevera 36', href: '/santasevera/36/' },
      { label: 'Santasevera 42', href: '/santasevera/42/' },
      { label: 'Santasevera 52', href: '/santasevera/52/' },
    ],
  },
  {
    id: 'candela',
    brand: 'CANDELA',
    eyebrow: 'ELECTRIC',
    href: '/candela/',
    models: [
      { label: 'Candela C-8', href: '/candela/c-8/' },
      { label: 'Candela P-12', href: '/candela/p-12/' },
    ],
  },
]

const navLinkClass =
  'font-display text-sm font-semibold tracking-[5px] uppercase text-white transition-opacity hover:opacity-70'

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false)
  const [activeBrand, setActiveBrand] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const megaMenuRef = useRef<HTMLDivElement>(null)
  const fleetTriggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(e.target as Node) &&
        fleetTriggerRef.current &&
        !fleetTriggerRef.current.contains(e.target as Node)
      ) {
        setActiveMenu(false)
        setActiveBrand(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-zinc-950 border-b border-zinc-800">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 flex items-center justify-between h-20">

          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <ellipse cx="20" cy="14" rx="19" ry="13" stroke="white" strokeWidth="1.5" />
              <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fill="white" fontSize="11" fontFamily="var(--font-raleway), 'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="700" letterSpacing="1">CY</text>
            </svg>
            <div className="flex flex-col leading-none font-display">
              <span className="text-white text-sm font-bold tracking-[6px] uppercase">CARBON</span>
              <span className="text-zinc-300 text-[10px] font-semibold tracking-[5px] uppercase mt-0.5">YACHTS</span>
            </div>
          </Link>

          {/* CENTRE: Primary nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary navigation">
            <button
              ref={fleetTriggerRef}
              className={`${navLinkClass} flex items-center gap-1 cursor-pointer`}
              onMouseEnter={() => setActiveMenu(true)}
              onClick={() => setActiveMenu((o) => !o)}
              aria-expanded={activeMenu}
              aria-haspopup="true"
            >
              FLEET
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu ? 'rotate-180' : ''}`} />
            </button>
            {[
              { label: 'AVAILABLE NOW', href: '/available-now/' },
              { label: 'ABOUT', href: '/about-us/' },
              { label: 'CONTACT', href: '/contact/' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className={navLinkClass}>{label}</Link>
            ))}
          </nav>

          {/* RIGHT: CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contact/" className="hidden lg:inline-flex items-center font-display text-xs font-bold tracking-[4px] uppercase text-white border border-white px-5 py-2.5 transition-colors duration-200 hover:bg-white hover:text-zinc-950">
              ENQUIRE NOW
            </Link>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden text-white p-1" aria-label="Open navigation menu">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-950 border-zinc-800 w-80 p-0 overflow-y-auto">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation links and fleet brands</SheetDescription>
                <div className="flex flex-col h-full py-8 px-6">
                  <nav className="flex flex-col gap-0 border-t border-zinc-800" aria-label="Mobile navigation">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="fleet" className="border-b border-zinc-800">
                        <AccordionTrigger className="font-display text-sm font-semibold tracking-[5px] uppercase text-white py-4 hover:no-underline hover:opacity-70 [&>svg]:text-white">
                          FLEET
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                          <div className="flex flex-col gap-6">
                            {fleetBrands.map((b) => (
                              <div key={b.id}>
                                <p className="font-display text-xs font-semibold tracking-[2px] uppercase text-white mb-1">{b.brand}</p>
                                <p className="font-display text-[10px] tracking-[5px] uppercase text-zinc-500 mb-3">{b.eyebrow}</p>
                                <ul className="flex flex-col gap-1.5">
                                  {b.models.map((m) => (
                                    <li key={m.label}>
                                      <Link href={m.href} onClick={() => setMobileOpen(false)} className="text-sm text-zinc-400 hover:text-white transition-colors" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                                        {m.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    {[
                      { label: 'AVAILABLE NOW', href: '/available-now/' },
                      { label: 'ABOUT', href: '/about-us/' },
                      { label: 'CONTACT', href: '/contact/' },
                    ].map(({ label, href }) => (
                      <Link key={label} href={href} onClick={() => setMobileOpen(false)} className="font-display text-sm font-semibold tracking-[5px] uppercase text-white py-4 border-b border-zinc-800 transition-opacity hover:opacity-70">
                        {label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pt-8">
                    <Link href="/contact/" onClick={() => setMobileOpen(false)} className="block w-full text-center font-display text-xs font-bold tracking-[4px] uppercase text-white border border-white px-5 py-3 transition-colors duration-200 hover:bg-white hover:text-zinc-950">
                      ENQUIRE NOW
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* MEGA-MENU (desktop) */}
        {activeMenu && (
          <div
            ref={megaMenuRef}
            className="hidden lg:block absolute left-0 w-full bg-zinc-950 border-t border-zinc-800 shadow-2xl z-40"
            onMouseEnter={() => setActiveMenu(true)}
            onMouseLeave={() => { setActiveMenu(false); setActiveBrand(null) }}
          >
            <div className="absolute -top-2 left-0 w-full h-2" aria-hidden="true" />
            <div className="mx-auto max-w-screen-2xl px-10">
              <div className="grid grid-cols-6">
                {fleetBrands.map((b, i) => (
                  <div key={b.id} className={`flex flex-col py-8 px-8 cursor-default ${i < fleetBrands.length - 1 ? 'border-r border-zinc-800' : ''}`}>
                    <Link href={b.href} className="font-display text-[11px] font-semibold tracking-[3px] uppercase whitespace-nowrap mb-2 text-white hover:opacity-70 transition-opacity">
                      {b.brand}
                    </Link>
                    <p className="font-display text-[10px] font-medium tracking-[4px] uppercase text-zinc-600 whitespace-nowrap mb-4">{b.eyebrow}</p>
                    <ul className="flex flex-col gap-1.5">
                      {b.models.map((m) => (
                        <li key={m.label}>
                          <Link href={m.href} className="text-sm text-zinc-400 hover:text-white transition-colors leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                            {m.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-zinc-800 py-5">
                <div className="flex items-center gap-6">
                  <span className="font-display text-xs tracking-[5px] uppercase text-zinc-500">TENDERS &amp; TOYS</span>
                  {[
                    { label: 'AWAKE BOARDS', href: '/fleet/tenders/awake-boards/' },
                    { label: 'AS TENDERS', href: '/fleet/tenders/as-tenders/' },
                    { label: 'LIND SURF', href: '/fleet/tenders/lind-surf/' },
                  ].map(({ label, href }) => (
                    <Link key={label} href={href} className="font-display text-xs font-normal tracking-[3px] uppercase text-zinc-400 hover:text-white transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
                <Link href="/available-now/" className="font-display text-xs font-semibold tracking-[4px] uppercase text-white flex items-center gap-2 hover:opacity-70 transition-opacity">
                  VIEW AVAILABLE STOCK
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
