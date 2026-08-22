"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyCanvas from "@/components/3d/LazyCanvas";
import ExplodedChamberScene from "@/components/3d/ExplodedChamberScene";

export default function ExplodedView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [explodeFactor, setExplodeFactor] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          setExplodeFactor(self.progress);
        },
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#070F1A] text-white flex flex-col justify-between overflow-hidden"
    >
      {/* Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Header text overlay */}
      <div className="relative z-10 pt-16 px-6 md:px-12 text-center max-w-3xl mx-auto">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
          Interactive Hardware Deconstruction
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 tracking-tight">
          Precision Engineering, Component by Component
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-3 font-sans">
          Scroll down to decompose the cryogenic thrust chamber sub-assembly into its structural elements.
        </p>
      </div>

      {/* 3D Canvas Container */}
      <div className="relative w-full h-full flex-1 z-10 cursor-grab active:cursor-grabbing">
        <LazyCanvas className="w-full h-full">
          <ExplodedChamberScene explodeFactor={explodeFactor} />
        </LazyCanvas>
      </div>

      {/* Bottom progress bar */}
      <div className="relative z-10 pb-8 px-6 text-center">
        <div className="max-w-md mx-auto bg-white/10 h-1 rounded-full overflow-hidden mb-2">
          <div
            className="bg-[var(--color-brand-accent)] h-full transition-all duration-75"
            style={{ width: `${Math.min(100, Math.max(0, explodeFactor * 100))}%` }}
          />
        </div>
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
          {explodeFactor < 0.1
            ? "ASSEMBLED COMPONENT STATE"
            : explodeFactor > 0.8
            ? "FULL STRUCTURAL DECONSTRUCTION"
            : `EXPLODED VIEW REVEAL — ${Math.round(explodeFactor * 100)}%`}
        </span>
      </div>
    </div>
  );
}
