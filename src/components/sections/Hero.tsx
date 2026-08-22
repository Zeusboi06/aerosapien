"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && statsRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        textRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 }
      ).fromTo(
        statsRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
        "-=0.4"
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] w-full flex items-center bg-[#070D18] overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/aerospace-bg.jpg"
          alt="Aerospace Manufacturing"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/80 to-[#070D18]/40" />
      </div>

      {/* Main Content Container — Lowered Position & Mobile Optimized */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-48 pb-16 lg:pb-20">
        <div ref={textRef} className="max-w-3xl">
          {/* Distinct Top Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full border border-[#00b5e2]/30 bg-[#00b5e2]/10 backdrop-blur-md mb-5 sm:mb-6 mt-2 sm:mt-4 shadow-lg max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#00b5e2] mr-2 shrink-0 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-white/90 truncate sm:whitespace-normal font-mono">
              Precision Aerospace Manufacturing — Bengaluru, India
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.12] tracking-tight">
            Engineering India&apos;s
            <br />
            <span className="text-[#00b5e2]">Aerospace Future.</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-xs sm:text-base text-white/70 max-w-xl leading-relaxed font-sans">
            At AEROSAPIEN, we transform engineering excellence into mission-critical solutions for the aerospace, space, defence, and medical automation industries. By combining advanced manufacturing technologies with aerospace-quality standards, we deliver precision-engineered components and assemblies that power some of India&apos;s most ambitious programs.
          </p>

          {/* Full-width touch buttons on mobile */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#capabilities"
              className="w-full sm:w-auto text-center px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#00b5e2] text-white rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(0,181,226,0.4)] hover:scale-105 active:scale-95"
            >
              Explore Capabilities
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/25 text-white rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Responsive Stats bar */}
        <div
          ref={statsRef}
          className="mt-10 sm:mt-12 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6"
        >
          <div>
            <div className="text-xl sm:text-3xl font-bold text-white font-mono">0.005 mm</div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-sans mt-0.5">Machining Precision</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-white font-mono">ISO 9001:2015</div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-sans mt-0.5">Certified Quality System</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-white font-mono">100% CMM</div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-sans mt-0.5">Dimensional Inspection</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-white font-mono">Class-1</div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-sans mt-0.5">Flight Structural Parts</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-white font-mono">98%</div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-sans mt-0.5">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
