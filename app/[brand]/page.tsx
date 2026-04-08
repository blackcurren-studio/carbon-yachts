import { BrandHero } from "@/components/sections/BrandHero"
import { BrandModelNav } from "@/components/sections/BrandModelNav"
import { BrandStory } from "@/components/sections/BrandStory"
import { FleetShowcase } from "@/components/sections/FleetShowcase"
import ModelHighlights from "@/components/sections/ModelHighlights"
import { ArticleCard } from "@/components/shared/ArticleCard"
import { EnquiryForm } from "@/components/shared/EnquiryForm"

const raleway = { fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }
const dmSans = { fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif" }

// ─── Placeholder data — replace with CMS / data layer ────────────────────────

const BRAND_HERO = {
  brandName: "Saffier Yachts",
  tagline: "Sailing Refined to the Point It's Redefined.",
  description:
    "Dutch-built sailing yachts engineered for pure joy on the water. Exclusive to Carbon Yachts in Australia and New Zealand.",
  backgroundMediaUrl:
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop",
  mediaType: "image" as const,
}

const BRAND_NAV_MODELS = [
  { id: "fleet", name: "The Fleet" },
  { id: "story", name: "Our Story" },
  { id: "highlights", name: "Why Saffier" },
  { id: "journal", name: "Journal" },
  { id: "enquire", name: "Enquire" },
]

const BRAND_STORY = {
  eyebrow: "The Saffier Story",
  headline: "Designed for the Joy of Sailing",
  paragraphs: [
    "Founded in the Netherlands, Saffier Yachts has spent decades perfecting the art of the daysailer — boats that are effortless to sail, beautiful to look at, and genuinely joyful to own.",
    "Every Saffier is built to a single standard: it must make the act of sailing feel like the reward, not the effort. That philosophy runs through every hull form, every deck layout, and every detail below.",
    "Carbon Yachts is the exclusive dealer for Saffier in Australia and New Zealand, bringing this extraordinary range to the waters of the Pacific for the first time.",
  ],
  quote:
    "A Saffier is not a boat you sail to a destination. It is a destination in itself.",
  quoteAuthor: "Carbon Yachts",
  imageUrl:
    "https://images.unsplash.com/photo-1500514966906-fe245eea9344?q=80&w=2071&auto=format&fit=crop",
  imageAlt: "Saffier Yachts sailing on open water",
}

const FLEET_MODELS = [
  {
    modelName: "SE 24 Lite",
    imageUrl:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop",
    length: "7.3m",
    category: "Daysailer",
    href: "/models/saffier-yachts/se-24-lite/",
  },
  {
    modelName: "SE 33 Life",
    imageUrl:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop",
    length: "10.1m",
    category: "Cruiser / Racer",
    href: "/models/saffier-yachts/se-33-life/",
  },
  {
    modelName: "SE 37 Lounge",
    imageUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop",
    length: "11.3m",
    category: "Performance Cruiser",
    href: "/models/saffier-yachts/se-37-lounge/",
  },
]

const BRAND_HIGHLIGHTS = [
  {
    headline: "Dutch Precision Engineering",
    body: "Every Saffier is built in the Netherlands to exacting tolerances. The hull geometry is optimised in CFD before a single mould is cut, ensuring performance that is predictable, responsive, and deeply satisfying in all conditions.",
    imageSrc:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop",
    imageAlt: "Saffier hull detail",
  },
  {
    headline: "Flush Deck Simplicity",
    body: "Saffier's signature flush deck design removes clutter and creates a seamless, unobstructed cockpit. Lines are led aft and hidden below the deck surface, so the boat looks as clean at rest as it does at speed.",
    imageSrc:
      "https://images.unsplash.com/photo-1500514966906-fe245eea9344?q=80&w=2071&auto=format&fit=crop",
    imageAlt: "Saffier flush deck",
  },
]

const JOURNAL_ARTICLES = [
  {
    category: "Brand News",
    title: "Saffier SE 33 Life Arrives in Australia",
    excerpt:
      "The first SE 33 Life to reach Australian waters has arrived at our Pittwater showroom. We take an early look at what makes this boat so compelling.",
    date: "March 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop",
    href: "/journal/saffier-se-33-life-arrives-australia/",
  },
  {
    category: "Review",
    title: "On the Water: Saffier SE 24 Lite First Sail",
    excerpt:
      "We spent a morning on Sydney Harbour with the SE 24 Lite. Here is what we found — and why this small boat punches well above its size.",
    date: "February 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop",
    href: "/journal/saffier-se-24-lite-first-sail/",
  },
  {
    category: "Brand Story",
    title: "Why We Chose Saffier Yachts for ANZ",
    excerpt:
      "When we were looking for a daysailer to represent in Australia and New Zealand, Saffier was the only brand that met every criterion we had set.",
    date: "January 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop",
    href: "/journal/why-we-chose-saffier-yachts/",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BrandHubPage({
  params,
}: {
  params: { brand: string }
}) {
  // In production, use params.brand to fetch brand data from CMS
  const brandSlug = params.brand

  return (
    <>
      {/* S1 — Brand Hero */}
      <BrandHero
        brandName={BRAND_HERO.brandName}
        tagline={BRAND_HERO.tagline}
        description={BRAND_HERO.description}
        backgroundMediaUrl={BRAND_HERO.backgroundMediaUrl}
        mediaType={BRAND_HERO.mediaType}
      />

      {/* S2 — Sticky Model Nav (fades in after hero scrolls past) */}
      <BrandModelNav
        brandName={BRAND_HERO.brandName}
        models={BRAND_NAV_MODELS}
      />

      {/* S3 — Brand Story */}
      <div id="story">
        <BrandStory
          eyebrow={BRAND_STORY.eyebrow}
          headline={BRAND_STORY.headline}
          paragraphs={BRAND_STORY.paragraphs}
          quote={BRAND_STORY.quote}
          quoteAuthor={BRAND_STORY.quoteAuthor}
          imageUrl={BRAND_STORY.imageUrl}
          imageAlt={BRAND_STORY.imageAlt}
        />
      </div>

      {/* S4 — Fleet Showcase */}
      <div id="fleet">
        <FleetShowcase
          brandName={BRAND_HERO.brandName}
          eyebrow="The Range"
          title="The Fleet"
          description="Every Saffier is available to view at our Sydney showrooms. Contact us to arrange a private viewing or sea trial."
          models={FLEET_MODELS}
        />
      </div>

      {/* S5 — Key Differentiators (reused ModelHighlights, fed brand-level data) */}
      <div id="highlights">
        <ModelHighlights highlights={BRAND_HIGHLIGHTS} />
      </div>

      {/* S6 — From the Journal */}
      <section id="journal" className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
          {/* Section header */}
          <div className="flex items-end justify-between mb-12">
            <div className="flex flex-col gap-2">
              <p
                className="text-[10px] uppercase tracking-[5px] text-zinc-500"
                style={raleway}
              >
                Further Reading
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold uppercase tracking-[3px] text-white"
                style={raleway}
              >
                From the Journal
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
            {JOURNAL_ARTICLES.map((article) => (
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

      {/* S7 — Enquiry */}
      <section id="enquire" className="bg-zinc-900 py-24">
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
                Enquire About Saffier Yachts
              </h2>
              <p
                className="text-sm font-light text-zinc-400 leading-relaxed max-w-sm"
                style={{ ...dmSans, lineHeight: "1.85" }}
              >
                Whether you are ready to order or just beginning to explore,
                our specialist team is here to help you find the right Saffier
                for your lifestyle and waters.
              </p>
            </div>
            {/* Right — form */}
            <EnquiryForm
              variant="embedded"
              defaultModel="Saffier Yachts"
              title="Make an Enquiry"
            />
          </div>
        </div>
      </section>
    </>
  )
}
