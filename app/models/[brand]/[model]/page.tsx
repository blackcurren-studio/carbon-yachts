import type { Metadata } from "next"
import ModelHero from "@/components/sections/ModelHero"
import ModelHighlights from "@/components/sections/ModelHighlights"
import SpecTable from "@/components/sections/SpecTable"
import ConfiguratorCTA from "@/components/sections/ConfiguratorCTA"
import { ArticleCard } from "@/components/shared/ArticleCard"
import { EnquiryForm } from "@/components/shared/EnquiryForm"

// ---------------------------------------------------------------------------
// Placeholder data — replace with CMS / data-layer calls per model
// ---------------------------------------------------------------------------

const PLACEHOLDER_HERO = {
  brandName: "Brand Name",
  modelName: "Model Name",
  tagline: "A short, compelling tagline for this model.",
  heroImageSrc:
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop",
  heroImageAlt: "Yacht on open water",
}

const PLACEHOLDER_HIGHLIGHTS = [
  {
    headline: "Highlight One",
    body: "Describe the first key feature or design element of this model. Keep it concise and benefit-led.",
    imageSrc:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
    imageAlt: "Highlight one image",
  },
  {
    headline: "Highlight Two",
    body: "Describe the second key feature. Focus on what makes this model distinctive in its class.",
    imageSrc:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80",
    imageAlt: "Highlight two image",
  },
  {
    headline: "Highlight Three",
    body: "Describe the third key feature. Consider performance, comfort, or ownership benefits.",
    imageSrc:
      "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=1200&q=80",
    imageAlt: "Highlight three image",
  },
]

const PLACEHOLDER_SPECS = [
  {
    categoryName: "Dimensions",
    items: [
      { label: "Length Overall", value: "— m" },
      { label: "Beam", value: "— m" },
      { label: "Draft", value: "— m" },
    ],
  },
  {
    categoryName: "Displacement & Ballast",
    items: [
      { label: "Displacement", value: "— kg" },
      { label: "Ballast", value: "— kg" },
    ],
  },
]

const PLACEHOLDER_ARTICLES = [
  {
    category: "News",
    title: "Article title placeholder",
    excerpt:
      "A short excerpt introducing this article. Replace with CMS-sourced content related to this model.",
    date: "April 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    href: "/journal/",
  },
  {
    category: "Review",
    title: "Second article title placeholder",
    excerpt:
      "A short excerpt introducing this article. Replace with CMS-sourced content related to this model.",
    date: "March 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    href: "/journal/",
  },
  {
    category: "Event",
    title: "Third article title placeholder",
    excerpt:
      "A short excerpt introducing this article. Replace with CMS-sourced content related to this model.",
    date: "February 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
    href: "/journal/",
  },
]

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string; model: string }>
}): Promise<Metadata> {
  const { brand, model } = await params
  const brandLabel = brand
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
  const modelLabel = model
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")

  return {
    title: `${brandLabel} ${modelLabel} | Carbon Yachts`,
    description: `Explore the ${brandLabel} ${modelLabel} — available exclusively through Carbon Yachts in Australia and New Zealand. Specifications, highlights, and enquiry.`,
    openGraph: {
      title: `${brandLabel} ${modelLabel} | Carbon Yachts`,
      description: `Explore the ${brandLabel} ${modelLabel} — available exclusively through Carbon Yachts in Australia and New Zealand.`,
      url: `https://carbonyachts.com.au/models/${brand}/${model}`,
      siteName: "Carbon Yachts",
      locale: "en_AU",
      type: "website",
    },
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const raleway = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}
const dmSans = {
  fontFamily: "'DM Sans', system-ui, sans-serif",
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ brand: string; model: string }>
}) {
  const { model } = await params
  const modelLabel = model
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")

  return (
    <>
      {/* S1 + S2 — Hero image + overlaid text, S3 — Sticky anchor nav */}
      <ModelHero
        brandName={PLACEHOLDER_HERO.brandName}
        modelName={PLACEHOLDER_HERO.modelName}
        tagline={PLACEHOLDER_HERO.tagline}
        heroImageSrc={PLACEHOLDER_HERO.heroImageSrc}
        heroImageAlt={PLACEHOLDER_HERO.heroImageAlt}
      />

      {/* S4 — Highlights (alternating image / text panels) */}
      <div id="highlights">
        <ModelHighlights highlights={PLACEHOLDER_HIGHLIGHTS} />
      </div>

      {/* S5 — Gallery placeholder */}
      <section
        id="gallery"
        className="bg-zinc-950 py-24"
        aria-label="Gallery"
      >
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
          <p
            className="text-[10px] uppercase tracking-[5px] text-zinc-500 mb-4"
            style={raleway}
          >
            Gallery
          </p>
          <p className="text-zinc-600 text-sm" style={dmSans}>
            Gallery images — replace with CMS media.
          </p>
        </div>
      </section>

      {/* S6 — Technical Specifications */}
      <div id="specifications">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
          <SpecTable
            title="Technical Specifications"
            columns={2}
            specs={PLACEHOLDER_SPECS}
          />
        </div>
      </div>

      {/* S7 — Video placeholder */}
      <section
        id="video"
        className="bg-zinc-950 py-24"
        aria-label="Video"
      >
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
          <p
            className="text-[10px] uppercase tracking-[5px] text-zinc-500 mb-4"
            style={raleway}
          >
            Video
          </p>
          <p className="text-zinc-600 text-sm" style={dmSans}>
            Video embed — replace with CMS video URL.
          </p>
        </div>
      </section>

      {/* S8 — Configurator CTA */}
      <div id="configure">
        <ConfiguratorCTA
          modelName={modelLabel}
          requestAccessHref={`/configurator/request-access/?model=${model}`}
          signInHref="/configurator/sign-in/"
        />
      </div>

      {/* S9 — Related Articles */}
      <section className="bg-zinc-950 py-24" aria-label="Related Articles">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
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
                Related Articles
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {PLACEHOLDER_ARTICLES.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* S10 — Enquiry Form */}
      <section
        id="enquire"
        className="bg-zinc-900 py-24"
        aria-label="Enquire"
      >
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
                Enquire About This Model
              </h2>
              <p
                className="text-sm font-light text-zinc-400 leading-relaxed max-w-sm"
                style={{ ...dmSans, lineHeight: "1.85" }}
              >
                Whether you are ready to order or just beginning to explore,
                our team is here to help you find the right vessel for your
                lifestyle and waters.
              </p>
            </div>
            {/* Right — form */}
            <EnquiryForm
              variant="embedded"
              defaultModel={modelLabel}
              title="Make an Enquiry"
            />
          </div>
        </div>
      </section>
    </>
  )
}
