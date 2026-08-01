"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import { Cpu, ShieldAlert, Layers } from "lucide-react";

const products = [
  {
    icon: Layers,
    title: "Aerospace 3D Printed Components",
    materials: "Titanium, Inconel, Aluminum & Carbon Fiber",
    description: "Specialized additive manufacturing and post-processing for complex structural aerospace parts. Serving mission-critical applications for space systems and aircraft.",
    image: "/images/capabilities/additive-manufacturing.jpg",
  },
  {
    icon: Cpu,
    title: "Medical & Implants 3D Post-Processing",
    materials: "Titanium & Bio-Compatible Alloys",
    description: "Ultra-precise finishing and post-processing for titanium medical implants and human-body structural bio-components, adhering to sterile high-tolerance specs.",
    image: "/images/capabilities/medical-implant.jpg",
  },
  {
    icon: ShieldAlert,
    title: "Flight Hardware & Structural Sub-assemblies",
    materials: "NCM Steel, Titanium, Aluminum Alloys",
    description: "High-stress structural sub-assemblies for LCA Tejas and HTT-40 aircraft, including wing fittings, fuselage frames, and landing gear components.",
    image: "/images/products/htt40-flight-hw.jpg",
  },
];

export default function Products() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".product-card");

      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
    <Section id="products" ref={containerRef} className="bg-[var(--color-soft-gray)]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
          Product Gallery & Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-deep-navy)] mt-4">
          Visual Showcase of Our Products
        </h2>
        <p className="mt-4 text-slate-600 font-sans text-lg">
          Advanced additive manufacturing, precision post-processing, and flight-critical aerospace hardware.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((prod, index) => {
          const IconComponent = prod.icon;
          return (
            <div
              key={index}
              className="product-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback if live image fails
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-[var(--color-brand-primary)]">
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-semibold text-[var(--color-brand-accent)] tracking-wider uppercase block mb-2">
                    {prod.materials}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--color-deep-navy)] mb-3 leading-snug">
                    {prod.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-sans leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
