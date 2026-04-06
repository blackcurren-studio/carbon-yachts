"use client";

// ============================================================
// CARBON YACHTS — BOAT CARD COMPONENT
// ============================================================
// Paste your V0 Boat Card component code here.
//
// Props:
// - brand: string (e.g. "Saffier Yachts")
// - category: string (e.g. "SAILING")
// - model: string (e.g. "SE 37 Lounge")
// - specs: { loa: string; beam: string; displacement?: string }
// - imageUrl: string
// - href: string
// - availableNow?: boolean
// - variantCount?: number (shows "Available in X configurations")
// ============================================================

interface BoatCardProps {
  brand: string;
  category: string;
  model: string;
  imageUrl: string;
  href: string;
  availableNow?: boolean;
  variantCount?: number;
}

export default function BoatCard({ brand, model, href }: BoatCardProps) {
  return (
    <div className="bg-zinc-900 rounded overflow-hidden">
      <div className="aspect-[4/3] bg-zinc-800 flex items-center justify-center">
        <span className="text-zinc-600 text-xs">Image placeholder</span>
      </div>
      <div className="p-4">
        <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1"
          style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
          {brand}
        </p>
        <h3 className="text-white text-lg font-bold uppercase tracking-wide"
          style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
          {model}
        </h3>
        <a href={href} className="text-zinc-400 text-xs uppercase tracking-widest mt-4 inline-block hover:text-white transition-colors"
          style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
          DISCOVER MODEL →
        </a>
      </div>
    </div>
  );
}
