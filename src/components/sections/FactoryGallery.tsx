"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";

const shopfloorImages = [
  {
    src: "/images/factory/cnc_machining_center.jpg",
    title: "5-Axis CNC Machining Center",
    category: "Precision Manufacturing",
  },
  {
    src: "/images/factory/metal_3d_printing.jpg",
    title: "Metal 3D Printing Post-Processing",
    category: "Additive Manufacturing",
  },
  {
    src: "/images/factory/cmm_metrology_inspection.jpg",
    title: "CMM Metrology Inspection",
    category: "Quality Assurance",
  },
  {
    src: "/images/factory/turbine_propulsion_assembly.jpg",
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
    <Section id="manufacturing" className="bg-[#09121F] text-white overflow-hidden py-16 sm:py-24">
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 px-4">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
          Facility Showcase
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 tracking-tight">
          Advanced Manufacturing Shop-Floor
        </h2>
        <p className="text-slate-400 text-xs sm:text-base mt-2 sm:mt-3 font-sans leading-relaxed">
          A glimpse inside our Bengaluru facility — multi-axis CNC machines, metal AM post-processing, and CMM metrology.
        </p>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
        {shopfloorImages.map((img, idx) => (
          <div
            key={idx}
            className="factory-card group relative h-[250px] sm:h-[300px] md:h-[320px] rounded-xl overflow-hidden border border-white/10 shadow-lg cursor-pointer bg-slate-900"
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
              <span className="text-[10px] sm:text-[11px] font-mono text-[var(--color-brand-accent)] tracking-wider uppercase block mb-1">
                {img.category}
              </span>
              <h3 className="text-white font-bold text-base sm:text-lg leading-snug">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
