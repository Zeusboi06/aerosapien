"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import {
  Wrench,
  Plane,
  ShieldCheck,
  Rocket,
  Gauge,
  Wifi,
  Microscope,
  Sparkles,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

const capabilitiesCategories = [
  {
    title: "Precision CNC Manufacturing",
    description: "Sub-millimetre tolerances up to ±0.001 mm across titanium Grade 5, Inconel 718, NCM steel, aluminium, and stainless alloys.",
    icon: Wrench,
    tag: "5-Axis Machining",
    specs: ["5-Axis Simultaneous", "±0.001 mm Tolerance", "Multi-Material"],
    accent: "#00b5e2",
  },
  {
    title: "Aerospace Structural Components",
    description: "Primary load-bearing wing attachment fittings, landing gear shock struts, and fuselage structural frames engineered for airframes.",
    icon: Plane,
    tag: "Aero-Structures",
    specs: ["HAL LCA Tejas", "DO-160G Compliant", "AS9100D Standards"],
    accent: "#1B6CA8",
  },
  {
    title: "Defence Manufacturing",
    description: "High-stress, mission-critical components built for extreme military environments, tactical platforms, and ground support equipment.",
    icon: ShieldCheck,
    tag: "Military Spec",
    specs: ["MIL-SPEC Standards", "DRDO Verified", "Battle-Ready Quality"],
    accent: "#0A2342",
  },
  {
    title: "Flight Hardware",
    description: "Vacuum-rated, vibration-tested flight hardware including PS4 combustion chamber parts and cryogenic propulsion components.",
    icon: Rocket,
    tag: "Space Systems",
    specs: ["ISRO LPSC Certified", "Gaganyaan Mission", "Vacuum-Rated"],
    accent: "#00b5e2",
  },
  {
    title: "Technical Specifications",
    description: "Strict GD&T controlled manufacturing, 100% CMM Coordinate Measuring Machine verification, and complete material batch traceability.",
    icon: Gauge,
    tag: "Quality Control",
    specs: ["CMM 100% Inspected", "GD&T Controlled", "Full Traceability"],
    accent: "#1B6CA8",
  },
  {
    title: "UAV Systems",
    description: "Lightweight structural airframe assemblies, fin attachment units, T/Y joints, and motor mounts for 200 kg class logistics UAVs.",
    icon: Wifi,
    tag: "Unmanned Aviation",
    specs: ["IG Drones Partner", "Logistics UAV Class", "High Strength/Weight"],
    accent: "#0A2342",
  },
  {
    title: "Research & Development",
    description: "Pioneering advanced regenerative cooling channel geometries, thermal protection systems, and high-temperature material research.",
    icon: Microscope,
    tag: "Innovation",
    specs: ["IISc Collaboration", "Propulsion R&D", "IP Creation"],
    accent: "#00b5e2",
  },
  {
    title: "Custom Engineering Solutions",
    description: "End-to-end custom manufacturing, Design for Manufacturability (DFM) consulting, rapid prototyping, and reverse engineering.",
    icon: Sparkles,
    tag: "Tailored Engineering",
    specs: ["DFM Optimization", "72-Hr Prototyping", "Turnkey Assemblies"],
    accent: "#1B6CA8",
  },
];

const technicalMetrics = [
  { label: "Precision Tolerance", value: "±0.001 mm", sub: "Micro-machining standard" },
  { label: "Aerospace Alloys", value: "12+", sub: "Titanium, Inconel, Aluminium" },
  { label: "Certifications", value: "AS9100D", sub: "ISO 9001:2015 Compliant" },
  { label: "Rapid Turnaround", value: "72 hrs", sub: "CAD to Prototype" },
  { label: "Operational Facility", value: "24/7", sub: "Precision CNC Center" },
  { label: "Quality Standard", value: "Zero-Defect", sub: "100% CMM Verification" },
];

export default function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".cap-card");
      gsap.fromTo(
        cards,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (specsRef.current) {
      const items = specsRef.current.querySelectorAll(".spec-item");
      gsap.fromTo(
        items,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: specsRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <Section id="capabilities" className="bg-[#f8fa08]/0 bg-slate-50 relative overflow-hidden py-20 md:py-28 border-t border-slate-200/80">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-brand-accent)]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-deep-navy)]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center max-w-3xl mx-auto relative z-10 px-4">
        <span className="inline-flex items-center gap-2 text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs mb-3.5 bg-[var(--color-brand-accent)]/10 px-4 py-1.5 rounded-full border border-[var(--color-brand-accent)]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] animate-pulse" />
          Engineering Excellence
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-deep-navy)] tracking-tight leading-tight">
          Capabilities & <span className="text-[var(--color-brand-accent)]">Flight Hardware</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
          Comprehensive aerospace precision manufacturing, flight-certified hardware engineering, 
          and advanced industrial production for India&apos;s leading space and defence organizations.
        </p>
      </div>

      {/* Engineering Technical Metrics Bar */}
      <div
        ref={specsRef}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-200/80 rounded-2xl overflow-hidden mb-16 border border-slate-200 shadow-sm relative z-10"
      >
        {technicalMetrics.map((metric, i) => (
          <div
            key={i}
            className="spec-item bg-white px-4 py-5 flex flex-col items-center text-center hover:bg-[var(--color-deep-navy)] group transition-colors duration-300 cursor-default"
          >
            <span className="text-xl sm:text-2xl font-bold text-[var(--color-deep-navy)] group-hover:text-white transition-colors duration-300 font-mono tracking-tight">
              {metric.value}
            </span>
            <span className="text-[11px] font-bold text-[var(--color-brand-accent)] group-hover:text-sky-300 mt-1 transition-colors duration-300 uppercase tracking-wider">
              {metric.label}
            </span>
            <span className="text-[10px] text-slate-400 group-hover:text-slate-300 mt-0.5 transition-colors duration-300 font-sans">
              {metric.sub}
            </span>
          </div>
        ))}
      </div>

      {/* 8 Category Capabilities Grid */}
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 px-4"
      >
        {capabilitiesCategories.map((cap, index) => {
          const Icon = cap.icon;
          return (
            <div
              key={index}
              className="cap-card group relative bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-[var(--color-brand-accent)]/40 hover:shadow-xl hover:shadow-[var(--color-deep-navy)]/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-deep-navy)] to-[var(--color-brand-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[var(--color-brand-accent)] bg-[var(--color-brand-accent)]/10 px-2.5 py-1 rounded-md border border-[var(--color-brand-accent)]/20">
                    {cap.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100/80 flex items-center justify-center text-[var(--color-deep-navy)] group-hover:bg-[var(--color-deep-navy)] group-hover:text-white transition-all duration-300 shadow-inner">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[var(--color-deep-navy)] mb-2.5 leading-snug group-hover:text-[var(--color-brand-accent)] transition-colors duration-300 tracking-tight">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-5">
                  {cap.description}
                </p>
              </div>

              <div>
                {/* Specifications List */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {cap.specs.map((spec, si) => (
                    <div key={si} className="flex items-center text-[11px] font-medium text-slate-600 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-accent)] mr-2 shrink-0 opacity-90" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Subtle Action Link */}
                <div className="mt-5 pt-3 flex items-center justify-between text-xs font-bold text-[var(--color-deep-navy)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-200">
                  <span>Learn Specs</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
