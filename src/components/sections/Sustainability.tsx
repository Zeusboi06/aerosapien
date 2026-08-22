"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import { Leaf } from "lucide-react";

export default function Sustainability() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <Section id="sustainability" className="bg-white">
      <div ref={sectionRef} className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-8">
          <Leaf className="w-8 h-8" />
        </div>
        
        <h2 className="text-[var(--color-brand-accent)] font-semibold tracking-wider uppercase text-sm mb-4">
          Environmental Responsibility
        </h2>
        
        <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-deep-navy)] mb-8 leading-tight">
          Committed to Responsible Manufacturing
        </h3>
        
        <p className="text-xl md:text-2xl text-slate-600 font-sans leading-relaxed">
          Optimizing material usage and reducing waste through precision engineering, 
          additive technologies, and advanced operational processes. We build for the future 
          while respecting the resources of today.
        </p>
      </div>
    </Section>
  );
}
