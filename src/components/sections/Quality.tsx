"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const qualityPoints = [
  "Advanced 5-Axis CNC Machining to ±0.005 mm",
  "Precision CMM Inspection & Verification",
  "End-to-End Material Traceability",
  "ISO 9001:2015 Compliant Quality Assurance",
  "Global Engineering & Safety Standards",
];

export default function Quality() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".quality-item");

      gsap.fromTo(
        items,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <Section id="quality" ref={containerRef} className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image — 5th image: CMM Quality Inspection with PASS readout */}
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200 group">
          <Image
            src="/images/quality/cmm_quality_inspection_standards.jpg"
            alt="Aerosapien CMM Precision Quality Inspection & AS9100 Standards"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)]/60 via-transparent to-transparent" />

          {/* Scanning line effect */}
          <div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-accent)] to-transparent"
            style={{
              animation: "scanLine 3s ease-in-out infinite",
            }}
          />

          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-[var(--color-brand-accent)]/30 px-4 py-2 rounded-lg">
            <span className="text-xs font-mono text-[var(--color-brand-accent)] tracking-wider uppercase flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] animate-pulse" />
              <span>Auto CMM Metrology Verified</span>
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-deep-navy)] mt-4 mb-6">
            Engineered for Certainty
          </h2>
          <p className="text-base text-slate-600 mb-8 font-sans leading-relaxed">
            In aerospace, there is no margin for error. Our inspection facilities employ
            state-of-the-art CMM technology to verify that every component meets rigorous
            international standards before it reaches the assembly line.
          </p>

          <ul className="space-y-3.5">
            {qualityPoints.map((point, index) => (
              <li key={index} className="quality-item flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-accent)] flex-shrink-0" />
                <span className="text-slate-700 font-semibold font-sans text-sm md:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes scanLine {
          0%, 100% { top: 0; }
          50% { top: 100%; }
        }
      `}</style>
    </Section>
  );
}
