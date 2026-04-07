"use client";

import { useEffect, useRef, useState } from "react";

const raleway = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
};
const dmSans = {
  fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif",
};

interface Highlight {
  headline: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
}

interface ModelHighlightsProps {
  highlights?: Highlight[];
}

const defaultHighlights: Highlight[] = [
  {
    headline: "Flush Deck Design",
    body: "Experience unobstructed views and seamless movement across the deck. The minimalist layout ensures both safety and elegance while underway. Every line is hidden to maintain the pure aesthetic.",
    imageSrc:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
    imageAlt: "Flush deck of a sailing yacht",
  },
  {
    headline: "Carbon Fibre Construction",
    body: "Built for uncompromising performance and strength. The advanced carbon composite hull significantly reduces weight while increasing rigidity. This translates to effortless speed in light winds.",
    imageSrc:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80",
    imageAlt: "Carbon fibre hull detail",
  },
  {
    headline: "Shoal Draft Option",
    body: "Explore shallow anchorages and hidden coves with ease. The innovative keel design allows for a reduced draft without sacrificing upwind performance. Perfect for coastal cruising and island hopping.",
    imageSrc:
      "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=1200&q=80",
    imageAlt: "Yacht anchored in shallow water",
  },
];

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function HighlightPanel({
  highlight,
  index,
}: {
  highlight: Highlight;
  index: number;
}) {
  const { ref, visible } = useScrollReveal(0.15);
  const isEven = index % 2 !== 0;

  const imageBlock = (
    <div className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden flex-shrink-0">
      <img
        src={highlight.imageSrc}
        alt={highlight.imageAlt}
        className="w-full h-full object-cover"
      />
    </div>
  );

  const textBlock = (
    <div className="w-full lg:w-1/2 flex items-center px-10 lg:px-16 py-12 lg:py-20">
      <div>
        <h2
          style={raleway}
          className="font-bold uppercase tracking-[2px] text-2xl md:text-3xl text-white mb-4 text-balance"
        >
          {highlight.headline}
        </h2>
        <p
          style={dmSans}
          className="font-light text-zinc-400 leading-relaxed text-sm md:text-base"
        >
          {highlight.body}
        </p>
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* On mobile image always on top; on desktop alternate layout */}
      {isEven ? (
        <>
          {/* Mobile: image first, text second */}
          <div className="lg:hidden flex flex-col">
            {imageBlock}
            {textBlock}
          </div>
          {/* Desktop: text left, image right */}
          <div className="hidden lg:flex w-full">
            {textBlock}
            {imageBlock}
          </div>
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </div>
  );
}

export default function ModelHighlights({
  highlights = defaultHighlights,
}: ModelHighlightsProps) {
  return (
    <section className="bg-zinc-950 w-full">
      {highlights.map((highlight, index) => (
        <HighlightPanel key={highlight.headline} highlight={highlight} index={index} />
      ))}
    </section>
  );
}
