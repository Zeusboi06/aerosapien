"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const logoTiers = [
  {
    title: "Aerosapien Esteemed Aerospace & Defence Clients",
    logos: [
      { name: "ISRO", src: "/client_logos/new/isro.png?v=3" },
      { name: "HAL", src: "/client_logos/aeronautical_clients/Hindustan_Aeronautics_Limited_Logo.png?v=3" },
      { name: "Astrobase", src: "/client_logos/new/astrobase.png?v=3", zoomClass: "p-1.5" },
      { name: "Bellatrix", src: "/client_logos/new/bellatrix.png?v=3", zoomClass: "p-1.5" },
      { name: "Textron", src: "/client_logos/aeronautical_clients/Textron_Aviation_logo_2018.svg.webp?v=3" },
      { name: "Recaero", src: "/client_logos/aeronautical_clients/recaero-logo.svg?v=3", zoomClass: "p-2" },
      { name: "IG Drones", src: "/client_logos/new/ig_drones.png?v=3" },
      { name: "LPSC ISRO", src: "/client_logos/aeronautical_clients/Liquid_Propulsion_Systems_Centre_Logo.png?v=3" }
    ],
  },
  {
    title: "Customers in Advanced Additive Manufacturing & R&D",
    logos: [
      { name: "Janatics", src: "/client_logos/additive_clients/janatics_logo.png?v=3" },
      { name: "Wipro 3D", src: "/client_logos/additive_clients/wipro-3d-logo.png?v=3", zoomClass: "p-2" },
      { name: "Intech Additive", src: "/client_logos/additive_clients/intech-iso-logo.png?v=3" },
      { name: "IISc Bengaluru", src: "/client_logos/rd_clients/fSID-logo-img.png?v=3" },
      { name: "Wipro", src: "/client_logos/rd_clients/wipro-logo.png?v=3", zoomClass: "p-2" },
      { name: "Wipro PARI", src: "/client_logos/rd_clients/wipro-pari-logo.png?v=3", zoomClass: "p-2" },
    ],
  },
];

export default function TieredTrustWall() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".trust-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 25, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.06,
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
    <Section id="clients" ref={sectionRef} className="bg-[#060E18] text-white py-24 relative overflow-hidden border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00b5e2]/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Drastically Improved Header with Top-Right Button */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative z-10 max-w-6xl mx-auto px-6 gap-6">
        <div className="max-w-2xl text-left">
          <span className="inline-block text-[10px] sm:text-xs text-[var(--color-brand-accent)] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-[#00b5e2]/10 border border-[#00b5e2]/20 max-w-full text-center leading-normal">
            Trusted Aerospace & Defence Network
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white leading-tight">
            Our Clients & <span className="text-[#00b5e2]">Partners</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-400 font-sans leading-relaxed">
            Manufacturing critical flight hardware and structural assemblies for India&apos;s leading space, defence, and aviation organisations.
          </p>
        </div>
        <div className="shrink-0">
          <Link
            href="/clients"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-[#00b5e2] hover:bg-[#00c5f2] text-white font-bold rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,181,226,0.3)] hover:scale-105 active:scale-95 group text-sm"
          >
            Explore Interactive Portfolio <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-14 relative z-10 px-6">
        {logoTiers.map((tier, tIdx) => (
          <div key={tIdx}>
            {/* Tier divider */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-800 hidden sm:block" />
              <h3 className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[#00b5e2] text-center whitespace-normal sm:whitespace-nowrap bg-slate-900/80 px-4 py-2 rounded-2xl sm:rounded-full border border-slate-800 max-w-[85vw] sm:max-w-none leading-relaxed mx-auto">
                {tier.title}
              </h3>
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-slate-800 hidden sm:block" />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {tier.logos.map((logo, lIdx) => {
                return (
                  <div
                    key={lIdx}
                    className="trust-card group flex flex-col items-center justify-center"
                  >
                    <div
                      className={`relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-gradient-to-tr from-white/25 via-white/10 to-white/30 backdrop-blur-xl border border-white/45 shadow-[inset_0_2px_6px_rgba(255,255,255,0.45),_0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 hover:shadow-[inset_0_2px_6px_rgba(255,255,255,0.55),_0_0_35px_rgba(0,181,226,0.6)] hover:border-[#00b5e2]/80 cursor-pointer ${logo.zoomClass || 'p-4'}`}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={120}
                        height={120}
                        className="object-contain w-full h-full filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                    <span className="text-xs md:text-sm text-slate-300 mt-3 font-sans text-center font-bold tracking-wide group-hover:text-[#00b5e2] transition-colors">
                      {logo.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Button */}
      <div className="mt-16 text-center relative z-10">
        <Link
          href="/clients"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#00b5e2]/10 hover:bg-[#00b5e2]/20 text-[#00b5e2] font-bold rounded-full transition-all border border-[#00b5e2]/30 group shadow-lg shadow-[#00b5e2]/10 hover:shadow-[#00b5e2]/20"
        >
          See Our Work & Client Details <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Section>
  );
}
