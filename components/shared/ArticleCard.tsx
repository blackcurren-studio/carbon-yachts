"use client";

// ============================================================
// CARBON YACHTS — ARTICLE CARD COMPONENT
// ============================================================
// Paste your V0 Article Card component code here.
//
// Props:
// - category: string (e.g. "BRAND NEWS")
// - title: string (line-clamped to 2 lines)
// - excerpt: string
// - date: string (e.g. "12 March 2025")
// - imageUrl: string (16:9 aspect ratio)
// - href: string
// ============================================================

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  href: string;
}

export default function ArticleCard({ category, title, date, href }: ArticleCardProps) {
  return (
    <div className="bg-zinc-900 rounded overflow-hidden">
      <div className="aspect-video bg-zinc-800 flex items-center justify-center">
        <span className="text-zinc-600 text-xs">Image placeholder</span>
      </div>
      <div className="p-4">
        <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2"
          style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
          {category}
        </p>
        <h3 className="text-white text-base font-bold uppercase tracking-wide line-clamp-2"
          style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
          {title}
        </h3>
        <p className="text-zinc-500 text-xs mt-2">{date}</p>
        <a href={href} className="text-zinc-400 text-xs uppercase tracking-widest mt-4 inline-block hover:text-white transition-colors"
          style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
          READ ARTICLE →
        </a>
      </div>
    </div>
  );
}
