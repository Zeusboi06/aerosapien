"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Image from "next/image";
import { ChevronDown, Layers, Cpu, ShieldCheck, Flame, Compass, Wrench } from "lucide-react";

const capabilities = [
  {
    id: "cnc",
    icon: Wrench,
    title: "5-Axis High-Precision CNC Machining",
    summary: "Micro-tolerance milling & turning for complex 3D aerospace geometries.",
    materials: ["Titanium Grade 5 (Ti-6Al-4V)", "Inconel 718", "NCM Steel (EN24/EN36B)", "Aluminum 7075-T6"],
    tolerance: "±0.004 mm",
    caseExample: "LCA Tejas Light Combat Aircraft wing attachment fittings and landing gear components for HAL.",
    image: "/images/capabilities/cnc-machining.jpg",
  },
  {
    id: "additive",
    icon: Layers,
    title: "Metal & Polymer Additive Manufacturing",
    summary: "Complex 3D printing and specialized post-processing of structural parts.",
    materials: ["Titanium Alloy Powder", "Inconel 625/718", "AlSi10Mg Aluminum", "Carbon Fiber Reinforced Polymers"],
    tolerance: "ISO 2768-m (±0.005 mm)",
    caseExample: "Regenerative cooling channel nozzles for space propulsion in collaboration with Wipro 3D & Intech Additive.",
    image: "/images/capabilities/additive-manufacturing.jpg",
  },
  {
    id: "cmm",
    icon: ShieldCheck,
    title: "CMM Metrology & Quality Inspection",
    summary: "State-of-the-art CMM verification with full material traceability.",
    materials: ["100% Material Certification", "Ultrasonic NDT", "Coordinate Measuring Inspection"],
    tolerance: "Sub-micron repeatability",
    caseExample: "AS9100D compliant quality inspection reports for ISRO cryogenic upper stage hardware.",
    image: "/images/capabilities/cmm-metrology.jpg",
  },
  {
    id: "uav",
    icon: Compass,
    title: "UAV Airframe & Structural Sub-assemblies",
    summary: "End-to-end design, prototyping, and production for unmanned air vehicles.",
    materials: ["Carbon Fiber Composites", "Aircraft-grade Aluminum", "Lightweight Delrin / POM"],
    tolerance: "Precision Aerodynamic Fit",
    caseExample: "Military-grade UAV airframe components with IG Drones, deployed by the Indian Army.",
    image: "/images/capabilities/uav-airframe.jpg",
  },
  {
    id: "combustion",
    icon: Flame,
    title: "Combustion Chamber & Propulsion R&D",
    summary: "High thermal-flux thrust chamber design and thermal barrier coatings.",
    materials: ["Copper-Chromium-Niobium (CuCrNb)", "Inconel 718", "Ceramic Matrix Composites"],
    tolerance: "High-pressure seal fit",
    caseExample: "Propulsion R&D for space launch vehicle upper stage engines with ISRO & Bellatrix Aerospace.",
    image: "/images/capabilities/combustion-propulsion.jpg",
  },
  {
    id: "medical",
    icon: Cpu,
    title: "Medical Implant 3D Post-Processing",
    summary: "Bio-compatible titanium finishing and sterile surface treatment.",
    materials: ["Bio-grade Titanium (Ti-6Al-4V ELI)", "Stainless Steel 316L Medical"],
    tolerance: "Bio-implant precise fit",
    caseExample: "Custom patient-matched orthopedic implants for IISc bio-engineering partners.",
    image: "/images/capabilities/medical-implant.jpg",
  },
];

export default function CapabilityDeepDive() {
  const [openId, setOpenId] = useState<string | null>("cnc");

  return (
    <Section id="capabilities" className="bg-[#0B1728] text-white">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
          Material & Process Deep-Dive
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
          Capabilities & Specifications
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-3 font-sans">
          Click any discipline to view material compatibility, tolerance thresholds, and real case examples.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-3">
        {capabilities.map((cap) => {
          const Icon = cap.icon;
          const isOpen = openId === cap.id;

          return (
            <div
              key={cap.id}
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                isOpen ? "border-[var(--color-brand-accent)]/50 bg-white/[0.06]" : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : cap.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isOpen ? "bg-[var(--color-brand-accent)] text-white" : "bg-white/10 text-[var(--color-brand-accent)]"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">{cap.title}</h3>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">{cap.summary}</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-[var(--color-brand-accent)]" : ""}`} />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm font-sans">
                  {/* Image */}
                  <div className="relative h-40 md:h-full rounded-lg overflow-hidden">
                    <Image src={cap.image} alt={cap.title} fill className="object-cover" unoptimized />
                  </div>

                  {/* Materials */}
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Materials</span>
                    <ul className="space-y-1">
                      {cap.materials.map((mat, i) => (
                        <li key={i} className="text-slate-300 text-xs flex items-center">
                          <span className="w-1 h-1 rounded-full bg-[var(--color-brand-accent)] mr-2" />
                          {mat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tolerance */}
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Tolerance</span>
                    <span className="inline-block bg-[var(--color-brand-accent)]/20 text-[var(--color-brand-accent)] font-mono font-bold px-3 py-1.5 rounded text-xs border border-[var(--color-brand-accent)]/30">
                      {cap.tolerance}
                    </span>
                  </div>

                  {/* Case Example */}
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Case Example</span>
                    <p className="text-xs text-slate-400 leading-relaxed">{cap.caseExample}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
