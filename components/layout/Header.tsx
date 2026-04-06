"use client";

// ============================================================
// CARBON YACHTS — HEADER COMPONENT
// ============================================================
// Paste your V0 Header component code here.
//
// This component should include:
// - Dark sticky header with CY logo
// - FLEET mega-menu (6 brand columns)
// - Navigation: FLEET | AVAILABLE NOW | ABOUT | CONTACT
// - "ENQUIRE NOW" CTA button (top right)
// - Mobile hamburger menu with Sheet drawer
//
// Typography:
// - Nav/CTAs: Raleway, uppercase, font-weight 600-700, tracking wide
// - Body: DM Sans, font-weight 300
// ============================================================

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span
          className="text-white text-sm font-bold uppercase tracking-widest"
          style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          CARBON YACHTS
        </span>
        <span className="text-zinc-500 text-xs">
          — Paste V0 Header component here —
        </span>
      </div>
    </header>
  );
}
