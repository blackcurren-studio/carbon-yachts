"use client";

// ============================================================
// CARBON YACHTS — HOMEPAGE HERO COMPONENT
// ============================================================
// Paste your V0 Homepage Hero component code here.
//
// Props:
// - videoSrc?: string (path to hero video, e.g. "/videos/hero.mp4")
// - posterSrc?: string (fallback image for video)
//
// Features:
// - Full-screen video background (autoplay, muted, loop)
// - Dark overlay (bg-black/50)
// - Eyebrow: "CARBON YACHTS"
// - Headline: "AHEAD. BY DESIGN." (wraps to 2 lines on mobile)
// - Sub-headline: "Europe's most progressive marine brands. Chosen for Australia and New Zealand."
// - CTAs: "EXPLORE THE FLEET" (primary) + "ENQUIRE NOW" (secondary)
// - Scroll indicator (animated line + chevron + "SCROLL" label)
// ============================================================

interface HomepageHeroProps {
  videoSrc?: string;
  posterSrc?: string;
}

export default function HomepageHero({ videoSrc, posterSrc }: HomepageHeroProps) {
  return (
    <section className="relative min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden">
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className="text-zinc-400 text-xs uppercase tracking-widest mb-6"
          style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          CARBON YACHTS
        </p>
        <h1
          className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-6"
          style={{
            fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          AHEAD.{" "}
          <br className="block sm:hidden" />
          BY DESIGN.
        </h1>
        <p
          className="text-zinc-300 text-base md:text-lg font-light max-w-lg mx-auto mb-10"
          style={{ fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          Europe&apos;s most progressive marine brands. Chosen for Australia and New Zealand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/brands"
            className="w-full max-w-xs sm:w-auto px-8 py-3 bg-white text-zinc-950 text-xs font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors"
            style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            EXPLORE THE FLEET
          </a>
          <a
            href="/contact"
            className="w-full max-w-xs sm:w-auto px-8 py-3 border border-white text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            ENQUIRE NOW
          </a>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <div className="w-px h-10 bg-zinc-500" />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-zinc-400">
          <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="text-zinc-400 text-xs uppercase tracking-widest"
          style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}
