"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (textRef.current && sectionRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <Section id="about" ref={sectionRef} className="bg-white relative overflow-hidden">
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-accent)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Company Story */}
        <div ref={textRef} className="flex flex-col space-y-6 relative z-10">
          <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
            About Aerosapien
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-deep-navy)] leading-[1.15]">
            A Next-Generation
            <br />
            Aerospace Manufacturing
            <br />
            & Engineering Company
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-sans">
            Based in Bangalore, India — the aerospace capital of the country — and 
            founded by <strong>R. Sivaram Rajamanickam</strong> (B.E. Aerospace Engineering), 
            Aerosapien is driven by precision, innovation, and national pride. We manufacture 
            critical structural components for India&apos;s most important space, defence, and 
            commercial aviation programmes.
          </p>

          {/* Feature grid */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border-l-2 border-[var(--color-brand-accent)] pl-4">
              <span className="text-sm font-bold text-[var(--color-deep-navy)] uppercase tracking-wide">
                Advanced Manufacturing
              </span>
              <p className="text-xs text-slate-500 mt-1">
                In-house 5-axis CNC machining centres
              </p>
            </div>
            <div className="border-l-2 border-[var(--color-brand-accent)] pl-4">
              <span className="text-sm font-bold text-[var(--color-deep-navy)] uppercase tracking-wide">
                Engineering Excellence
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Precision CMM inspection systems
              </p>
            </div>
            <div className="border-l-2 border-[var(--color-brand-accent)] pl-4">
              <span className="text-sm font-bold text-[var(--color-deep-navy)] uppercase tracking-wide">
                Research & Innovation
              </span>
              <p className="text-xs text-slate-500 mt-1">
                UAV & propulsion R&D
              </p>
            </div>
          </div>
        </div>

        {/* Right: Aerospace image with overlay */}
        <div className="relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('/images/about/cnc-facility.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)]/80 via-transparent to-transparent" />
          
          {/* Overlay label */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-5 py-4">
              <p className="text-white font-semibold text-sm">Precision CNC Machining Facility</p>
              <p className="text-white/60 text-xs mt-1">Bangalore, India</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
