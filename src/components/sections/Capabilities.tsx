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
  Wifi
} from "lucide-react";

const capabilities = [
  {
    title: "Precision CNC Machining",
    description: "Tolerances up to ±0.004 mm across Titanium, Inconel, NCM steel, Aluminium, Delrin, and Stainless Steel.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Aircraft Structures",
    description: "Critical load-bearing structural assemblies for commercial and defence aviation.",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    title: "Defence Components",
    description: "High-stress components engineered for extreme military applications.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Space Systems",
    description: "Lightweight, ultra-durable components for orbital and sub-orbital missions.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: "Combustion Chambers",
    description: "Advanced thermal-resistant assemblies for propulsion systems.",
    icon: <Flame className="w-6 h-6" />,
  },
  {
    title: "Prototype Development",
    description: "Rapid engineering cycles from concept to functional aerospace prototype.",
    icon: <FlaskConical className="w-6 h-6" />,
  },
  {
    title: "Research & Development",
    description: "Pioneering new materials and manufacturing processes.",
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    title: "UAV Systems",
    description: "Complete structural manufacturing for next-generation unmanned aerial vehicles.",
    icon: <Wifi className="w-6 h-6" />,
  },
];

export default function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".capability-card");
      
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <Section id="capabilities" className="bg-white relative">
      <div className="flex flex-col items-center mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-[var(--color-brand-accent)] font-semibold tracking-wider uppercase text-sm mb-4">
          Core Competencies
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-deep-navy)]">
          Our Capabilities
        </h3>
        <p className="mt-6 text-lg text-slate-600 font-sans">
          From micro-precision CNC machining to full-scale UAV assemblies, we deliver 
          engineering excellence across the entire aerospace spectrum.
        </p>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((cap, index) => (
          <div 
            key={index}
            className="capability-card group bg-[var(--color-white)] border border-slate-100 rounded-xl p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--color-brand-primary)]/5 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-[var(--color-soft-gray)] flex items-center justify-center text-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition-colors duration-300 mb-6">
              {cap.icon}
            </div>
            <h4 className="text-xl font-bold text-[var(--color-deep-navy)] mb-3 group-hover:text-[var(--color-brand-accent)] transition-colors duration-300">
              {cap.title}
            </h4>
            <p className="text-slate-600 font-sans text-sm leading-relaxed">
              {cap.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
