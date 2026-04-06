"use client"

import Link from "next/link"
import Image from "next/image"

const raleway: React.CSSProperties = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

const dmSans: React.CSSProperties = {
  fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

export interface FeaturedModelItem {
  brandName: string
  modelName: string
  descriptor: string
  imageUrl: string
  href: string
  badge?: string // e.g. "Available Now" | "New Arrival" | "Arriving 2026"
}

interface FeaturedModelsProps {
  models?: FeaturedModelItem[]
}

const DEFAULT_MODELS: FeaturedModelItem[] = [
  {
    brandName: "Candela",
    modelName: "C-8",
    descriptor: "The world's most efficient electric boat",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85",
    href: "/candela/c-8/",
    badge: "Available Now",
  },
  {
    brandName: "YYachts",
    modelName: "Y8",
    descriptor: "Carbon performance. Ocean comfort",
    imageUrl: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=85",
    href: "/yyachts/y8/",
  },
  {
    brandName: "Saffier Yachts",
    modelName: "SE 33 Life",
    descriptor: "Weekend sailing, redefined",
    imageUrl: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=85",
    href: "/saffier-yachts/se-33-life/",
    badge: "New Arrival",
  },
  {
    brandName: "Shogun Yachts",
    modelName: "Shogun 50",
    descriptor: "Built for the open ocean",
    imageUrl: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=1200&q=85",
    href: "/shogun-yachts/shogun-50/",
  },
]

function ModelCard({ model }: { model: FeaturedModelItem }) {
  return (
    <Link
      href={model.href}
      className="group relative block overflow-hidden bg-zinc-900"
      aria-label={`${model.brandName} ${model.modelName} — ${model.descriptor}`}
    >
      {/* ── Image ── */}
      <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] w-full overflow-hidden">
        <Image
          src={model.imageUrl}
          alt={`${model.brandName} ${model.modelName}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Gradient overlay — stronger at bottom for text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
          aria-hidden="true"
        />

        {/* ── Badge ── */}
        {model.badge && (
          <div className="absolute top-4 left-4">
            <span
              className="inline-block bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-black"
              style={raleway}
            >
              {model.badge}
            </span>
          </div>
        )}

        {/* ── Text content — pinned to bottom of image ── */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          {/* Brand eyebrow */}
          <p
            className="text-[10px] font-medium uppercase tracking-[4px] text-zinc-400 mb-2"
            style={raleway}
          >
            {model.brandName}
          </p>

          {/* Model name */}
          <h3
            className="text-2xl lg:text-3xl font-bold uppercase tracking-[2px] text-white leading-tight mb-2"
            style={raleway}
          >
            {model.modelName}
          </h3>

          {/* Descriptor */}
          <p
            className="text-sm font-light text-zinc-300 leading-relaxed mb-5"
            style={dmSans}
          >
            {model.descriptor}
          </p>

          {/* CTA — underline animates on hover */}
          <span
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[4px] text-white"
            style={raleway}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
              Explore
            </span>
            <svg
              className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 12 12"
              fill="none"
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
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedModels({ models = DEFAULT_MODELS }: FeaturedModelsProps) {
  return (
    <section
      className="bg-zinc-950 pt-1 pb-20 lg:pb-28"
      aria-labelledby="featured-models-heading"
    >
      {/* ── Section header ── */}
      <div className="px-6 lg:px-10 pt-16 pb-10 mx-auto max-w-screen-2xl">
        <div className="flex items-end justify-between">
          <div>
            <p
              className="text-zinc-500 text-[10px] uppercase tracking-[5px] mb-3"
              style={raleway}
            >
              The Fleet
            </p>
            <h2
              id="featured-models-heading"
              className="text-white text-3xl md:text-4xl font-bold uppercase tracking-[3px]"
              style={raleway}
            >
              Featured Models
            </h2>
          </div>
          <Link
            href="/fleet/"
            className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[4px] text-zinc-400 hover:text-white transition-colors duration-200"
            style={raleway}
          >
            View All Fleet →
          </Link>
        </div>
      </div>

      {/* ── Card grid ── */}
      {/*
        Mobile:  1 column, full-width cards with 4:3 aspect ratio
        Tablet:  2 columns
        Desktop: 4 columns, portrait aspect ratio — tall cards feel premium
      */}
      <div className="px-6 lg:px-10 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {models.map((model) => (
            <ModelCard key={`${model.brandName}-${model.modelName}`} model={model} />
          ))}
        </div>
      </div>

      {/* ── Mobile "View All" link ── */}
      <div className="mt-10 px-6 text-center md:hidden">
        <Link
          href="/fleet/"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[4px] text-zinc-400 hover:text-white transition-colors duration-200"
          style={raleway}
        >
          View All Fleet →
        </Link>
      </div>
    </section>
  )
}
