"use client";
import { useState } from "react";
import Image from "next/image";
import { Rocket, Maximize2, ZoomIn } from "lucide-react";
import PosterLightbox from "@/components/ui/PosterLightbox";

export default function IsroSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const isroComponents = [
    { title: "PS4 Combustion Chamber Hardware", desc: "High thermal-flux components for the PS4 upper stage engine, vacuum-rated and thermal-shock tested.", img: "/images/homepage_components/comp6.jpeg" },
    { title: "LPSC Liquid Propulsion Valve Body", desc: "Precision liquid engine valve body and propellant manifold sub-assemblies for ISRO's Liquid Propulsion Systems Centre.", img: "/images/clients/isro/isro-hardware-2.png" },
    { title: "Gaganyaan Human Spaceflight Component", desc: "Mission-critical structural sub-assemblies for India's first human spaceflight mission.", img: "/images/clients/isro/isro-hardware-3.png" },
    { title: "Cryogenic Propulsion System Hardware", desc: "Cryogenic system hardware engineered for extreme sub-zero temperatures on GSLV & LVM3 launch vehicles.", img: "/images/clients/isro/isro-hardware-4.png" },
    { title: "Launch Vehicle Structural Ring", desc: "Vacuum-rated precision machined ring structures engineered for satellite launch platforms.", img: "/images/clients/isro/isro-hardware-5.png" },
    { title: "Propellant Tank Fitting Assembly", desc: "High-pressure fluid coupling and tank fittings machined from aerospace grade alloys.", img: "/images/clients/isro/isro-hardware-6.png" },
    { title: "Space Mechanism Structural Bracket", desc: "Micro-machined structural bracket engineered for satellite deployment mechanisms.", img: "/images/clients/isro/isro-hardware-7.png" },
    { title: "Orbital Payload Support Plate", desc: "Ultra-precise mechanical support plate with zero thermal distortion tolerance.", img: "/images/clients/isro/isro-hardware-8.png" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
      <div className="max-w-4xl">
        <span className="inline-flex items-center gap-2 text-[#00b5e2] font-semibold tracking-[0.2em] uppercase text-xs px-4 py-1.5 rounded-full bg-[#00b5e2]/10 border border-[#00b5e2]/20 mb-4">
          <Rocket className="w-3.5 h-3.5" />
          Indian Space Research Organisation (ISRO)
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          ISRO & LPSC <span className="text-[#00b5e2]">Space Missions</span>
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans max-w-3xl">
          Approved supplier to ISRO and the <strong className="text-white">Liquid Propulsion Systems Centre (LPSC)</strong>, delivering liquid propulsion components, PS4 combustion chamber hardware, and Gaganyaan human spaceflight assemblies.
        </p>
      </div>

      {/* Official ISRO LPSC Space Mission Infographic Poster Hero Banner with Lightbox Trigger */}
      <div 
        onClick={() => setLightboxOpen(true)}
        className="relative w-full aspect-[16/9] min-h-[380px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group cursor-pointer"
      >
        <Image
          src="/images/clients/isro/isro_lpsc_hero.jpg"
          alt="ISRO LPSC Precision Manufacturing — Gaganyaan & Astrobase Poster"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 90vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:via-black/20 transition-all duration-300" />
        
        {/* Click to View Fullscreen Badge */}
        <div className="absolute top-4 right-4 z-10 bg-[#00b5e2] text-white px-4 py-2 rounded-full font-semibold text-xs flex items-center gap-2 shadow-lg group-hover:scale-105 transition-all">
          <Maximize2 className="w-4 h-4" />
          <span>Click for Fullscreen HD View</span>
        </div>

        <div className="absolute bottom-4 left-4 z-10 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-800 flex items-center gap-2">
          <ZoomIn className="w-4 h-4 text-[#00b5e2]" />
          <span className="text-xs font-bold text-white font-mono">ISRO LPSC Space Mission Hardware · Click to Expand Poster</span>
        </div>
      </div>

      <PosterLightbox
        src="/images/clients/isro/isro_lpsc_hero.jpg"
        alt="ISRO LPSC & Astrobase Infographic Poster"
        title="ISRO LPSC — Precision Manufacturing for India's Space Missions"
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isroComponents.map((comp, i) => (
          <div key={i} className="bg-[#0B1728] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#00b5e2]/40 transition-all duration-300">
            <div className="relative w-full h-48 bg-[#060E18] border-b border-slate-800 p-4 flex items-center justify-center">
              <Image
                src={comp.img}
                alt={comp.title}
                fill
                className="object-contain p-3 hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#00b5e2] uppercase tracking-wider block mb-1">ISRO LPSC Component {i + 1}</span>
                <h3 className="font-bold text-white text-sm leading-snug mb-1">{comp.title}</h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">{comp.desc}</p>
              </div>
              <div className="pt-2 border-t border-slate-800 text-[10px] text-[#00b5e2] font-mono font-bold">
                Vacuum Rated · ±0.005 mm
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
