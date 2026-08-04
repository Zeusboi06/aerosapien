"use client";

import Section from "@/components/Section";
import Image from "next/image";

const panels = [
  {
    category: "Space Exploration Narrative",
    title: "Contributing to India's Human Spaceflight — Gaganyaan",
    narrative:
      "Aerosapien manufactures critical structural sub-assemblies and propulsion components for ISRO's Gaganyaan mission and Cryogenic Upper Stage engines. Operating under extreme pressure and thermal gradients, every part undergoes 100% CMM inspection and material certification.",
    statLabel: "ISRO Certified Sub-Assemblies",
    statValue: "100% Flight-Traceable",
    image: "/images/capabilities/additive-manufacturing.jpg",
  },
  {
    category: "Defense Aircraft Heritage",
    title: "Precision Flight Components for HAL LCA Tejas",
    narrative:
      "As an approved defense supplier to Hindustan Aeronautics Limited, Aerosapien delivers high-stress wing fittings, landing gear components, and fuselage assemblies machined from Titanium, Inconel, and NCM steel for the LCA Tejas program.",
    statLabel: "Machining Tolerance",
    statValue: "±0.001 mm",
    image: "/images/research/tejas-panel.jpg",
  },
];

export default function SplitResearchPanel() {
  return (
    <Section className="bg-white text-[var(--color-deep-navy)]">
      <div className="max-w-3xl mb-16">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
          Mission Heritage
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
          Pioneering Aerospace Engineering
        </h2>
      </div>

      <div className="space-y-24">
        {panels.map((panel, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Left/Text Side */}
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <span className="text-xs font-mono font-semibold text-[var(--color-brand-accent)] tracking-wider uppercase block mb-3">
                {panel.category}
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-deep-navy)] leading-snug mb-6">
                {panel.title}
              </h3>
              <p className="text-slate-600 text-base md:text-lg font-sans leading-relaxed mb-8">
                {panel.narrative}
              </p>

              <div className="inline-flex items-center space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-2xl font-bold text-[var(--color-brand-primary)] font-mono">
                  {panel.statValue}
                </span>
                <span className="text-xs font-sans text-slate-500 uppercase tracking-wider font-semibold border-l border-slate-300 pl-4">
                  {panel.statLabel}
                </span>
              </div>
            </div>

            {/* Right/Image Side */}
            <div className={`relative h-[380px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)]/60 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
