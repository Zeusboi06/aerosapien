"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import { ChevronLeft, ChevronRight, X, ArrowRight, Expand } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Landing Gear Structural Component",
    program: "HAL LCA Tejas Mk1A",
    material: "High-Strength Aluminium Alloy",
    tolerance: "±0.001 mm",
    process: "5-Axis CNC Machining",
    tags: ["Critical Load Bearing", "Precision Bored"],
    image: "/images/products/lca-landing-gear.png",
  },
  {
    id: 2,
    title: "Wing Structural Component",
    program: "HAL LCA Tejas Mk1A",
    material: "Aerospace-Grade Aluminium",
    tolerance: "±0.001 mm",
    process: "5-Axis CNC Machining",
    tags: ["Lightweight", "Tight Tolerance"],
    image: "/images/products/lca-wing-structural.png",
  },
  {
    id: 3,
    title: "Fuselage Structural Panel",
    program: "HAL LCA Tejas Mk1A",
    material: "Aircraft-Grade Aluminium",
    tolerance: "±0.001 mm",
    process: "High-Precision CNC Milling",
    tags: ["Corrosion Resistant", "Aerospace Certified"],
    image: "/images/products/lca-fuselage-panel.png",
  },
  {
    id: 4,
    title: "Aircraft Structural Assembly Bracket",
    program: "HAL LCA Tejas Mk1A",
    material: "Aerospace Aluminium Alloy",
    tolerance: "±0.001 mm",
    process: "Multi-Axis CNC Machining",
    tags: ["Complex Geometry", "High Repeatability"],
    image: "/images/products/lca-structural-bracket.png",
  },
  {
    id: 5,
    title: "Precision CNC Machined Assembly",
    program: "HAL LCA Tejas Mk1A",
    material: "Titanium / NCM Steel",
    tolerance: "±0.001 mm",
    process: "4 & 5 Axis CNC Machining",
    tags: ["Mission Critical", "100% Inspected"],
    image: "/images/products/lca-cnc-assembly.png",
  },
  {
    id: 6,
    title: "Complex Structural Frame",
    program: "HAL LCA Tejas Mk1A",
    material: "Aerospace Aluminium Alloy",
    tolerance: "±0.001 mm",
    process: "5-Axis CNC + EDM",
    tags: ["Complex Contours", "Lightened Structure"],
    image: "/images/products/lca-complex-frame.png",
  },
  {
    id: 7,
    title: "Precision Fin & Attachment Assembly",
    program: "HAL LCA Tejas Mk1A",
    material: "Aluminium / Titanium",
    tolerance: "±0.001 mm",
    process: "Multi-Axis CNC Machining",
    tags: ["Superior Surface Finish", "Multi-Axis"],
    image: "/images/products/lca-fin-assembly.png",
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
        { y: 50, opacity: 0, scale: 0.96 },
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

  // Keyboard nav
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
      <Section id="products" ref={containerRef} className="bg-[#060E18]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
            HAL LCA Tejas Programme
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            Components We Manufacture
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base md:text-lg leading-relaxed">
            Class-1 Critical Structural Aerospace Components manufactured at{" "}
            <span className="text-white font-semibold">±0.001 mm</span> tolerance for India&apos;s
            indigenous fighter aircraft programme.
          </p>
        </div>

        {/* 7-item Grid: 4 top + 3 bottom */}
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Row 1 — 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(0, 4).map((prod, idx) => (
              <ProductCard key={prod.id} prod={prod} idx={idx} onClick={() => openLightbox(idx)} />
            ))}
          </div>
          {/* Row 2 — 3 cards, centred */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto w-full">
            {products.slice(4).map((prod, idx) => (
              <ProductCard key={prod.id} prod={prod} idx={idx + 4} onClick={() => openLightbox(idx + 4)} />
            ))}
          </div>
        </div>

        {/* Programme footnote */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)] animate-pulse" />
            <span className="text-xs text-slate-400 font-sans tracking-wide">
              All components manufactured at Bengaluru facility · AS9100D quality standards · 100% dimensional inspection
            </span>
          </div>
        </div>
        
        {/* See More Products Button */}
        <div className="mt-16 text-center pb-8">
          <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-[#00b5e2]/10 hover:bg-[#00b5e2]/20 text-[#00b5e2] font-bold rounded-full transition-colors border border-[#00b5e2]/30 group">
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
            className="relative bg-[#0B1728] rounded-2xl border border-white/10 max-w-4xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative h-72 md:h-full min-h-[300px] bg-[#060E18] flex items-center justify-center p-8">
                <Image
                  src={activeProd.image}
                  alt={activeProd.title}
                  fill
                  className="object-contain p-6"
                  unoptimized
                />
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-center space-y-6">
                <div>
                  <span className="text-[var(--color-brand-accent)] text-xs font-semibold tracking-[0.2em] uppercase">
                    {activeProd.program}
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
                        <span key={tag} className="text-xs px-2 py-1 rounded bg-white/[0.06] text-slate-300 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-slate-500">
                    {(lightboxIndex ?? 0) + 1} / {products.length}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={prevItem}
                      className="w-9 h-9 rounded-full border border-white/10 hover:border-[var(--color-brand-accent)]/50 flex items-center justify-center text-white hover:text-[var(--color-brand-accent)] transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextItem}
                      className="w-9 h-9 rounded-full border border-white/10 hover:border-[var(--color-brand-accent)]/50 flex items-center justify-center text-white hover:text-[var(--color-brand-accent)] transition-colors"
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
      className="product-card group relative bg-[#0B1728] rounded-xl overflow-hidden border border-white/[0.07] hover:border-[var(--color-brand-accent)]/40 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(0,181,226,0.12)]"
    >
      {/* Image area */}
      <div className="relative h-48 bg-[#060E18] flex items-center justify-center overflow-hidden">
        <Image
          src={prod.image}
          alt={prod.title}
          fill
          className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        {/* Zoom hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-[var(--color-brand-accent)]/20 border border-[var(--color-brand-accent)]/40 flex items-center justify-center backdrop-blur-sm">
            <ZoomIn className="w-4 h-4 text-[var(--color-brand-accent)]" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="p-4">
        <span className="text-[10px] font-mono font-semibold text-[var(--color-brand-accent)] tracking-wider uppercase">
          {prod.material}
        </span>
        <h3 className="text-sm font-bold text-white mt-1 leading-snug line-clamp-2">
          {prod.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[10px] text-slate-500 font-sans">{prod.process}</span>
          <span className="font-mono text-[10px] font-bold text-[var(--color-brand-accent)] bg-[var(--color-brand-accent)]/10 px-2 py-0.5 rounded">
            {prod.tolerance}
          </span>
        </div>
      </div>
    </div>
  );
}
