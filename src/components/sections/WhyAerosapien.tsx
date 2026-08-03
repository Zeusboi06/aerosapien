"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const whyPoints = [
  { label: "High Precision CNC Machining", sub: "Class-1 Critical Components" },
  { label: "GD&T Based Manufacturing", sub: "Aerospace Grade Materials" },
  { label: "Titanium · Aluminium · Inconel · Stainless Steel", sub: "Multi-material capability" },
  { label: "Mission Critical Assemblies", sub: "Medical Automation · Defence · Space Hardware" },
  { label: "100% Dimensional Inspection", sub: "Complete Manufacturing Traceability" },
  { label: "Made in India", sub: "Atmanirbhar Bharat — Precision Built" },
];

export default function WhyAerosapien() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".why-item");
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }
  }, []);

  return (
    <Section id="why-us" ref={sectionRef} className="bg-[#f8f9fc] relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center mb-14 text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 text-[var(--color-brand-accent)] font-semibold tracking-widest uppercase text-xs mb-4 bg-[var(--color-brand-accent)]/8 px-4 py-2 rounded-full border border-[var(--color-brand-accent)]/15">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] animate-pulse" />
          Engineered for Certainty
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-deep-navy)] leading-tight">
          Why Industry Leaders<br />
          <span className="text-[var(--color-brand-accent)]">Choose AEROSAPIEN</span>
        </h2>
        <p className="mt-5 text-base text-slate-500 font-sans leading-relaxed max-w-2xl">
          From Aerospace to Space, Defence to Medical Automation — AEROSAPIEN delivers world-class
          precision engineering solutions trusted by India&apos;s leading organizations.
        </p>
      </div>

      {/* Main grid: image + reasons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* LEFT: Exhibition / Pioneer image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[420px] lg:h-[500px]">
          <Image
            src="/images/about/aerosapien-about.jpg"
            alt="Aerosapien — Pioneer Aerospace Engineering & Manufacturing"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-deep-navy)]/80 via-[var(--color-deep-navy)]/20 to-transparent" />

          {/* Overlay stats */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "ISO 9001", label: "Certified" },
                { val: "AS9100D", label: "Standards" },
                { val: "±0.001mm", label: "Precision" },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center">
                  <div className="text-white font-bold text-sm font-mono">{s.val}</div>
                  <div className="text-white/60 text-[10px] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Why points */}
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-6">
            Aerospace Manufacturing Standards
          </p>
          {whyPoints.map((pt, i) => (
            <div
              key={i}
              className="why-item flex items-start gap-4 bg-white border border-slate-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)]/20 transition-all duration-300 group"
            >
              <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-accent)] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <span className="block text-sm font-bold text-[var(--color-deep-navy)]">{pt.label}</span>
                <span className="block text-xs text-slate-400 mt-0.5 font-sans">{pt.sub}</span>
              </div>
            </div>
          ))}

          <div className="mt-6 bg-[var(--color-deep-navy)] rounded-xl p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-2">Our Commitment</p>
            <p className="text-sm font-sans text-white/80 leading-relaxed">
              At AEROSAPIEN, precision is more than a manufacturing capability — it is our culture.
              Every project is executed with meticulous attention to detail, ensuring every component
              meets the demanding standards required for aerospace, defence, space exploration, and healthcare.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
