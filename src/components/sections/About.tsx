"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";
import { CheckCircle2, Quote, Award, ShieldCheck, Cpu } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (textRef.current && sectionRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }

    if (cardRef.current && sectionRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    }
  }, []);

  return (
    <Section id="about" ref={sectionRef} className="bg-white relative overflow-hidden py-16 md:py-24 lg:py-28">
      {/* Subtle subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-accent)]/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Company Story & Pillars */}
        <div ref={textRef} className="lg:col-span-7 flex flex-col space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2">
            <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
              About Aerosapien
            </span>
            <span className="h-px w-8 bg-[var(--color-brand-accent)]/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-deep-navy)] leading-[1.15] tracking-tight">
            Engineering the Future of<br />
            <span className="text-[var(--color-brand-accent)]">Aerospace, Space & Medical Innovation</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            AEROSAPIEN is an <strong className="text-slate-900 font-semibold">ISO 9001:2015 Certified</strong> precision engineering company headquartered in
            Bengaluru, India — the aerospace hub of the nation. We transform engineering excellence into
            mission-critical solutions for aerospace, space, defence, and medical automation platforms.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Founded by <strong className="text-slate-900 font-semibold">R. Sivaram Rajamanickam</strong> (B.E. Aeronautical Engineering), Aerosapien combines
            advanced 5-axis CNC manufacturing technologies with aerospace quality management standards to deliver flight-ready components powering India&apos;s most ambitious programs — including HAL LCA Tejas and ISRO&apos;s Gaganyaan Human Spaceflight Mission.
          </p>

          {/* Founder Leadership Philosophy Quote */}
          <div className="border-l-4 border-[var(--color-brand-accent)] pl-5 py-3 bg-slate-50/80 rounded-r-xl border-y border-r border-slate-100">
            <Quote className="w-4 h-4 text-[var(--color-brand-accent)] mb-1.5 opacity-80" />
            <p className="text-sm italic text-slate-700 font-sans leading-relaxed font-medium">
              &ldquo;Precision in Engineering. Excellence in Every Component.&rdquo;
            </p>
            <span className="text-xs font-bold text-[var(--color-deep-navy)] mt-2 block tracking-wide">
              — Sivaram Rajamanickam, Founder & Managing Director
            </span>
          </div>

          {/* Corporate Pillars */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-1 text-[var(--color-brand-accent)]">
                <Award className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-deep-navy)]">ISO 9001:2015</span>
              </div>
              <p className="text-xs text-slate-500 font-sans">Certified quality management system</p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-1 text-[var(--color-brand-accent)]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-deep-navy)]">AS9100D</span>
              </div>
              <p className="text-xs text-slate-500 font-sans">Aerospace-grade manufacturing standards</p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-1 text-[var(--color-brand-accent)]">
                <Cpu className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-deep-navy)]">Zero-Defect</span>
              </div>
              <p className="text-xs text-slate-500 font-sans">100% CMM inspection & full traceability</p>
            </div>
          </div>

          {/* Key Deliverables Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {[
              "Aircraft Structural Components",
              "Launch Vehicle Components",
              "Combustion Chamber Assemblies",
              "UAV Structural Components",
              "BELUGA Medical Platform",
              "Precision Space Mechanisms",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium font-sans">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Founder Portrait Card (Vertically Centered & Fully Visible on Mobile) */}
        <div ref={cardRef} className="lg:col-span-5 flex items-center justify-center relative z-10">
          <div className="w-full max-w-md bg-[var(--color-deep-navy)] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col sm:flex-row lg:flex-col items-stretch">
            
            {/* Image Container: Optimized for Mobile & Desktop (Fully Visible, No Cropping/Clipping) */}
            <div className="relative w-full sm:w-48 lg:w-full h-72 sm:h-auto lg:h-72 shrink-0 bg-slate-950 flex items-center justify-center p-3 sm:p-0">
              <Image
                src="/brand/founder-portrait.png"
                alt="Sivaram Rajamanickam — Founder & Managing Director, Aerosapien"
                fill
                className="object-contain sm:object-cover lg:object-contain object-center sm:object-top p-1 sm:p-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 192px, 400px"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)] via-transparent to-transparent opacity-80 sm:hidden lg:block" />
            </div>

            {/* Founder Card Info */}
            <div className="p-6 sm:p-6 flex flex-col justify-center bg-[var(--color-deep-navy)]">
              <span className="text-[var(--color-brand-accent)] text-xs font-bold uppercase tracking-widest mb-1 block">
                Founder & Managing Director
              </span>
              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
                Sivaram Rajamanickam
              </h3>
              <p className="text-slate-400 text-xs font-medium mt-0.5 mb-3 font-mono">
                B.E. Aeronautical Engineering
              </p>
              
              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                Indian Aeronautical Engineer and entrepreneur with hands-on expertise in precision CNC machining, CAD/CAM engineering, and aerospace manufacturing. Founded AEROSAPIEN to advance India&apos;s aerospace, defence, and space ecosystem.
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800">
                {["Aerospace Mfg.", "5-Axis CNC", "CAD/CAM", "Quality Management"].map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium text-[var(--color-brand-accent)] bg-[var(--color-brand-accent)]/10 border border-[var(--color-brand-accent)]/20 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
}
