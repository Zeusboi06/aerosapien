"use client";

import { useState } from "react";
import Section from "@/components/Section";
import LazyCanvas from "@/components/3d/LazyCanvas";
import InspectScene from "@/components/3d/InspectScene";
import { Info, RotateCw, MousePointerClick } from "lucide-react";

const hotspots = [
  {
    id: 1,
    title: "5-Axis CNC Flange Interface",
    spec: "Tolerance: ±0.004 mm | Surface Finish: Ra 0.4 µm",
    desc: "Machined from solid aircraft-grade Titanium Ti-6Al-4V block. 12-bolt pattern for cryogenic seal.",
  },
  {
    id: 2,
    title: "Cooling Channel Jacket",
    spec: "Material: Inconel 718 Superalloy",
    desc: "3D printed additive manufacturing with internal cooling micro-channels for thermal management.",
  },
  {
    id: 3,
    title: "Cryogenic Nozzle Throat",
    spec: "Thermal Flux: > 15 MW/m² | NDT Tested",
    desc: "Designed for ISRO Cryogenic Upper Stage thrust application. CuCrNb alloy lining.",
  },
];

export default function InspectViewer() {
  const [activeHotspot, setActiveHotspot] = useState(hotspots[0]);

  return (
    <Section id="inspect" className="bg-[#060E18] text-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
          Interactive 3D Inspection
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">
          Rotate & Inspect Flagship Component
        </h2>
        <p className="text-slate-400 text-sm mt-2 font-sans">
          Drag to rotate the 3D model. Select hotspots to inspect structural specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center max-w-6xl mx-auto">
        {/* 3D Canvas */}
        <div className="lg:col-span-2 h-[500px] bg-gradient-to-b from-slate-900/50 to-[#060E18] rounded-2xl border border-white/10 relative overflow-hidden cursor-grab active:cursor-grabbing shadow-2xl">
          <LazyCanvas className="w-full h-full">
            <InspectScene activeHotspot={activeHotspot.id} />
          </LazyCanvas>

          {/* Controls overlay */}
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded text-xs font-mono text-slate-300 flex items-center space-x-2">
            <RotateCw className="w-3.5 h-3.5 text-[var(--color-brand-accent)] animate-spin" style={{ animationDuration: '6s' }} />
            <span>DRAG TO ROTATE 360°</span>
          </div>

          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded text-xs font-mono text-slate-300 flex items-center space-x-2">
            <MousePointerClick className="w-3.5 h-3.5 text-[var(--color-brand-accent)]" />
            <span>SELECT HOTSPOTS →</span>
          </div>
        </div>

        {/* Hotspot details sidebar */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
            Interactive Hotspots
          </h3>
          {hotspots.map((hs) => {
            const isSelected = activeHotspot.id === hs.id;
            return (
              <div
                key={hs.id}
                onClick={() => setActiveHotspot(hs)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "bg-white/10 border-[var(--color-brand-accent)] shadow-[0_0_20px_rgba(0,181,226,0.15)]"
                    : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-[var(--color-brand-accent)]" : "text-slate-500"}`}>
                    HOTSPOT 0{hs.id}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? "bg-[var(--color-brand-accent)] shadow-[0_0_8px_rgba(0,181,226,0.8)]" : "bg-slate-600"}`} />
                </div>
                <h4 className="font-bold text-white text-sm">{hs.title}</h4>
                {isSelected && (
                  <div className="mt-2.5 pt-2.5 border-t border-white/10 space-y-1 text-xs font-sans">
                    <p className="font-mono text-[var(--color-brand-accent)] text-[11px]">{hs.spec}</p>
                    <p className="text-slate-400">{hs.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
