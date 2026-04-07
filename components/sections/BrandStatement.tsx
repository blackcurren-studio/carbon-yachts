"use client";

import { useEffect, useRef, useState } from "react";

const raleway: React.CSSProperties = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
};

const sentences = [
  {
    text: "We built Carbon Yachts on a single belief: that the most progressive marine design in the world deserves to be on Australian and New Zealand water.",
    sizeClass: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
    delay: 0,
    margin: "mb-6",
  },
  {
    text: "Every brand we carry was chosen because it is ahead of where the market is — not where it has been.",
    sizeClass: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
    delay: 200,
    margin: "mb-10",
  },
  {
    text: "That is not a sales pitch. It is a standard.",
    sizeClass: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
    delay: 600,
    margin: "",
  },
];

export function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-zinc-950 py-32 lg:py-40"
      aria-label="Brand Statement"
    >
      <div className="max-w-screen-2xl px-6 lg:px-10 mx-auto">
        <div>
          {sentences.map(({ text, sizeClass, delay, margin }, i) => (
            <p
              key={i}
              className={[
                sizeClass,
                margin,
                "font-bold uppercase tracking-[1px] text-white leading-tight",
                "transition-all duration-700 ease-out",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                ...raleway,
                transitionDelay: `${delay}ms`,
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
