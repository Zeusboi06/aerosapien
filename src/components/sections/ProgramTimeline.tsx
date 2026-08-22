"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import { Rocket, Shield, Crosshair, Plane, Microscope } from "lucide-react";

const milestones = [
  { year: "2021", partner: "ISRO & Bellatrix", program: "Gaganyaan & Cryo Upper Stage", icon: Rocket, desc: "Cryogenic upper stage engine components for India's first human spaceflight mission." },
  { year: "2022", partner: "HAL", program: "LCA Tejas Flight Hardware", icon: Shield, desc: "Critical load-bearing structural assemblies and landing gear fittings in titanium & NCM steel." },
  { year: "2023", partner: "IG Drones & Army", program: "Sky Defense UAV Airframes", icon: Crosshair, desc: "Military-grade UAV airframe components — now operationally deployed." },
  { year: "2024", partner: "Recaero / Airbus", program: "Global Aviation Supply", icon: Plane, desc: "High-precision components entering Airbus & Boeing production lines." },
  { year: "2025", partner: "Wipro 3D & IISc", program: "Additive & Propulsion R&D", icon: Microscope, desc: "Next-gen thrust chambers and 3D printed titanium medical implant technologies." },
];

export default function ProgramTimeline() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".tl-item");
      gsap.fromTo(items, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
      });
    }
  }, []);

  return (
    <Section id="timeline" ref={containerRef} className="bg-[#070F1A] text-white">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
          Program Milestones
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">Flight Heritage</h2>
      </div>

      {/* Horizontal timeline on desktop, vertical on mobile */}
      <div className="max-w-6xl mx-auto">
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="tl-item flex flex-col items-center text-center relative w-1/5 px-2">
                {/* Dot */}
                <div className="w-10 h-10 rounded-full bg-[#070F1A] border-2 border-[var(--color-brand-accent)] flex items-center justify-center mb-4 relative z-10 shadow-[0_0_12px_rgba(0,181,226,0.4)]">
                  <Icon className="w-4 h-4 text-[var(--color-brand-accent)]" />
                </div>
                <span className="text-xl font-mono font-bold text-[var(--color-brand-accent)]">{item.year}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider mt-1 font-mono">{item.partner}</span>
                <h3 className="text-sm font-bold text-white mt-2 leading-tight">{item.program}</h3>
                <p className="text-[11px] text-slate-400 font-sans mt-1.5 leading-snug">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile vertical list */}
        <div className="md:hidden space-y-6 border-l-2 border-white/10 ml-4 pl-6">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="tl-item relative">
                <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-[#070F1A] border-2 border-[var(--color-brand-accent)] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)]" />
                </div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-lg font-mono font-bold text-[var(--color-brand-accent)]">{item.year}</span>
                  <span className="text-[10px] text-slate-500">— {item.partner}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{item.program}</h3>
                <p className="text-xs text-slate-400 font-sans mt-1">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
