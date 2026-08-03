import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";

const components = [
  { title: "Landing Gear Structural Components", desc: "High-strength aerospace aluminium alloy load-bearing landing gear fittings, critically bored and precision CNC machined." },
  { title: "Wing Structural Components", desc: "Lightweight yet durable aerospace-grade wing structural hardware with tight tolerances and multi-axis machining." },
  { title: "Fuselage Structural Components", desc: "Corrosion-resistant, aerospace certified fuselage panels and structural members with high precision milling." },
  { title: "Aircraft Structural Assemblies", desc: "Complex multi-part structural assemblies with high accuracy, repeatability, and structural integrity verification." },
  { title: "Precision CNC Machined Aerospace Parts", desc: "Multi-axis CNC machined parts for mission-critical applications with superior surface finish and 100% dimensional inspection." },
];

const mfgExcellence = [
  "Supporting the LCA TEJAS Mk1A programme",
  "Aerospace-grade Aluminium, Titanium, Inconel & Stainless Steel",
  "Critical tolerances maintained up to ±0.001 mm",
  "100% Dimensional Inspection",
  "Advanced 3, 4 & 5 Axis CNC Manufacturing",
  "Aerospace Quality Documentation & Traceability",
];

const droneComponents = [
  "Motor Mounts",
  "Landing Gear Systems",
  "Landing Gear Attachments",
  "T-Joints & Y-Joints",
  "Structural Brackets",
  "Aluminium Structural Assemblies",
  "Custom UAV Components",
];

const droneImages = [
  "/images/clients/ig-drones/drone-1.png",
  "/images/clients/ig-drones/drone-2.png",
  "/images/clients/ig-drones/drone-3.png",
  "/images/clients/ig-drones/drone-4.png",
];

export default function HalPage() {
  return (
    <main className="min-h-screen bg-[#070D18] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-[#00b5e2] hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-14 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Client Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            HAL — LCA Tejas <span className="text-[#00b5e2]">Fighter Aircraft Programme</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed font-sans mb-4">
            AEROSAPIEN manufactures <strong className="text-white">Class-1 Critical Structural Aerospace Components</strong> for
            the HAL LCA TEJAS programme — supporting India&apos;s indigenous fighter aircraft programme.
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#00b5e2] bg-[#00b5e2]/10 border border-[#00b5e2]/20 px-4 py-2 rounded-full">
            Atmanirbhar Bharat — Indigenous Support
          </div>
        </div>

        {/* Tejas hero image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-14 border border-slate-800">
          <Image
            src="/images/about/aerosapien-tejas.jpg"
            alt="HAL LCA Tejas — Aerosapien Precision Manufacturing"
            fill
            className="object-contain bg-[#f0f5ff]"
            unoptimized
          />
        </div>

        {/* Components */}
        <h2 className="text-2xl font-bold mb-6">Components We Manufacture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {components.map((comp, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-[#00b5e2]/30 transition-all duration-300">
              <CheckCircle2 className="w-5 h-5 text-[#00b5e2] mb-3" />
              <h3 className="font-bold text-white text-sm mb-2">{comp.title}</h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">{comp.desc}</p>
            </div>
          ))}
        </div>

        {/* Manufacturing Excellence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-5">Manufacturing Excellence</h2>
            <ul className="space-y-3">
              {mfgExcellence.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00b5e2] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 content-start">
            <div className="relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-slate-800 group">
              <Image src="/images/products/lca-wing-structural.png" alt="Wing Structural" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" unoptimized />
            </div>
            <div className="relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-slate-800 group">
              <Image src="/images/products/lca-landing-gear.png" alt="Landing Gear" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" unoptimized />
            </div>
            <div className="relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-slate-800 group">
              <Image src="/images/products/lca-cnc-assembly.png" alt="CNC Assembly" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" unoptimized />
            </div>
            <div className="relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-slate-800 group">
              <Image src="/images/products/lca-structural-bracket.png" alt="Structural Bracket" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" unoptimized />
            </div>
          </div>
        </div>

        {/* IG Drones section */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/60 border border-[#00b5e2]/20 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#00b5e2]/10 border border-[#00b5e2]/20 flex items-center justify-center flex-shrink-0 text-xl">🛡️</div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00b5e2]">Also Supporting</span>
              <h2 className="text-xl font-bold mt-1">IG Drones Pvt. Ltd. & SkyX Aerospace</h2>
              <p className="text-slate-400 text-sm mt-1 font-sans">
                Precision Manufacturing for Defence UAV Platforms — Supporting India&apos;s indigenous defence drone ecosystem.
                Supporting structural components for <strong className="text-white">200 kg Class Logistics UAV Platforms</strong>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Components</p>
              <div className="grid grid-cols-2 gap-2">
                {droneComponents.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300 font-sans">
                    <ChevronRight className="w-3 h-3 text-[#00b5e2] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Standards</p>
                <div className="flex flex-wrap gap-2">
                  {["Aerospace Grade Aluminium 6061", "±0.001 mm Critical Features", "100% Inspection & QA", "Lightweight High-Strength"].map((s, i) => (
                    <span key={i} className="text-xs text-slate-300 bg-slate-800 border border-slate-700 px-2 py-1 rounded">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {droneImages.map((img, i) => (
                <div key={i} className="relative aspect-square bg-white/5 rounded-lg overflow-hidden border border-slate-800 group">
                  <Image src={img} alt={`IG Drones UAV ${i + 1}`} fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" unoptimized />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/clients/isro" className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-600 transition-colors">
            ISRO Missions <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/clients/cbw" className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-600 transition-colors">
            CBW Medical <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-[#00b5e2]/10 hover:bg-[#00b5e2]/20 text-[#00b5e2] font-bold rounded-lg border border-[#00b5e2]/20 transition-colors">
            All Products <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}
