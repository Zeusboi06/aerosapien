"use client";
import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Maximize2, ZoomIn } from "lucide-react";
import PosterLightbox from "@/components/ui/PosterLightbox";

export default function HalSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const halComponents = [
    { title: "Landing Gear Structural Component", desc: "High-strength aerospace aluminium alloy load-bearing landing gear shock strut fittings for HAL LCA Tejas.", img: "/images/products/lca-landing-gear.png" },
    { title: "Wing Structural Attachment Fitting", desc: "Lightweight yet durable aerospace-grade wing structural hardware machined to ±0.005 mm tolerance.", img: "/images/products/lca-wing-structural.png" },
    { title: "Fuselage Structural Panel & Frame", desc: "Corrosion-resistant, aerospace certified fuselage panels and internal rib structures.", img: "/images/products/lca-fuselage-panel.png" },
    { title: "Aircraft Structural Assembly Bracket", desc: "Complex multi-part structural attachment brackets with 100% CMM metrology inspection.", img: "/images/products/lca-structural-bracket.png" },
    { title: "Precision CNC Machined Sub-Assembly", desc: "Multi-axis CNC machined parts for mission-critical aircraft applications with superior surface finish.", img: "/images/products/lca-cnc-assembly.png" },
    { title: "Complex Structural Airframe Frame", desc: "Topology lightened structural frame members machined on 5-axis CNC machining centers.", img: "/images/products/lca-complex-frame.png" },
    { title: "Precision Fin & Attachment Assembly", desc: "Aerodynamically contoured tail fin attachment assemblies for LCA Tejas flight platforms.", img: "/images/products/lca-fin-assembly.png" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
      <div className="max-w-4xl">
        <span className="inline-flex items-center gap-2 text-[#00b5e2] font-semibold tracking-[0.2em] uppercase text-xs px-4 py-1.5 rounded-full bg-[#00b5e2]/10 border border-[#00b5e2]/20 mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          Hindustan Aeronautics Limited (HAL)
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          HAL — LCA Tejas <span className="text-[#00b5e2]">Fighter Aircraft Programme</span>
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans max-w-3xl">
          AEROSAPIEN manufactures <strong className="text-white">Class-1 Critical Structural Aerospace Components</strong> for the <strong className="text-white">Hindustan Aeronautics Limited (HAL) LCA TEJAS Mk1A</strong> indigenous fighter aircraft programme.
        </p>
      </div>

      {/* Official HAL Tejas Infographic Poster Hero Banner with Lightbox Trigger */}
      <div 
        onClick={() => setLightboxOpen(true)}
        className="relative w-full aspect-[16/9] min-h-[380px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group cursor-pointer"
      >
        <Image
          src="/images/posters/hal_tejas_poster.jpg"
          alt="HAL LCA Tejas Fighter Jet & Major Projects Poster"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/30 transition-all duration-300" />
        
        {/* Click to View Fullscreen Badge */}
        <div className="absolute top-4 right-4 z-10 bg-[#00b5e2] text-white px-4 py-2 rounded-full font-semibold text-xs flex items-center gap-2 shadow-lg group-hover:scale-105 transition-all">
          <Maximize2 className="w-4 h-4" />
          <span>Click for Fullscreen HD View</span>
        </div>

        <div className="absolute bottom-4 left-4 z-10 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-800 flex items-center gap-2">
          <ZoomIn className="w-4 h-4 text-[#00b5e2]" />
          <span className="text-xs font-bold text-white font-mono">HAL LCA Tejas Mk1A Programme · Click to Expand Poster</span>
        </div>
      </div>

      <PosterLightbox
        src="/images/posters/hal_tejas_poster.jpg"
        alt="HAL LCA Tejas Infographic Poster"
        title="HAL LCA Tejas Programme — Class-1 Critical Structural Components"
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Expanded Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {halComponents.map((comp, i) => (
          <div key={i} className="bg-[#0B1728] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#00b5e2]/40 transition-all duration-300">
            <div className="relative w-full h-52 bg-[#060E18] border-b border-slate-800 p-5 flex items-center justify-center">
              <Image
                src={comp.img}
                alt={comp.title}
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#00b5e2] uppercase tracking-wider block mb-1">HAL Tejas Component {i + 1}</span>
                <h3 className="font-bold text-white text-base leading-snug mb-2">{comp.title}</h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">{comp.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-[#00b5e2] font-mono font-bold">
                <span>±0.005 mm Precision</span>
                <span>ISO 9001:2015</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
