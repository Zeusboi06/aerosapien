"use client";

import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const panels = [
  {
    category: "Space Exploration Mission Heritage",
    title: "Precision Manufacturing for ISRO LPSC & Gaganyaan",
    narrative:
      "AEROSAPIEN contributes precision-engineered liquid engine hardware, PS4 combustion chamber components, and cryogenic propulsion assemblies supporting ISRO's Liquid Propulsion Systems Centre (LPSC) and the Gaganyaan Human Spaceflight Programme.",
    statLabel: "ISRO LPSC Certified Assemblies",
    statValue: "100% Vacuum Rated",
    image: "/images/clients/isro/isro_lpsc_hero.jpg",
    buttonLabel: "Explore ISRO Space Projects",
    buttonLink: "/clients?tab=isro",
  },
  {
    category: "Defense Aircraft Flight Heritage",
    title: "Class-1 Structural Components for HAL LCA Tejas",
    narrative:
      "AEROSAPIEN manufactures Class-1 critical structural aerospace components for the HAL LCA TEJAS Mk1A indigenous fighter aircraft programme, including titanium landing gear fittings, wing attachment components, and fuselage structural panels.",
    statLabel: "Machining Precision",
    statValue: "±0.005 mm",
    image: "/images/posters/hal_tejas_poster.jpg",
    buttonLabel: "Explore HAL Tejas Projects",
    buttonLink: "/clients?tab=hal",
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

              <div className="flex flex-wrap items-center gap-6">
                <div className="inline-flex items-center space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-bold text-[var(--color-brand-primary)] font-mono">
                    {panel.statValue}
                  </span>
                  <span className="text-xs font-sans text-slate-500 uppercase tracking-wider font-semibold border-l border-slate-300 pl-4">
                    {panel.statLabel}
                  </span>
                </div>

                <Link
                  href={panel.buttonLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00b5e2] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,181,226,0.3)] hover:scale-105 transition-all duration-300"
                >
                  <span>{panel.buttonLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right/Image Side */}
            <div className={`relative h-[380px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={idx === 0}
                unoptimized={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)] via-[var(--color-deep-navy)]/30 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
