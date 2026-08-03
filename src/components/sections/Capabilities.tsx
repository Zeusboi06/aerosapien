"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import {
  Settings,
  Plane,
  Shield,
  Rocket,
  Flame,
  FlaskConical,
  Microscope,
  Wifi,
  ChevronRight,
} from "lucide-react";

const capabilities = [
  {
    title: "Precision CNC Machining",
    description: "Sub-millimetre tolerances up to ±0.001 mm across titanium, Inconel, NCM steel, aluminium, Delrin, and stainless steel alloys.",
    icon: Settings,
    tag: "Core",
    specs: ["5-Axis CNC", "±0.001 mm", "Multi-material"],
    accent: "#0A2342",
  },
  {
    title: "Aircraft Structures",
    description: "Critical load-bearing structural assemblies engineered for commercial and defence aviation at the highest airworthiness standards.",
    icon: Plane,
    tag: "Aviation",
    specs: ["LCA Tejas", "DO-160G", "AS9100D"],
    accent: "#1B6CA8",
  },
  {
    title: "Defence Components",
    description: "High-stress components designed for extreme military environments — from ground vehicles to guided munitions.",
    icon: Shield,
    tag: "Defence",
    specs: ["MIL-SPEC", "DRDO Approved", "Battle-ready"],
    accent: "#2C4E6E",
  },
  {
    title: "Space Systems",
    description: "Lightweight, ultra-durable parts for orbital and sub-orbital missions — vacuum-rated, vibration-tested, and zero-defect.",
    icon: Rocket,
    tag: "Space",
    specs: ["Vacuum-rated", "ISRO Supplier", "Lightweight"],
    accent: "#0A2342",
  },
  {
    title: "Combustion Chambers",
    description: "Advanced thermal-resistant propulsion assemblies capable of withstanding extreme heat and pressure cycles.",
    icon: Flame,
    tag: "Propulsion",
    specs: ["High-temp alloys", "3000°F rated", "NDE tested"],
    accent: "#1B6CA8",
  },
  {
    title: "Prototype Development",
    description: "Rapid engineering cycles from CAD concept to fully functional aerospace prototype — in days, not months.",
    icon: FlaskConical,
    tag: "R&D",
    specs: ["DFM consulting", "First-article", "Fast-turn"],
    accent: "#2C4E6E",
  },
  {
    title: "Research & Development",
    description: "Pioneering next-gen materials, manufacturing processes, and surface finishing techniques for aerospace applications.",
    icon: Microscope,
    tag: "Innovation",
    specs: ["Material R&D", "IISc Partner", "IP creation"],
    accent: "#0A2342",
  },
  {
    title: "UAV Systems",
    description: "Full structural manufacturing for next-generation unmanned aerial vehicles — from fuselage frames to landing gear.",
    icon: Wifi,
    tag: "UAV",
    specs: ["IG Drones", "Composite-ready", "DGCA Aware"],
    accent: "#1B6CA8",
  },
];

const specs = [
  { label: "Tolerances", value: "±0.001 mm", sub: "Industry-leading precision" },
  { label: "Materials", value: "12+", sub: "Aerospace-grade alloys" },
  { label: "Certifications", value: "AS9100D", sub: "ISO 9001:2015 compliant" },
  { label: "Turnaround", value: "72 hrs", sub: "Prototype to delivery" },
  { label: "Machine Hours", value: "24/7", sub: "Lights-out manufacturing" },
  { label: "Quality", value: "Zero-defect", sub: "Full inspection reports" },
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
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
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
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
    <Section id="capabilities" className="bg-[#f8f9fc] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A2342]/3 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1B6CA8]/4 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center mb-16 text-center max-w-3xl mx-auto relative">
        <span className="inline-flex items-center gap-2 text-[#1B6CA8] font-semibold tracking-widest uppercase text-xs mb-4 bg-[#1B6CA8]/8 px-4 py-2 rounded-full border border-[#1B6CA8]/15">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1B6CA8] animate-pulse" />
          Core Competencies
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] leading-tight">
          Built for Every<br />
          <span className="text-[#1B6CA8]">Aerospace Challenge</span>
        </h2>
        <p className="mt-5 text-lg text-slate-500 font-sans leading-relaxed max-w-2xl">
          From micro-precision CNC machining to full-scale UAV assemblies — we deliver
          engineering excellence across the entire aerospace spectrum.
        </p>
      </div>

      {/* Specs Bar */}
      <div
        ref={specsRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-200 rounded-2xl overflow-hidden mb-16 border border-slate-200 shadow-sm"
      >
        {specs.map((s, i) => (
          <div key={i} className="spec-item bg-white px-5 py-5 flex flex-col items-center text-center hover:bg-[#0A2342] group transition-colors duration-300 cursor-default">
            <span className="text-2xl font-bold text-[#0A2342] group-hover:text-white transition-colors duration-300 font-mono">{s.value}</span>
            <span className="text-xs font-semibold text-[#1B6CA8] group-hover:text-sky-200 mt-1 transition-colors duration-300 uppercase tracking-wider">{s.label}</span>
            <span className="text-[11px] text-slate-400 group-hover:text-slate-300 mt-0.5 transition-colors duration-300">{s.sub}</span>
          </div>
        ))}
      </div>

      {/* Capabilities Grid */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {capabilities.map((cap, index) => {
          const Icon = cap.icon;
          return (
            <div
              key={index}
              className="cap-card group relative bg-white border border-slate-100 rounded-2xl p-6 hover:border-[#1B6CA8]/30 hover:shadow-lg hover:shadow-[#0A2342]/8 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0A2342] to-[#1B6CA8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Tag */}
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#1B6CA8] bg-[#1B6CA8]/8 px-2 py-1 rounded-md mb-4">
                {cap.tag}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#f0f4f8] flex items-center justify-center text-[#0A2342] group-hover:bg-[#0A2342] group-hover:text-white transition-all duration-300 mb-4">
                <Icon className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#0A2342] mb-2 leading-snug group-hover:text-[#1B6CA8] transition-colors duration-300">
                {cap.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 font-sans leading-relaxed mb-4">
                {cap.description}
              </p>

              {/* Spec pills */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {cap.specs.map((s, si) => (
                  <span
                    key={si}
                    className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full group-hover:border-[#1B6CA8]/20 group-hover:text-[#1B6CA8] transition-colors duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <ChevronRight className="w-4 h-4 text-[#1B6CA8]" />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
