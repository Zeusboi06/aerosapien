"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";

const galleryItems = [
  {
    image: "/images/factory/cnc_machining_center.jpg",
    title: "5-Axis CNC Machining",
    description: "High-precision multi-axis manufacturing",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    image: "/images/factory/cmm_metrology_inspection.jpg",
    title: "CMM Inspection",
    description: "Coordinate Measuring Machine verification",
    span: "",
  },
  {
    image: "/images/factory/metal_3d_printing.jpg",
    title: "Additive Manufacturing",
    description: "Titanium, Inconel, NCM Steel",
    span: "",
  },
  {
    image: "/images/factory/turbine_propulsion_assembly.jpg",
    title: "UAV Assembly & Integration",
    description: "Military-grade airframe production",
    span: "md:col-span-2",
  },
];

export default function ManufacturingGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".gallery-item");
      gsap.fromTo(items, { y: 40, opacity: 0, scale: 0.97 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
      });
    }
  }, []);

  return (
    <Section id="manufacturing" className="bg-[#0B1728] text-white">
      <div className="max-w-3xl mb-12">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
          Our Facilities
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">
          Manufacturing Excellence
        </h2>
        <p className="mt-3 text-sm text-slate-400 font-sans">
          A glimpse into the advanced facilities where engineering vision meets physical reality.
        </p>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-3"
      >
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`gallery-item relative overflow-hidden rounded-xl group cursor-pointer ${item.span}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-bold text-base">{item.title}</h3>
              <p className="text-white/50 text-xs mt-0.5">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
