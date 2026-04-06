import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  category: string
  title: string
  excerpt: string
  date: string
  imageUrl: string
  href: string
}

const ralewayStyle = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

const dmSansStyle = {
  fontFamily: "'DM Sans', system-ui, sans-serif",
}

export function ArticleCard({
  category,
  title,
  excerpt,
  date,
  imageUrl,
  href,
}: ArticleCardProps) {
  return (
    <div className="group bg-zinc-950">
      <Link href={href} className="block">
        {/* Image Container */}
        <div className="aspect-[16/9] overflow-hidden w-full">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={450}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Content Area */}
        <div className="pt-6 pb-2">
          {/* Category Tag */}
          <p
            className="text-zinc-400 text-xs uppercase tracking-[3px] mb-3 font-medium"
            style={{ ...ralewayStyle, fontWeight: 500 }}
          >
            {category}
          </p>

          {/* Title */}
          <h2
            className="text-white text-xl leading-tight line-clamp-2 min-h-[3.5rem]"
            style={{ ...ralewayStyle, fontWeight: 600 }}
          >
            {title}
          </h2>

          {/* Excerpt */}
          <p
            className="text-zinc-400 text-sm mt-3 line-clamp-2"
            style={{ ...dmSansStyle, fontWeight: 300 }}
          >
            {excerpt}
          </p>

          {/* Meta & CTA Row */}
          <div className="flex items-center justify-between mt-6">
            {/* Date */}
            <span
              className="text-zinc-500 text-xs"
              style={{ ...dmSansStyle, fontWeight: 300 }}
            >
              {date}
            </span>

            {/* CTA */}
            <span
              className="text-white text-xs uppercase tracking-[3px] flex items-center gap-1"
              style={{ ...ralewayStyle, fontWeight: 500 }}
            >
              READ ARTICLE
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
