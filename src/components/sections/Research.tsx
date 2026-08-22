"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import { ArrowRight } from "lucide-react";

export default function Research() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const texts = containerRef.current.querySelectorAll(".research-text");

      gsap.fromTo(
        texts,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="research" className="relative overflow-hidden">
      {/* Full-width image background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-[var(--color-deep-navy)]/90" />
      </div>

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,181,226,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,181,226,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Section ref={containerRef} className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="research-text text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs block mb-4">
              Future-Ready Innovation
            </span>
            <h2 className="research-text text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Research &<br />Development
            </h2>
            <p className="research-text text-lg text-white/60 mt-8 font-sans leading-relaxed max-w-lg">
              Aerosapien is actively investing in the future of propulsion and materials — from 
              advanced combustion chamber geometries designed to maximise thrust-to-weight ratios, 
              to pioneering structural manufacturing techniques for next-generation UAVs.
            </p>

            <div className="research-text mt-8 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] mt-2 flex-shrink-0" />
                <p className="text-white/70 text-sm font-sans">Combustion chamber efficiency and thrust optimisation</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] mt-2 flex-shrink-0" />
                <p className="text-white/70 text-sm font-sans">Advanced composite materials for strength-to-weight</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] mt-2 flex-shrink-0" />
                <p className="text-white/70 text-sm font-sans">Digital flight systems and UAV autonomy</p>
              </div>
            </div>

            <a
              href="#contact"
              className="research-text inline-flex items-center mt-10 text-[var(--color-brand-accent)] hover:text-white font-semibold text-sm tracking-wider uppercase group transition-colors duration-300"
            >
              <span>Partner with our R&D team</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>

          {/* Right: Status cards */}
          <div className="space-y-6">
            <div className="research-text bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[var(--color-brand-accent)] tracking-wider uppercase">
                  Project: Cryo-Upper Stage
                </span>
                <span className="text-xs font-mono text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                  Active
                </span>
              </div>
              <h3 className="text-white font-bold text-xl">Combustion Chamber R&D</h3>
              <p className="text-white/50 text-sm mt-2 font-sans">
                Advanced geometries for ISRO cryogenic upper stage propulsion systems. 
                Optimising thrust-to-weight through novel cooling channel designs.
              </p>
            </div>

            <div className="research-text bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[var(--color-brand-accent)] tracking-wider uppercase">
                  Project: UAV Structures
                </span>
                <span className="text-xs font-mono text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                  Prototype
                </span>
              </div>
              <h3 className="text-white font-bold text-xl">Next-Gen UAV Airframe</h3>
              <p className="text-white/50 text-sm mt-2 font-sans">
                Lightweight structural assemblies for extended-range unmanned aerial vehicles. 
                Partnership with IG Drones for Indian Army deployment.
              </p>
            </div>

            <div className="research-text bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[var(--color-brand-accent)] tracking-wider uppercase">
                  Materials Science
                </span>
                <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                  Research
                </span>
              </div>
              <h3 className="text-white font-bold text-xl">Advanced Composites</h3>
              <p className="text-white/50 text-sm mt-2 font-sans">
                Pioneering new material compositions to achieve optimal strength-to-weight 
                ratios for next-generation aerospace structural applications.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}
