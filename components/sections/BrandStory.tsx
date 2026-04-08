"use client"

import { useEffect, useRef, useState } from "react"

const raleway = { fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }
const dmSans = { fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif" }

interface BrandStoryProps {
  eyebrow: string
  headline: string
  paragraphs: string[]
  quote?: string
  quoteAuthor?: string
  imageUrl: string
  imageAlt: string
}

export function BrandStory({
  eyebrow,
  headline,
  paragraphs,
  quote,
  quoteAuthor,
  imageUrl,
  imageAlt,
}: BrandStoryProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-zinc-950 w-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Column */}
        <div className="w-full lg:w-1/2 aspect-video lg:aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Column */}
        <div className="w-full lg:w-1/2 flex items-center px-10 lg:px-16 py-12 lg:py-20">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p
              className="text-[10px] uppercase tracking-[5px] text-zinc-500 mb-2"
              style={raleway}
            >
              {eyebrow}
            </p>

            {/* Headline */}
            <h2
              className="font-bold uppercase tracking-[2px] text-2xl md:text-3xl text-white mb-4 text-balance"
              style={raleway}
            >
              {headline}
            </h2>

            {/* Body Paragraphs */}
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="font-light text-zinc-400 leading-relaxed text-sm md:text-base mb-6"
                style={dmSans}
              >
                {para}
              </p>
            ))}

            {/* Pull Quote */}
            {quote && (
              <blockquote className="border-l border-zinc-700 pl-4 mt-8">
                <p
                  className="text-zinc-300 text-sm md:text-base leading-relaxed"
                  style={{ ...dmSans, fontStyle: "italic" }}
                >
                  &ldquo;{quote}&rdquo;
                </p>
                {quoteAuthor && (
                  <cite
                    className="not-italic uppercase text-[10px] tracking-[3px] text-zinc-500 mt-2 block"
                    style={raleway}
                  >
                    — {quoteAuthor}
                  </cite>
                )}
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
