"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const raleway = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}
const dmSans = {
  fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

interface Model {
  modelName: string
  imageUrl: string
  length: string
  category: string
  href: string
}

interface FleetShowcaseProps {
  brandName: string
  eyebrow?: string
  title: string
  description?: string
  models: Model[]
}

function ModelCard({
  brandName,
  model,
  className,
}: {
  brandName: string
  model: Model
  className?: string
}) {
  return (
    <div className={className}>
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden bg-zinc-900 relative group">
        <Image
          src={model.imageUrl}
          alt={`${brandName} ${model.modelName}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 90vw, 33vw"
        />
      </div>

      {/* Content Area */}
      <div className="pt-6 pb-2">
        {/* Brand Eyebrow */}
        <p
          className="text-xs font-medium uppercase tracking-[3px] text-zinc-400"
          style={raleway}
        >
          {brandName}
        </p>

        {/* Model Name */}
        <h3
          className="mt-2 text-2xl font-semibold uppercase tracking-[1px] text-white"
          style={raleway}
        >
          {model.modelName}
        </h3>

        {/* Specs Row */}
        <p className="mt-3 text-sm font-light text-zinc-400" style={dmSans}>
          {model.length} &mdash; {model.category}
        </p>

        {/* CTA Link — wraps image hover group too via `group` on parent */}
        <Link
          href={model.href}
          className="mt-6 text-xs font-medium uppercase tracking-[3px] text-white flex items-center gap-2 group/cta w-fit"
          style={raleway}
        >
          Explore Model
          <ArrowRight
            size={13}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover/cta:translate-x-1"
          />
        </Link>
      </div>
    </div>
  )
}

export function FleetShowcase({
  brandName,
  eyebrow,
  title,
  description,
  models,
}: FleetShowcaseProps) {
  return (
    <section className="bg-zinc-950 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="flex items-end justify-between pt-16 pb-10">
        <div>
          {eyebrow && (
            <p
              className="text-[10px] uppercase tracking-[5px] text-zinc-500"
              style={raleway}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-[3px] text-white mt-3"
            style={raleway}
          >
            {title}
          </h2>
        </div>
        {description && (
          <p
            className="hidden md:block max-w-xs text-sm font-light text-zinc-400 text-right leading-relaxed"
            style={dmSans}
          >
            {description}
          </p>
        )}
      </div>

      {/* Mobile: horizontal snap carousel */}
      <div
        className="
          flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 -mx-6
          md:hidden
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {models.map((model) => (
          <ModelCard
            key={model.modelName}
            brandName={brandName}
            model={model}
            className="flex-none w-[90vw] snap-start"
          />
        ))}
      </div>

      {/* Desktop: 3-column CSS grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-10 pb-20">
        {models.map((model) => (
          <ModelCard
            key={model.modelName}
            brandName={brandName}
            model={model}
          />
        ))}
      </div>
    </section>
  )
}
