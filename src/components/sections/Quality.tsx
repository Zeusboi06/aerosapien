"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const qualityPoints = [
  "Advanced CNC Machining to ±0.004 mm",
  "Precision CMM Inspection & Verification",
  "End-to-End Material Traceability",
  "AS9100D Compliant Quality Assurance",
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
        {/* Left: Image — using real Aerosapien CMM/machining photo */}
        <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/images/capabilities/cmm-metrology.jpg"
            alt="CMM Precision Inspection"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-[var(--color-deep-navy)]/20" />

          {/* Scanning line effect */}
          <div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-accent)] to-transparent"
            style={{
              animation: "scanLine 3s ease-in-out infinite",
            }}
          />

          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-[var(--color-brand-accent)]/30 px-4 py-2 rounded">
            <span className="text-xs font-mono text-[var(--color-brand-accent)] tracking-wider uppercase flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] animate-pulse" />
              <span>Auto-Inspection Active</span>
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

          <ul className="space-y-3">
            {qualityPoints.map((point, index) => (
              <li key={index} className="quality-item flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-accent)] flex-shrink-0" />
                <span className="text-slate-700 font-medium font-sans text-sm">{point}</span>
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
