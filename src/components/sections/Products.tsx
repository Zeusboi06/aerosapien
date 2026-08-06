"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Wing Attachment Structural Fitting",
    material: "Titanium Alloy / Aircraft Aluminium",
    tolerance: "±0.001 mm",
    process: "5-Axis Simultaneous CNC Machining",
    tags: ["Class-1 Structural", "Precision Bored", "Flight Certified"],
    image: "/images/products/lca-wing-structural.png",
  },
  {
    id: 2,
    title: "Landing Gear Shock Strut Fitting",
    material: "High-Strength Aerospace Billet",
    tolerance: "±0.001 mm",
    process: "4-Axis CNC Turning & Milling",
    tags: ["Critical Load Bearing", "Fatigue Tested"],
    image: "/images/products/lca-landing-gear.png",
  },
  {
    id: 3,
    title: "Space Launcher Rocket Engine Component",
    material: "Refractory Alloy / High Thermal Copper",
    tolerance: "±0.001 mm",
    process: "5-Axis CNC Precision Milling",
    tags: ["Liquid Propulsion", "Vacuum Rated", "High Pressure"],
    image: "/images/products/space-rocket-engine.png",
  },
  {
    id: 4,
    title: "Tactical UAV T-Joint & Y-Joint Airframe Hardware",
    material: "Aluminium 6061-T6 Black Anodized",
    tolerance: "±0.001 mm",
    process: "Multi-Axis CNC Machining",
    tags: ["Airframe Hardware", "High Strength", "Lightweight"],
    image: "/images/clients/ig-drones/drone-3.png",
  },
  {
    id: 5,
    title: "Aircraft Structural Assembly Bracket",
    material: "Aerospace Aluminium Alloy",
    tolerance: "±0.001 mm",
    process: "Multi-Axis CNC Machining",
    tags: ["Complex Geometry", "High Repeatability"],
    image: "/images/products/lca-structural-bracket.png",
  },
  {
    id: 6,
    title: "Precision CNC Machined Sub-Assembly",
    material: "Titanium / NCM Steel Billet",
    tolerance: "±0.001 mm",
    process: "5-Axis CNC + EDM Metrology",
    tags: ["Mission Critical", "100% Inspected"],
    image: "/images/products/lca-cnc-assembly.png",
  },
];

export default function Products() {
  const containerRef = useRef<HTMLElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".product-card");
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + products.length) % products.length : null)),
    []
  );
  const nextItem = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % products.length : null)),
    []
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevItem();
      if (e.key === "ArrowRight") nextItem();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, nextItem, prevItem]);

  const activeProd = lightboxIndex !== null ? products[lightboxIndex] : null;

  return (
    <>
      <Section id="products" ref={containerRef} className="bg-[#070D18] text-white py-24 border-t border-slate-800/80 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00b5e2]/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs px-4 py-1.5 rounded-full bg-[#00b5e2]/10 border border-[#00b5e2]/20">
            Precision Engineering Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            Components We Manufacture
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base md:text-lg leading-relaxed">
            Class-1 Critical Structural Components manufactured to{" "}
            <span className="text-white font-semibold">±0.001 mm</span> tolerance with 100% CMM metrology inspection.
          </p>
        </div>

        {/* 6-item Grid: 3 top + 3 bottom */}
        <div className="max-w-7xl mx-auto space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((prod, idx) => (
              <ProductCard key={prod.id} prod={prod} idx={idx} onClick={() => openLightbox(idx)} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.slice(3).map((prod, idx) => (
              <ProductCard key={prod.id} prod={prod} idx={idx + 3} onClick={() => openLightbox(idx + 3)} />
            ))}
          </div>
        </div>

        {/* Programme footnote */}
        <div className="mt-14 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-slate-800 bg-slate-900/80">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)] animate-pulse" />
            <span className="text-xs text-slate-400 font-sans tracking-wide">
              All components manufactured at Bengaluru facility · ISO 9001:2015 quality standards · 100% dimensional inspection
            </span>
          </div>
        </div>
        
        {/* See More Products Button */}
        <div className="mt-14 text-center relative z-10">
          <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-[#00b5e2]/10 hover:bg-[#00b5e2]/20 text-[#00b5e2] font-bold rounded-full transition-all border border-[#00b5e2]/30 group shadow-lg shadow-[#00b5e2]/10 hover:shadow-[#00b5e2]/20">
            See More Detailed Products <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Lightbox */}
      {activeProd && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-[#0B1728] rounded-2xl border border-slate-700 max-w-4xl w-full overflow-hidden shadow-2xl shadow-black/80"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-72 md:h-full min-h-[320px] bg-[#060E18] flex items-center justify-center p-8 border-r border-slate-800">
                <Image
                  src={activeProd.image}
                  alt={activeProd.title}
                  fill
                  className="object-contain p-6"
                  unoptimized
                />
              </div>

              <div className="p-8 flex flex-col justify-center space-y-6">
                <div>
                  <span className="text-[var(--color-brand-accent)] text-xs font-semibold tracking-[0.2em] uppercase font-mono">
                    High-Precision Component
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 leading-snug">
                    {activeProd.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold w-20 flex-shrink-0 pt-0.5">Material</span>
                    <span className="text-sm text-white font-sans">{activeProd.material}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold w-20 flex-shrink-0 pt-0.5">Process</span>
                    <span className="text-sm text-white font-sans">{activeProd.process}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold w-20 flex-shrink-0 pt-0.5">Tolerance</span>
                    <span className="font-mono font-bold text-sm px-3 py-1 rounded bg-[var(--color-brand-accent)]/20 text-[var(--color-brand-accent)] border border-[var(--color-brand-accent)]/30">
                      {activeProd.tolerance}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold w-20 flex-shrink-0 pt-0.5">Tags</span>
                    <div className="flex flex-wrap gap-2">
                      {activeProd.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-500 font-mono">
                    {(lightboxIndex ?? 0) + 1} / {products.length}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={prevItem}
                      className="w-9 h-9 rounded-full border border-slate-800 hover:border-[var(--color-brand-accent)] flex items-center justify-center text-white hover:text-[var(--color-brand-accent)] transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextItem}
                      className="w-9 h-9 rounded-full border border-slate-800 hover:border-[var(--color-brand-accent)] flex items-center justify-center text-white hover:text-[var(--color-brand-accent)] transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProductCard({
  prod,
  onClick,
}: {
  prod: (typeof products)[0];
  idx: number;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="product-card group relative bg-[#0B1728] rounded-2xl overflow-hidden border border-slate-800 hover:border-[var(--color-brand-accent)]/50 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[#00b5e2]/10 hover:-translate-y-1"
    >
      {/* Image area - transparent background */}
      <div className="relative h-56 bg-[#060E18] flex items-center justify-center overflow-hidden border-b border-slate-800/80 p-6">
        <Image
          src={prod.image}
          alt={prod.title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <div className="w-10 h-10 rounded-full bg-[var(--color-brand-accent)]/20 border border-[var(--color-brand-accent)]/40 flex items-center justify-center backdrop-blur-sm">
            <ZoomIn className="w-4 h-4 text-[var(--color-brand-accent)]" />
          </div>
        </div>
      </div>

      {/* Text details */}
      <div className="p-6 bg-[#0B1728]">
        <span className="text-[10px] font-mono font-semibold text-[var(--color-brand-accent)] tracking-wider uppercase block mb-1">
          {prod.material}
        </span>
        <h3 className="text-base font-bold text-white leading-snug line-clamp-2">
          {prod.title}
        </h3>
        <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-800/60">
          <span className="text-xs text-slate-400 font-sans">{prod.process}</span>
          <span className="font-mono text-xs font-bold text-[var(--color-brand-accent)] bg-[var(--color-brand-accent)]/10 px-2.5 py-0.5 rounded border border-[var(--color-brand-accent)]/20">
            {prod.tolerance}
          </span>
        </div>
      </div>
    </div>
  );
}
