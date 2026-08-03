"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Image from "next/image";
import { 
  Wrench, 
  Layers, 
  ShieldCheck, 
  Compass, 
  Flame, 
  Cpu, 
  ChevronRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const capabilities = [
  {
    id: "cnc",
    icon: Wrench,
    title: "5-Axis High-Precision CNC Machining",
    badge: "Sub-Millimetre Accuracy",
    summary: "Micro-tolerance milling & turning for complex 3D aerospace geometries and load-bearing flight hardware.",
    materials: ["Titanium Grade 5 (Ti-6Al-4V)", "Inconel 718", "NCM Steel (EN24/EN36B)", "Aluminum 7075-T6"],
    tolerance: "±0.01 mm",
    caseExample: "LCA Tejas Light Combat Aircraft wing attachment fittings and landing gear components engineered for HAL.",
    image: "/images/products/lca-cnc-assembly.png",
    specs: ["5-Axis Simultaneous", "AS9100D Certified", "Full Traceability"]
  },
  {
    id: "additive",
    icon: Layers,
    title: "Complex 3D Aerospace Assemblies",
    badge: "Lightweight Structural",
    summary: "Advanced multi-axis structural frames engineered for high vibration and extreme G-force environments.",
    materials: ["Titanium Alloy (Ti-6Al-4V)", "Inconel 625/718", "AlSi10Mg Aluminum", "Aerospace Composites"],
    tolerance: "±0.01 mm",
    caseExample: "Regenerative cooling channel nozzles & complex space propulsion frames for Wipro 3D & Intech Additive.",
    image: "/images/products/lca-complex-frame.png",
    specs: ["Topology Optimized", "Vacuum-Rated", "High Strength-to-Weight"]
  },
  {
    id: "structural",
    icon: Cpu,
    title: "Wing & Fuselage Structural Components",
    badge: "Aero-Structure",
    summary: "Precision-milled structural brackets and flight-critical wing-fuselage connection hardware.",
    materials: ["Titanium Ti-6Al-4V", "High-Tensile Aerospace Alloy", "Stainless 316L / 15-5PH"],
    tolerance: "±0.01 mm",
    caseExample: "Critical primary structural load brackets for HAL LCA Tejas flight hardware and defence airframes.",
    image: "/images/products/lca-wing-structural.png",
    specs: ["DFM Optimized", "Zero-Defect Standard", "Stress-Tested"]
  },
  {
    id: "cmm",
    icon: ShieldCheck,
    title: "Precision Landing Gear & Metrology",
    badge: "Flight-Critical Safety",
    summary: "Heavy-duty precision landing gear sub-assemblies with 100% CMM measurement verification.",
    materials: ["Ultra-High Strength Steel (EN36B)", "Titanium Ti-6Al-4V", "Bronze Bushes"],
    tolerance: "Sub-micron CMM Repeatability",
    caseExample: "Landing gear shock-strut fittings & CMM inspection reports for ISRO & HAL aerospace platforms.",
    image: "/images/products/lca-landing-gear.png",
    specs: ["CMM 100% Verified", "NDT Tested", "Fatigue Certified"]
  },
  {
    id: "uav",
    icon: Compass,
    title: "UAV Airframe & Stabilizer Assemblies",
    badge: "Unmanned Aviation",
    summary: "Aerodynamic fin & tail-plane structural components engineered for next-generation unmanned aerial systems.",
    materials: ["Carbon Fiber Reinforced Polymers", "Aircraft Grade Aluminum 7075-T6", "POM / Delrin"],
    tolerance: "Precision Aerodynamic Fit",
    caseExample: "Tactical military-grade UAV fin sub-assemblies deployed with IG Drones & Indian Army systems.",
    image: "/images/products/lca-fin-assembly.png",
    specs: ["Low-RCS Fit", "Rapid Prototyping", "DGCA / Military Spec"]
  },
  {
    id: "combustion",
    icon: Flame,
    title: "Fuselage Panels & Thermal Propulsion R&D",
    badge: "Space & Defense R&D",
    summary: "High thermal-flux thrust panel assemblies and severe environment protection components.",
    materials: ["Copper-Chromium-Niobium (CuCrNb)", "Inconel 718", "Ceramic Matrix Composites"],
    tolerance: "High-Pressure Seal Fit",
    caseExample: "Propulsion R&D and cryogenic upper-stage hardware for ISRO & Bellatrix Aerospace propulsion systems.",
    image: "/images/products/lca-fuselage-panel.png",
    specs: ["3000°F Thermal Rated", "Ultrasonic NDT", "Cleanroom Packaged"]
  },
];

export default function CapabilityDeepDive() {
  const [activeTab, setActiveTab] = useState<string>("cnc");
  const selectedCap = capabilities.find((c) => c.id === activeTab) || capabilities[0];
  const Icon = selectedCap.icon;

  return (
    <Section id="capabilities" className="bg-[#070D18] text-white relative overflow-hidden py-24 border-y border-slate-800/60">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00b5e2]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <span className="inline-flex items-center gap-2 text-[#00b5e2] font-semibold tracking-[0.2em] uppercase text-xs px-4 py-1.5 rounded-full bg-[#00b5e2]/10 border border-[#00b5e2]/20 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Technical Specifications & Engineering
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 tracking-tight text-white">
          Capabilities & <span className="text-[#00b5e2]">Flight Hardware</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-4 font-sans max-w-2xl mx-auto leading-relaxed">
          Explore our core manufacturing disciplines, real flight-ready components, 
          materials, tolerance thresholds, and certified defence case studies.
        </p>
      </div>

      {/* Tabbed Interactive Layout */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Capability Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {capabilities.map((cap) => {
            const TabIcon = cap.icon;
            const isActive = activeTab === cap.id;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap.id)}
                className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all duration-300 group ${
                  isActive
                    ? "bg-[#00b5e2] border-[#00b5e2] text-white shadow-lg shadow-[#00b5e2]/25 translate-y-[-2px]"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                <TabIcon className={`w-5 h-5 mb-2 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-white" : "text-[#00b5e2]"}`} />
                <span className="text-xs font-semibold leading-tight line-clamp-1">{cap.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Active Capability Showcase Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square max-w-[360px] bg-white/95 rounded-2xl p-6 border border-slate-700/50 shadow-xl flex items-center justify-center group overflow-hidden">
                <Image
                  src={selectedCap.image}
                  alt={selectedCap.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {selectedCap.specs.map((spec, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-[11px] font-medium text-slate-300 bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#00b5e2] mr-1.5" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00b5e2] bg-[#00b5e2]/10 px-3 py-1 rounded-md mb-3 border border-[#00b5e2]/20">
                  <Icon className="w-4 h-4" />
                  {selectedCap.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {selectedCap.title}
                </h3>
                <p className="text-slate-300 font-sans text-sm sm:text-base mt-3 leading-relaxed">
                  {selectedCap.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Compatible Materials */}
                <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Materials Handled
                  </span>
                  <ul className="space-y-1.5">
                    {selectedCap.materials.map((mat, i) => (
                      <li key={i} className="text-xs text-slate-200 flex items-center font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00b5e2] mr-2 flex-shrink-0" />
                        {mat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tolerance Rating */}
                <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Precision Tolerance
                    </span>
                    <span className="inline-block bg-[#00b5e2]/20 text-[#00b5e2] font-mono text-sm font-bold px-3 py-1.5 rounded-lg border border-[#00b5e2]/30">
                      {selectedCap.tolerance}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-3 font-sans">
                    Validated via CMM Coordinate Measuring & AS9100D standards.
                  </p>
                </div>
              </div>

              {/* Case Study Example */}
              <div className="bg-[#00b5e2]/5 border border-[#00b5e2]/20 rounded-xl p-4">
                <span className="block text-xs font-bold text-[#00b5e2] uppercase tracking-wider mb-1">
                  Flight Heritage Case Study
                </span>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {selectedCap.caseExample}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}
