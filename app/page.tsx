import HomepageHero from "@/components/sections/HomepageHero"
import OwnershipExperience from "@/components/sections/OwnershipExperience"
import { BoatCard } from "@/components/shared/BoatCard"
import { ArticleCard } from "@/components/shared/ArticleCard"
import { EnquiryForm } from "@/components/shared/EnquiryForm"

// ─── Font style objects ────────────────────────────────────────────────────────

const raleway: React.CSSProperties = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

const dmSans: React.CSSProperties = {
  fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

// ─── Placeholder data ──────────────────────────────────────────────────────────

const BOATS = [
  {
    brandName: "Candela",
    modelName: "C-8",
    imageUrl: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
    href: "/candela/c-8/",
    length: "8.5m",
    category: "Electric",
    isAvailableNow: true,
  },
  {
    brandName: "Y.Yachts",
    modelName: "Y8",
    imageUrl: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    href: "/yyachts/y8/",
    length: "8.5m",
    category: "Sailing",
  },
  {
    brandName: "Saffier Yachts",
    modelName: "SE 33 Life",
    imageUrl: "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?w=800&q=80",
    href: "/saffier-yachts/se-33-life/",
    length: "10.1m",
    category: "Sailing",
    isAvailableNow: true,
  },
  {
    brandName: "Shogun Yachts",
    modelName: "Shogun 50",
    imageUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
    href: "/shogun-yachts/shogun-50/",
    length: "15.2m",
    category: "Sailing",
  },
]

const ARTICLES = [
  {
    category: "Brand News",
    title: "Candela C-8 Now Available in Australia",
    excerpt:
      "The world's most efficient electric boat has arrived. Carbon Yachts is proud to offer the Candela C-8 to Australian and New Zealand buyers.",
    date: "April 2026",
    imageUrl: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
    href: "/journal/candela-c8-australia/",
  },
  {
    category: "Events",
    title: "Sydney Boat Show 2026 — See Us at Stand C14",
    excerpt:
      "Join us at the Sydney International Boat Show this August. We will have three vessels on display, including the Saffier SE 33 Life and the Y.Yachts Y8.",
    date: "March 2026",
    imageUrl: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    href: "/journal/sydney-boat-show-2026/",
  },
  {
    category: "Expert Review",
    title: "On the Water: Saffier SE 33 Life in Pittwater",
    excerpt:
      "We took the SE 33 Life out for a full day on Pittwater. Here is what we found — and why it has become one of our most-enquired models.",
    date: "February 2026",
    imageUrl: "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?w=800&q=80",
    href: "/journal/saffier-se33-life-review/",
  },
]

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* S1 — Hero */}
      <HomepageHero videoSrc="" posterSrc="" />

      {/* S2 — Featured Models */}
      <section className="bg-zinc-950 pt-1 pb-20 lg:pb-28">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">

          {/* Section header */}
          <div className="flex items-end justify-between pt-16 pb-10">
            <div className="flex flex-col gap-2">
              <p
                className="text-[10px] uppercase tracking-[5px] text-zinc-500"
                style={raleway}
              >
                The Fleet
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold uppercase tracking-[3px] text-white"
                style={raleway}
              >
                Featured Models
              </h2>
            </div>
            <a
              href="/fleet/"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] uppercase tracking-[4px] text-zinc-400 hover:text-white transition-colors duration-200 border-b border-zinc-700 hover:border-white pb-1"
              style={raleway}
            >
              View All Fleet →
            </a>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BOATS.map((boat) => (
              <BoatCard key={boat.modelName} {...boat} />
            ))}
          </div>

          {/* Mobile "View All" */}
          <div className="mt-10 text-center sm:hidden">
            <a
              href="/fleet/"
              className="text-[11px] uppercase tracking-[4px] text-zinc-400 hover:text-white transition-colors duration-200 border-b border-zinc-700 hover:border-white pb-1"
              style={raleway}
            >
              View All Fleet →
            </a>
          </div>
        </div>
      </section>

      {/* S4 — Ownership Experience */}
      <OwnershipExperience />

      {/* S5 — Latest News */}
      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">

          {/* Section header */}
          <div className="flex items-end justify-between mb-12">
            <div className="flex flex-col gap-2">
              <p
                className="text-[10px] uppercase tracking-[5px] text-zinc-500"
                style={raleway}
              >
                News &amp; Updates
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold uppercase tracking-[3px] text-white"
                style={raleway}
              >
                Latest
              </h2>
            </div>
            <a
              href="/journal/"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] uppercase tracking-[4px] text-zinc-400 hover:text-white transition-colors duration-200 border-b border-zinc-700 hover:border-white pb-1"
              style={raleway}
            >
              All Articles →
            </a>
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>

          {/* Mobile "All Articles" */}
          <div className="mt-10 text-center sm:hidden">
            <a
              href="/journal/"
              className="text-[11px] uppercase tracking-[4px] text-zinc-400 hover:text-white transition-colors duration-200 border-b border-zinc-700 hover:border-white pb-1"
              style={raleway}
            >
              All Articles →
            </a>
          </div>
        </div>
      </section>

      {/* S6 — Enquiry CTA */}
      <section className="bg-zinc-900 py-24">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — copy */}
            <div className="flex flex-col gap-4 lg:pt-2">
              <p
                className="text-[10px] uppercase tracking-[5px] text-zinc-500"
                style={raleway}
              >
                Get in Touch
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold uppercase tracking-[3px] text-white"
                style={raleway}
              >
                Start Your Journey
              </h2>
              <p
                className="text-sm font-light text-zinc-400 leading-relaxed max-w-sm"
                style={{ ...dmSans, lineHeight: "1.85" }}
              >
                Whether you are ready to order or just beginning to explore, our
                team is here to help you find the right vessel for your lifestyle
                and waters.
              </p>
            </div>

            {/* Right — form */}
            <EnquiryForm variant="embedded" title="Make an Enquiry" />
          </div>
        </div>
      </section>
    </>
  )
}
