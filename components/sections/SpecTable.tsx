// SpecTable.tsx — Premium yacht specification sheet component
// Dark, minimal, editorial design — no icons, no badges, pure typography.

"use client";

import React from "react";

// ─── Font style objects (applied via inline style — DO NOT use Tailwind font utilities) ───
const raleway: React.CSSProperties = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
};
const dmSans: React.CSSProperties = {
  fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif",
};

// ─── Types ───────────────────────────────────────────────────────────────────

type SpecItem = {
  label: string;
  value: string;
};

type SpecCategory = {
  categoryName: string;
  items: SpecItem[];
};

interface SpecTableProps {
  /** Section heading. Defaults to "Technical Specifications". */
  title?: string;
  /** Desktop column count. Defaults to 2. */
  columns?: 1 | 2;
  /** Array of grouped spec categories. */
  specs: SpecCategory[];
}

// ─── Placeholder data ─────────────────────────────────────────────────────────

const saffierSE33Specs: SpecCategory[] = [
  {
    categoryName: "Dimensions",
    items: [
      { label: "Length Overall", value: "10.05 m" },
      { label: "Waterline Length", value: "9.20 m" },
      { label: "Beam", value: "3.35 m" },
      { label: "Draft (standard keel)", value: "1.85 m" },
      { label: "Draft (shallow keel)", value: "1.40 m" },
      { label: "Air Draft", value: "15.60 m" },
    ],
  },
  {
    categoryName: "Displacement & Ballast",
    items: [
      { label: "Displacement (light)", value: "4,250 kg" },
      { label: "Ballast (standard keel)", value: "1,450 kg" },
      { label: "Ballast Ratio", value: "34%" },
    ],
  },
  {
    categoryName: "Rig & Sail Area",
    items: [
      { label: "Rig Type", value: "Fractional sloop" },
      { label: "Mainsail Area", value: "38.5 m²" },
      { label: "Jib Area (100%)", value: "28.2 m²" },
      { label: "Spinnaker Area", value: "78.0 m²" },
      { label: "Mast Material", value: "Anodised aluminium" },
      { label: "Boom Material", value: "Anodised aluminium" },
    ],
  },
  {
    categoryName: "Engine & Propulsion",
    items: [
      { label: "Engine", value: "Volvo Penta D1-20" },
      { label: "Power Output", value: "20 hp / 14.7 kW" },
      { label: "Propeller", value: "2-blade folding" },
      { label: "Fuel Capacity", value: "40 L" },
    ],
  },
  {
    categoryName: "Tankage & Accommodation",
    items: [
      { label: "Fresh Water Capacity", value: "120 L" },
      { label: "Holding Tank", value: "30 L" },
      { label: "Berths", value: "4" },
      { label: "Headroom (saloon)", value: "1.88 m" },
    ],
  },
  {
    categoryName: "Construction",
    items: [
      { label: "Hull Material", value: "GRP / vinylester resin" },
      { label: "Deck Material", value: "GRP sandwich" },
      { label: "Hull Form", value: "Fin keel, spade rudder" },
      { label: "CE Category", value: "A — Ocean" },
    ],
  },
];

// ─── SpecCategory column ──────────────────────────────────────────────────────

function SpecCategoryBlock({
  category,
  isFirst,
}: {
  category: SpecCategory;
  isFirst: boolean;
}) {
  return (
    <div>
      {/* Category heading */}
      <p
        className={`text-xs uppercase tracking-widest text-zinc-400 ${isFirst ? "pt-0" : "pt-10"}`}
        style={raleway}
      >
        {category.categoryName}
      </p>

      {/* Spec rows */}
      <dl className="mt-4">
        {category.items.map((item) => (
          <div
            key={item.label}
            className="flex justify-between items-baseline border-b border-zinc-800 py-3"
          >
            <dt className="text-sm text-zinc-500" style={raleway}>
              {item.label}
            </dt>
            <dd className="text-sm text-white text-right ml-4" style={dmSans}>
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function SpecTable({
  title = "Technical Specifications",
  columns = 2,
  specs = saffierSE33Specs,
}: SpecTableProps) {
  const [open, setOpen] = React.useState(false);

  const gridClass =
    columns === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-x-16"
      : "grid grid-cols-1";

  return (
    <section className="bg-zinc-900 px-6 md:px-0 py-12">
      {/* Header row: title left, toggle button right */}
      <div className="mb-8 border-b border-zinc-800 pb-4 flex items-center justify-between">
        <p
          className="text-xs uppercase tracking-widest text-zinc-500"
          style={raleway}
        >
          {title}
        </p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="border border-zinc-700 bg-transparent text-xs uppercase tracking-widest text-zinc-400 px-4 py-2 hover:text-white hover:border-zinc-500 transition-colors"
          style={raleway}
        >
          {open ? "Hide specifications" : "Show specifications"}
        </button>
      </div>

      {/* Spec grid — hidden by default */}
      {open && (
        <div className={gridClass}>
          {specs.map((category, index) => (
            <SpecCategoryBlock
              key={category.categoryName}
              category={category}
              isFirst={index === 0}
            />
          ))}
        </div>
      )}
    </section>
  );
}
