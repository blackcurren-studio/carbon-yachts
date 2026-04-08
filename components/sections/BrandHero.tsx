"use client"

const raleway = { fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }
const dmSans = { fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif" }

interface BrandHeroProps {
  brandName: string
  logoUrl?: string
  tagline: string
  description: string
  backgroundMediaUrl: string
  mediaType: "video" | "image"
}

export function BrandHero({
  brandName,
  logoUrl,
  tagline,
  description,
  backgroundMediaUrl,
  mediaType,
}: BrandHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Background media */}
      <div className="absolute inset-0 z-0">
        {mediaType === "video" ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={backgroundMediaUrl}
            src={backgroundMediaUrl}
          />
        ) : (
          <img
            src={backgroundMediaUrl}
            alt={brandName}
            className="h-full w-full object-cover"
          />
        )}
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 text-center">
        {/* Logo or brand name fallback */}
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${brandName} logo`}
            className="object-contain"
            style={{ maxHeight: "80px" }}
          />
        ) : (
          <span
            className="text-white uppercase text-sm font-bold tracking-[0.25em]"
            style={raleway}
          >
            {brandName}
          </span>
        )}

        {/* Tagline */}
        <h1
          className="text-white uppercase font-bold tracking-[0.08em] text-balance"
          style={{
            ...raleway,
            fontSize: "clamp(2rem, 8vw, 4rem)",
            lineHeight: 1.1,
            maxWidth: "min(90%, 900px)",
          }}
        >
          {tagline}
        </h1>

        {/* Description */}
        <p
          className="text-zinc-300 font-light leading-relaxed text-pretty"
          style={{
            ...dmSans,
            fontSize: "clamp(0.95rem, 2vw, 1.125rem)",
            maxWidth: "min(90%, 36rem)",
          }}
        >
          {description}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span
          className="text-zinc-500 uppercase font-light tracking-widest"
          style={{ ...dmSans, fontSize: "0.6rem" }}
        >
          Scroll
        </span>
        <div className="scroll-line" />
      </div>

      <style>{`
        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.6), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.2; transform: scaleY(0.6); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
        }
      `}</style>
    </section>
  )
}
