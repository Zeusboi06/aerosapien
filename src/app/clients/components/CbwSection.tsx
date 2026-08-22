"use client";
import { useState } from "react";
import Image from "next/image";
import { Activity, Maximize2, ZoomIn } from "lucide-react";
import PosterLightbox from "@/components/ui/PosterLightbox";

export default function CbwSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const cbwProducts = [
    {
      title: "Microfluidic & Reagent Temperature Control Module",
      desc: "Precision CNC milled thermal management plate and reagent module housing providing uniform heat dissipation for automated biochemical sample processing.",
      material: "High Thermal Conductivity Copper / Aluminium Alloy",
      image: "/images/products/microfluidic_transparent.png",
      tags: ["Thermal Control", "Corrosion Resistant", "Cleanroom Compatible"]
    },
    {
      title: "Genomic Pipetting Robotics Drive Bracket",
      desc: "Structural attachment bracket for high-speed multi-channel automated liquid handler pipetting robotics.",
      material: "Aircraft Grade Aluminium Billet",
      image: "/images/homepage_components/comp1.jpeg",
      tags: ["Robotics Drive", "Zero Defect", "Cleanroom Assembly"]
    },
    {
      title: "BELUGA Automated System Main Frame Component",
      desc: "Main structural frame assembly providing structural rigidity and precision optical alignment for genomic diagnostic hardware.",
      material: "Aerospace Aluminium Alloy",
      image: "/images/homepage_components/comp5.jpeg",
      tags: ["Main Chassis", "GD&T Controlled", "High Accuracy"]
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
      <div className="max-w-4xl">
        <span className="inline-flex items-center gap-2 text-[#00b5e2] font-semibold tracking-[0.2em] uppercase text-xs px-4 py-1.5 rounded-full bg-[#00b5e2]/10 border border-[#00b5e2]/20 mb-4">
          <Activity className="w-3.5 h-3.5" />
          Medical Automation & Precision Engineering
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          Cambrian Bioworks <span className="text-[#00b5e2]">Pvt. Ltd.</span>
        </h2>
        <p className="text-lg text-[#00b5e2] font-medium mb-4">
          Aerospace Micro-Machining Standards for Advanced Healthcare Platforms
        </p>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans max-w-3xl">
          AEROSAPIEN manufactures complete precision structural assemblies and thermal management modules for the <strong className="text-white">BELUGA Automated Genomic Sample Preparation Platform</strong>, applying aerospace quality control standards to medical laboratory automation.
        </p>
      </div>

      {/* Official Cambrian Bioworks BELUGA Infographic Poster Hero Banner with Lightbox Trigger */}
      <div 
        onClick={() => setLightboxOpen(true)}
        className="relative w-full aspect-[16/9] min-h-[380px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group cursor-pointer"
      >
        <Image
          src="/images/posters/cbw_beluga_poster.jpg"
          alt="Cambrian Bioworks BELUGA Platform Infographic Poster"
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
          <span className="text-xs font-bold text-white font-mono">BELUGA Automated Genomic Platform · Click to Expand Poster</span>
        </div>
      </div>

      <PosterLightbox
        src="/images/posters/cbw_beluga_poster.jpg"
        alt="Cambrian Bioworks BELUGA Infographic Poster"
        title="Cambrian Bioworks — BELUGA Automated Genomic Platform Infographic"
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cbwProducts.map((prod, i) => (
          <div key={i} className="bg-[#0B1728] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#00b5e2]/40 transition-all duration-300">
            <div className="relative w-full h-56 bg-[#060E18] border-b border-slate-800 p-5 flex items-center justify-center">
              <Image
                src={prod.image}
                alt={prod.title}
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#00b5e2] uppercase tracking-wider block mb-1">Product {i + 1} · Medical Automation</span>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{prod.title}</h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">{prod.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <div className="text-xs text-slate-300 font-sans">
                  <strong className="text-slate-400">Material:</strong> {prod.material}
                </div>
                <div className="flex flex-wrap gap-1">
                  {prod.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-semibold bg-[#00b5e2]/10 text-[#00b5e2] border border-[#00b5e2]/20 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
