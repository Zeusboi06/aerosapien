"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Award, Target } from "lucide-react";

const whyPoints = [
  { label: "5-Axis High Precision CNC Machining", sub: "Class-1 Critical Aerospace & Defence Components" },
  { label: "GD&T Based Precision Control", sub: "Aerospace-Grade Materials & 100% CMM Verification" },
  { label: "Titanium · Inconel · Aluminium · Steel", sub: "Multi-material high-temperature machining capabilities" },
  { label: "Mission-Critical Flight Hardware", sub: "LCA Tejas, ISRO Space Missions & UAV Structural Assemblies" },
  { label: "100% Quality Inspection & Traceability", sub: "AS9100D & ISO 9001:2015 Compliant Quality Assurance" },
  { label: "Indigenous Manufacturing Partner", sub: "Supporting Atmanirbhar Bharat in Aerospace & Defence" },
];

export default function WhyAerosapien() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".why-item");
      gsap.fromTo(
        items,
        { y: 25, opacity: 0 },
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
    <Section id="why-us" ref={sectionRef} className="bg-slate-50 relative overflow-hidden py-20 md:py-28 border-t border-slate-200">
      {/* Header */}
      <div className="flex flex-col items-center mb-16 text-center max-w-3xl mx-auto px-4">
        <span className="inline-flex items-center gap-2 text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs mb-3.5 bg-[var(--color-brand-accent)]/10 px-4 py-1.5 rounded-full border border-[var(--color-brand-accent)]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] animate-pulse" />
          Engineered for Certainty
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-deep-navy)] leading-tight tracking-tight">
          Why Industry Leaders<br />
          <span className="text-[var(--color-brand-accent)]">Choose AEROSAPIEN</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
          From aerospace structural assemblies to space propulsion components — AEROSAPIEN delivers 
          world-class precision manufacturing trusted by India&apos;s leading aerospace & defence organizations.
        </p>
      </div>

      {/* Main Grid: Premium Manufacturing Facility Showcase + Value Propositions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-7xl mx-auto px-4">
        
        {/* LEFT: Premium High-Precision CNC Aerospace Machining Facility Image */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-300 group h-[420px] sm:h-[480px] lg:h-[540px]">
          <Image
            src="/images/capabilities/cnc-machining.jpg"
            alt="Aerosapien — Advanced 5-Axis CNC Precision Machining Facility"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)]/90 via-[var(--color-deep-navy)]/30 to-transparent" />

          {/* Floating Facility Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
              <Target className="w-3.5 h-3.5 text-[var(--color-brand-accent)]" />
              Advanced CNC Facility
            </span>
          </div>

          {/* Overlay Stat Metrics */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { val: "ISO 9001", label: "Certified" },
                { val: "AS9100D", label: "Quality Standards" },
                { val: "±0.001mm", label: "Precision" },
              ].map((s, i) => (
                <div key={i} className="bg-slate-950/80 backdrop-blur-md border border-white/15 rounded-xl p-3 text-center">
                  <div className="text-white font-bold text-xs sm:text-sm font-mono tracking-tight">{s.val}</div>
                  <div className="text-slate-300 text-[10px] mt-0.5 font-sans leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Value Proposition List */}
        <div className="lg:col-span-7 space-y-3.5">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-4">
            Aerospace Manufacturing Excellence
          </p>

          {whyPoints.map((pt, i) => (
            <div
              key={i}
              className="why-item flex items-start gap-4 bg-white border border-slate-200/90 rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)]/30 transition-all duration-300 group"
            >
              <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-accent)] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <span className="block text-sm sm:text-base font-bold text-[var(--color-deep-navy)]">{pt.label}</span>
                <span className="block text-xs sm:text-sm text-slate-500 mt-0.5 font-sans">{pt.sub}</span>
              </div>
            </div>
          ))}

          {/* Commitment Highlight Card */}
          <div className="mt-6 bg-[var(--color-deep-navy)] rounded-xl p-6 text-white border border-slate-800 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[var(--color-brand-accent)]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent)]">Our Commitment to Quality</p>
            </div>
            <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
              At AEROSAPIEN, precision is more than a manufacturing capability — it is our culture.
              Every project is executed with strict attention to detail, ensuring every component
              meets the demanding standards required for aerospace, defence, space exploration, and medical platforms.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
}
