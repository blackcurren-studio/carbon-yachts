import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export interface BoatCardProps {
  brandName: string
  modelName: string
  imageUrl: string
  href: string
  length: string
  category: string
  variants?: number
  isAvailableNow?: boolean
}

export function BoatCard({
  brandName,
  modelName,
  imageUrl,
  href,
  length,
  category,
  variants,
  isAvailableNow,
}: BoatCardProps) {
  return (
    <Link href={href} className="group block bg-zinc-950">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${brandName} ${modelName}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {isAvailableNow && (
          <div className="absolute top-3 right-3 bg-white px-3 py-1.5">
            <span
              className="text-[10px] font-semibold uppercase tracking-[2px] text-black"
              style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
            >
              Available Now
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="pt-6 pb-2">
        {/* Brand & Category Eyebrow */}
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-medium uppercase tracking-[3px] text-zinc-400"
            style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            {brandName}
          </span>
          <span className="font-body text-xs font-light text-zinc-500">
            {category}
          </span>
        </div>

        {/* Model Name */}
        <h2
          className="mt-2 text-2xl font-semibold uppercase tracking-[1px] text-white"
          style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          {modelName}
        </h2>

        {/* Specs & Variants Row */}
        <div className="mt-3 flex items-center gap-4">
          <span className="font-body text-sm font-light text-zinc-400">
            Length: {length}
          </span>

          {variants !== undefined && (
            <>
              <span className="text-zinc-600" aria-hidden="true">·</span>
              <span className="font-body text-sm font-light italic text-zinc-500">
                Available in {variants} configurations
              </span>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-2">
          <span
            className="text-xs font-medium uppercase tracking-[3px] text-white"
            style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            Discover Model
          </span>
          <ArrowRight
            size={12}
            className="text-white transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  )
}
