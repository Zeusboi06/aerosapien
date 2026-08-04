"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";

const logoTiers = [
  {
    title: "Aerosapien estimated clients in aerospace sector",
    logos: [
      { name: "ISRO", src: "/client_logos/new/isro.png" },
      { name: "HAL", src: "/client_logos/aerosapien esteemed aeuronotical customers/Hindustan_Aeronautics_Limited_Logo.png" },
      { name: "Astrobase", src: "/client_logos/new/astrobase.png" },
      { name: "Bellatrix", src: "/client_logos/new/bellatrix.png" },
      { name: "Textron", src: "/client_logos/aerosapien esteemed aeuronotical customers/Textron_Aviation_logo_2018.svg.webp" },
      { name: "Recaero", src: "/client_logos/aerosapien esteemed aeuronotical customers/recaero-logo.svg" },
      { name: "IG Drones", src: "/client_logos/new/ig_drones.png" },
      { name: "LPSC", src: "/client_logos/aerosapien esteemed aeuronotical customers/Liquid_Propulsion_Systems_Centre_Logo.png" }
    ],
  },
  {
    title: "Customers in advanced additive manufacturing",
    logos: [
      { name: "Wipro 3D", src: "/client_logos/Customers in advanced additive manufacturing/wipro-secondary-logo-color-rgb-1-ao4jn934.png" },
      { name: "Wipro", src: "/client_logos/Customers in advanced additive manufacturing/wipro_new_logo.png" },
      { name: "Fracktal", src: "/client_logos/Customers in advanced additive manufacturing/Website-Header_black-1.png.webp" },
      { name: "Intech", src: "/client_logos/Customers in advanced additive manufacturing/intech-iso-logo.png" },
      { name: "Janatics", src: "/client_logos/Customers in advanced additive manufacturing/janatics_logo.png" },
      { name: "Adroitec", src: "/client_logos/Customers in advanced additive manufacturing/logoooooo.png" },
    ],
  },
  {
    title: "R and D customers automaion and medical sectors",
    logos: [
      { name: "IISc", src: "/client_logos/new/iisc.png" },
      { name: "Cambrai", src: "/client_logos/new/cambrai.png" },
      { name: "SID / IISc", src: "/client_logos/R and D customers/fSID-logo-img.png" },
      { name: "Wipro PARI", src: "/client_logos/R and D customers/wipro-pari-new-logo.png" },
    ],
  },
];

export default function TieredTrustWall() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".trust-card");
      gsap.fromTo(cards, { y: 20, opacity: 0, scale: 0.95 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.04, ease: "back.out(1.2)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
    }
  }, []);

  return (
    <Section id="clients" ref={sectionRef} className="bg-[#060E18] text-white">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
          Trusted Partners
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">
          Our Clients & Collaborators
        </h2>
        <p className="mt-3 text-sm text-slate-400 font-sans">
          Trusted by India&apos;s leading aerospace, defense, and technology organisations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {logoTiers.map((tier, tIdx) => (
          <div key={tIdx}>
            {/* Tier divider */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[var(--color-brand-accent)] whitespace-nowrap">
                {tier.title}
              </h3>
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
              {tier.logos.map((logo, lIdx) => (
                <div
                  key={lIdx}
                  className="trust-card group flex flex-col items-center justify-center"
                >
                  <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center p-3 rounded-2xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(0,181,226,0.25)]"
                    style={{ background: "transparent" }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={140}
                      height={140}
                      className="object-contain w-full h-full drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:drop-shadow-[0_4px_16px_rgba(0,181,226,0.3)]"
                      style={{ imageRendering: "auto", background: "transparent" }}
                      unoptimized
                    />
                  </div>
                  <span className="text-xs md:text-sm text-white mt-3 font-sans text-center font-bold tracking-wide">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
