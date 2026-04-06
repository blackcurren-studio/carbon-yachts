import HomepageHero from "@/components/sections/HomepageHero";
import { BoatCard } from "@/components/shared/BoatCard";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { EnquiryForm } from "@/components/shared/EnquiryForm";

// ─── Demo data ────────────────────────────────────────────────────────────────

const demoBoats = [
  {
    brandName: "Saffier Yachts",
    modelName: "SE 37 Lounge",
    imageUrl: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    href: "/saffier-yachts/se-37-lounge/",
    length: "11.3m",
    category: "Sailing",
    variants: 3,
    isAvailableNow: true,
  },
  {
    brandName: "Y.Yachts",
    modelName: "Y9",
    imageUrl: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
    href: "/yyachts/y9/",
    length: "9.0m",
    category: "Carbon Sailing",
  },
  {
    brandName: "Candela",
    modelName: "C-8",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    href: "/candela/c-8/",
    length: "8.5m",
    category: "Electric",
  },
];

const demoArticles = [
  {
    category: "Brand News",
    title: "Saffier SE 38 Leader Arrives in Australia",
    excerpt: "The highly anticipated SE 38 Leader has landed, bringing Saffier's flagship cruiser-racer to Australian waters for the first time.",
    date: "March 2026",
    imageUrl: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&q=80",
    href: "/news/saffier-se-38-leader-arrives/",
  },
  {
    category: "Events",
    title: "Carbon Yachts at Sydney International Boat Show 2026",
    excerpt: "Join us at the Sydney International Boat Show where we'll be showcasing the full Carbon Yachts fleet across three berths.",
    date: "February 2026",
    imageUrl: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80",
    href: "/news/sibs-2026/",
  },
  {
    category: "Candela",
    title: "The Future of Boating: Candela P-12 Ferry Enters Service",
    excerpt: "Candela's revolutionary electric hydrofoil ferry begins commercial service, cutting energy use by 80% compared to conventional vessels.",
    date: "January 2026",
    imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80",
    href: "/news/candela-p-12-ferry/",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HomepageHero videoSrc="/videos/hero.mp4" />

      {/* FEATURED FLEET */}
      <section className="bg-zinc-950 py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p
                className="text-zinc-500 text-xs uppercase tracking-[5px] mb-3"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                The Fleet
              </p>
              <h2
                className="text-white text-3xl md:text-4xl font-bold uppercase tracking-[3px]"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Featured Models
              </h2>
            </div>
            <a
              href="/fleet/"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[4px] text-zinc-400 hover:text-white transition-colors"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoBoats.map((boat) => (
              <BoatCard key={boat.modelName} {...boat} />
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-zinc-900 py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-screen-2xl">
          <div className="max-w-3xl">
            <p
              className="text-zinc-500 text-xs uppercase tracking-[5px] mb-6"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              About Carbon Yachts
            </p>
            <p
              className="text-white text-2xl md:text-3xl leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              We are Australia and New Zealand's exclusive dealer for Europe's most progressive marine brands — chosen for their uncompromising build quality, design integrity, and performance credentials.
            </p>
            <a
              href="/about-us/"
              className="inline-flex items-center gap-2 mt-10 text-xs uppercase tracking-[4px] text-white border-b border-zinc-600 pb-1 hover:border-white transition-colors"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Our Story →
            </a>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="bg-zinc-950 py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p
                className="text-zinc-500 text-xs uppercase tracking-[5px] mb-3"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                News &amp; Updates
              </p>
              <h2
                className="text-white text-3xl md:text-4xl font-bold uppercase tracking-[3px]"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Latest
              </h2>
            </div>
            <a
              href="/news/"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[4px] text-zinc-400 hover:text-white transition-colors"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              All Articles →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoArticles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY CTA */}
      <section className="bg-zinc-900 py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-zinc-500 text-xs uppercase tracking-[5px] mb-6"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Get in Touch
              </p>
              <h2
                className="text-white text-3xl md:text-4xl font-bold uppercase tracking-[3px] mb-6"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Start Your Journey
              </h2>
              <p
                className="text-zinc-400 text-base leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                Whether you're ready to order or just beginning to explore, our team is here to help you find the right yacht for your lifestyle and waters.
              </p>
            </div>
            <EnquiryForm variant="embedded" title="Make an Enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
