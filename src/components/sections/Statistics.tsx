"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";

const stats = [
  { value: "10+", label: "Years of Engineering Excellence" },
  { value: "500+", label: "Precision Components Delivered" },
  { value: "100%", label: "End-to-End Material Traceability" },
  { value: "6+", label: "Active Aerospace Programmes" },
];

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".stat-item");

      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <Section
      id="statistics"
      ref={sectionRef}
      className="bg-[var(--color-deep-navy)] relative overflow-hidden"
    >
      {/* Radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-brand-accent)]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item text-center">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {stat.value}
            </span>
            <p className="text-sm text-white/50 mt-3 uppercase tracking-wider font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
