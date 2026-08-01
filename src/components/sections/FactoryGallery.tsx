"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";

const shopfloorImages = [
  {
    src: "/images/capabilities/cnc-machining.jpg",
    title: "5-Axis CNC Machining Center",
    category: "Precision Manufacturing",
  },
  {
    src: "/images/capabilities/cmm-metrology.jpg",
    title: "Metal 3D Printing Post-Processing",
    category: "Additive Manufacturing",
  },
  {
    src: "/images/capabilities/combustion-propulsion.jpg",
    title: "CMM Metrology Inspection",
    category: "Quality Assurance",
  },
  {
    src: "/images/factory/turbine-assembly.jpg",
    title: "Turbine & Propulsion Sub-Assembly",
    category: "Flight Hardware",
  },
];

export default function FactoryGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".factory-card");

      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <Section id="manufacturing" className="bg-[#09121F] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
          Facility Showcase
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
          Advanced Manufacturing Shop-Floor
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-3 font-sans">
          A glimpse inside our Bengaluru facility — multi-axis CNC machines, metal AM post-processing, and CMM metrology.
        </p>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shopfloorImages.map((img, idx) => (
          <div
            key={idx}
            className="factory-card group relative h-[320px] rounded-xl overflow-hidden border border-white/10 shadow-lg cursor-pointer bg-slate-900"
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/95 transition-colors duration-300" />

            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <span className="text-[11px] font-mono text-[var(--color-brand-accent)] tracking-wider uppercase block mb-1">
                {img.category}
              </span>
              <h3 className="text-white font-bold text-lg leading-snug">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
