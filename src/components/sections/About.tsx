"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";

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
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    }
  }, []);

  return (
    <Section id="about" ref={sectionRef} className="bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-accent)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Founder + Story */}
        <div ref={textRef} className="flex flex-col space-y-6 relative z-10">
          <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
            About Aerosapien
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-deep-navy)] leading-[1.15]">
            Engineering the Future of<br />
            <span className="text-[var(--color-brand-accent)]">Aerospace, Space &<br />Medical Innovation</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-sans">
            AEROSAPIEN is an <strong>ISO 9001:2015 Certified</strong> precision engineering company headquartered in
            Bengaluru, India — the aerospace capital of the country. We transform engineering excellence into
            mission-critical solutions for the aerospace, space, defence, and medical automation industries.
          </p>
          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Founded by <strong>R. Sivaram Rajamanickam</strong> (B.E. Aeronautical Engineering), Aerosapien combines
            advanced manufacturing technologies with aerospace-quality standards to deliver precision-engineered
            components powering India&apos;s most ambitious programmes — from HAL LCA Tejas to ISRO&apos;s
            Gaganyaan Human Spaceflight Mission.
          </p>

          {/* Founder Quote */}
          <div className="border-l-4 border-[var(--color-brand-accent)] pl-5 py-2 bg-slate-50 rounded-r-lg">
            <Quote className="w-4 h-4 text-[var(--color-brand-accent)] mb-2" />
            <p className="text-sm italic text-slate-600 font-sans leading-relaxed">
              &ldquo;Precision in Engineering. Excellence in Every Component.&rdquo;
            </p>
            <span className="text-xs font-bold text-[var(--color-deep-navy)] mt-2 block">
              — Sivaram Rajamanickam, Founder & Managing Director
            </span>
          </div>

          {/* Pillars */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "ISO 9001:2015", sub: "Certified quality management system" },
              { title: "AS9100D Standards", sub: "Aerospace grade manufacturing" },
              { title: "Zero-Defect Culture", sub: "100% CMM inspection & traceability" },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-[var(--color-brand-accent)] pl-4">
                <span className="text-sm font-bold text-[var(--color-deep-navy)] uppercase tracking-wide">
                  {item.title}
                </span>
                <p className="text-xs text-slate-500 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Expertise */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            {[
              "Aircraft Structural Components",
              "Launch Vehicle Components",
              "Combustion Chamber Components",
              "UAV Structural Components",
              "BELUGA Medical Platform",
              "Precision Space Mechanisms",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0" />
                <span className="text-xs text-slate-600 font-sans">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Founder portrait + company about image */}
        <div className="flex flex-col gap-6">
          {/* Founder Card */}
          <div className="bg-[var(--color-deep-navy)] rounded-2xl overflow-hidden shadow-2xl flex flex-col sm:flex-row items-stretch">
            <div className="relative w-full sm:w-48 flex-shrink-0 h-64 sm:h-auto">
              <Image
                src="/brand/founder-portrait.png"
                alt="Sivaram Rajamanickam — Founder & MD"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <span className="text-[var(--color-brand-accent)] text-xs font-bold uppercase tracking-widest mb-1">Founder & Managing Director</span>
              <h3 className="text-white text-xl font-bold">Sivaram Rajamanickam</h3>
              <p className="text-white/50 text-xs mt-1 mb-3">B.E. Aeronautical Engineering</p>
              <p className="text-white/70 text-xs font-sans leading-relaxed">
                Indian Aeronautical Engineer with expertise in aerospace manufacturing, precision CNC machining,
                CAD/CAM engineering, and product development. Founded AEROSAPIEN with the vision of supporting
                India&apos;s aerospace, defense, and space industries.
              </p>
              <div className="flex flex-wrap gap-1 mt-3">
                {["Aerospace Mfg.", "CNC Machining", "CAD/CAM", "Quality Mgmt."].map((tag, i) => (
                  <span key={i} className="text-[10px] text-[var(--color-brand-accent)] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* AEROSAPIEN ABOUT visual */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-56 group">
            <Image
              src="/images/about/aerosapien-about.jpg"
              alt="Aerosapien — Engineering the Future of Aerospace, Space & Medical Innovation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3">
                <p className="text-white font-semibold text-xs">Proudly Contributing to India&apos;s Aerospace & Space Programs</p>
                <p className="text-white/60 text-[10px] mt-0.5">HAL LCA Tejas · ISRO Gaganyaan · Astrobase · IG Drones · SkyX · CBW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
