"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !statsRef.current) return;

    const tl = gsap.timeline({ delay: 0.4 });

    tl.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out" }
    );

    tl.fromTo(
      statsRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power2.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/aerospace-bg.jpg"
          alt="Aerospace Manufacturing"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1728] via-[#0B1728]/75 to-[#0B1728]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div ref={textRef} className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] mr-2 animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/80">
              Precision Aerospace Manufacturing — Bengaluru, India
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
            Engineering India&apos;s
            <br />
            <span className="text-[var(--color-brand-accent)]">Aerospace Future.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/60 max-w-xl leading-relaxed font-sans">
            From precision CNC machining of titanium components to full-scale UAV structural assemblies —
            we manufacture the critical parts that power aerospace programmes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#capabilities"
              className="px-7 py-3.5 text-sm font-bold tracking-wider uppercase bg-[var(--color-brand-accent)] text-white rounded transition-all duration-200 shadow-[0_4px_0_#007a99,0_6px_20px_rgba(0,181,226,0.3)] hover:shadow-[0_2px_0_#007a99,0_4px_12px_rgba(0,181,226,0.2)] hover:translate-y-px active:shadow-none active:translate-y-1"
            >
              Explore Capabilities
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 text-sm font-semibold tracking-wider uppercase border border-white/25 text-white rounded hover:bg-white/10 transition-all duration-300 shadow-[0_2px_0_rgba(255,255,255,0.08)]"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Compact Stats bar */}
        <div
          ref={statsRef}
          className="mt-10 pt-6 border-t border-white/10 grid grid-cols-4 gap-6"
        >
          {[
            { val: "\u00b10.01", unit: "mm", label: "Machining Precision" },
            { val: "500+", unit: "", label: "Components Delivered" },
            { val: "15+", unit: "yrs", label: "Industry Experience" },
            { val: "100%", unit: "", label: "Material Traceability" },
          ].map((s, i) => (
            <div key={i}>
              <span className="text-2xl md:text-3xl font-bold text-white">{s.val}</span>
              {s.unit && <span className="text-[var(--color-brand-accent)] text-sm font-bold ml-1">{s.unit}</span>}
              <p className="text-[11px] text-white/40 mt-0.5 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
