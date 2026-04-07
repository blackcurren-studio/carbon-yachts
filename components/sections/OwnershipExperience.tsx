"use client"

import { useState } from "react"

const raleway = { fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }
const dmSans = { fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif" }

const pillars = [
  {
    number: "01",
    headline: "European Brands",
    body: "Handpicked from Europe's most progressive yards — chosen for design integrity, build quality, and performance credentials.",
  },
  {
    number: "02",
    headline: "ANZ Expertise",
    body: "Decades of experience in Australian and New Zealand waters. We know the conditions, the regulations, and the lifestyle.",
  },
  {
    number: "03",
    headline: "Vesseltec Service",
    body: "Our dedicated service division keeps your vessel performing at its best — long after the handover champagne is finished.",
  },
  {
    number: "04",
    headline: "Community, Not Transaction",
    body: "Ownership is the beginning of a relationship. Sea trials, owner events, and a network of fellow enthusiasts come with every vessel.",
  },
]

export default function OwnershipExperience() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-zinc-900 py-24 lg:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-start">
          {/* LEFT — Video */}
          <div>
            <div className="aspect-video bg-zinc-800 overflow-hidden relative">
              {playing ? (
                <iframe
                  src="https://www.youtube.com/embed/ZzFIqXMWz78?autoplay=1&rel=0&modestbranding=1"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                  title="Handover Experience"
                />
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="w-full h-full relative flex items-center justify-center group"
                  aria-label="Play Handover Experience video"
                >
                  {/* Play button */}
                  <svg
                    viewBox="0 0 64 64"
                    className="w-16 h-16 text-white transition-transform duration-200 group-hover:scale-110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="32" cy="32" r="31" stroke="currentColor" strokeWidth="1.5" />
                    <polygon
                      points="26,20 48,32 26,44"
                      fill="currentColor"
                    />
                  </svg>

                  {/* Label bottom-left */}
                  <span
                    className="absolute bottom-4 left-4 text-zinc-400 uppercase"
                    style={{ ...raleway, fontSize: "9px", letterSpacing: "4px" }}
                  >
                    Handover Experience
                  </span>
                </button>
              )}
            </div>

            {/* Caption */}
            <p
              className="mt-3 text-xs text-zinc-500 font-light leading-relaxed"
              style={dmSans}
            >
              From first contact to first sail — a look at what it means to take delivery of a Carbon Yachts vessel.
            </p>
          </div>

          {/* RIGHT — Heading, pillars, CTA */}
          <div>
            {/* Eyebrow */}
            <p
              className="text-zinc-500 uppercase mb-2"
              style={{ ...raleway, fontSize: "10px", letterSpacing: "5px" }}
            >
              The Ownership Experience
            </p>

            {/* Heading */}
            <h2
              className="text-white text-4xl md:text-5xl uppercase font-bold mb-2"
              style={{ ...raleway, letterSpacing: "3px" }}
            >
              Reserved for the Remarkable
            </h2>

            {/* Sub-copy */}
            <p
              className="text-zinc-400 text-sm font-light leading-relaxed mb-8"
              style={dmSans}
            >
              Owning a Carbon Yachts vessel is more than an acquisition. It is entry into a curated world of European
              craftsmanship, specialist local knowledge, and a community that shares your passion for the water.
            </p>

            {/* Pillars */}
            <div>
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.number}
                  className={`flex gap-5 py-6 ${index < pillars.length - 1 ? "border-b border-zinc-800" : ""}`}
                >
                  {/* Number */}
                  <span
                    className="text-zinc-600 w-6 shrink-0"
                    style={{ ...raleway, fontSize: "11px" }}
                  >
                    {pillar.number}
                  </span>

                  {/* Content */}
                  <div>
                    <p
                      className="text-white text-sm font-bold uppercase mb-1"
                      style={{ ...raleway, letterSpacing: "3px" }}
                    >
                      {pillar.headline}
                    </p>
                    <p
                      className="text-zinc-400 text-sm font-light leading-relaxed"
                      style={dmSans}
                    >
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/about-us/"
                className="group inline-flex items-center gap-3 border-b border-zinc-600 pb-1.5 hover:border-white transition-colors"
              >
                <span
                  className="text-white uppercase"
                  style={{ ...raleway, fontSize: "11px", letterSpacing: "4px" }}
                >
                  Our Story
                </span>
                <svg
                  viewBox="0 0 12 12"
                  className="w-3 h-3 text-white transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 6h10M7 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
