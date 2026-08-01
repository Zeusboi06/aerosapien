"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";

const industries = [
  {
    id: "space",
    category: "Space",
    title: "Pushing Limits in Space",
    description:
      "Manufacturing critical structural components for ISRO, Astrobase Space Technology, and Bellatrix Aerospace. Contributing to Gaganyaan, Cryogenic Upper Stage projects, and combustion chamber sub-assemblies.",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "defence",
    category: "Defence",
    title: "LCA Tejas — HAL Partnership",
    description:
      "Supplier of precision components to Hindustan Aeronautics Limited for the LCA Tejas light combat aircraft — landing gear, wing, and fuselage assemblies in titanium, Inconel, and NCM steel.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "drone",
    category: "Drone Technology",
    title: "Sky Defense — UAV Solutions",
    description:
      "R&D, prototyping, and production of UAV structural components in partnership with IG Drones — now deployed operationally by the Indian Army.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "commercial",
    category: "Commercial Aviation",
    title: "Global Air Mobility",
    description:
      "High-precision components for commercial transport aviation, supplied through Recaero into Airbus and Boeing programmes.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?q=80&w=2074&auto=format&fit=crop",
  },
];

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".industry-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <Section id="industries" className="bg-[var(--color-deep-navy)] relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
            Sectors We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Industries
          </h2>
          <p className="mt-6 text-lg text-white/60 font-sans max-w-xl">
            Delivering mission-critical precision components across the full spectrum of aerospace and defence.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="industry-card group relative h-[400px] md:h-[450px] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${industry.image}')` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <span className="text-[var(--color-brand-accent)] text-xs font-semibold tracking-[0.15em] uppercase">
                  {industry.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 leading-tight">
                  {industry.title}
                </h3>
                <p className="text-white/60 text-sm font-sans mt-3 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {industry.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[var(--color-brand-accent)]/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
