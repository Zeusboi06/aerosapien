"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Image from "next/image";

const clients = [
  { name: "ISRO", logo: "/logos/isro.png" },
  { name: "HAL", logo: "/logos/hal.png" },
  { name: "IG Drones", logo: "/logos/igdrones.png" },
  { name: "Wipro 3D", logo: "/logos/wipro3d.png" },
  { name: "Bellatrix Aerospace", logo: "/logos/bellatrix.png" },
  { name: "IISc", logo: "/logos/iisc.png" },
  { name: "Recaero", logo: "/logos/recaero.png" },
  { name: "Textron", logo: "/logos/textron.png" },
  { name: "Intech Additive", logo: "/logos/intech.png" },
  { name: "Janatics", logo: "/logos/janatics.png" },
  { name: "Wipro PARI", logo: "/logos/wipro-pari.png" },
  { name: "Fracktal Works", logo: "/logos/fracktal.png" },
  { name: "Adroitec", logo: "/logos/adroitec.png" },
  { name: "Cambrai Scientific", logo: "/logos/cambrai.png" },
  { name: "Astrobase", logo: "/logos/astrobase.png" },
  { name: "SID / IISc", logo: "/logos/sid.png" },
];

export default function Clients() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".client-logo");
      gsap.fromTo(items, { scale: 0.8, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 0.5, stagger: 0.04, ease: "back.out(1.2)",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      });
    }
  }, []);

  return (
    <Section id="clients" ref={containerRef} className="bg-[#060E18] text-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">
          Trusted Partners
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">
          Our Clients & Collaborators
        </h2>
        <p className="text-slate-400 text-sm mt-2 font-sans">
          Trusted by India&apos;s leading aerospace, defense, and technology organisations.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="client-logo group flex flex-col items-center justify-center"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-2 rounded-xl border border-transparent hover:border-white/10 transition-all duration-300 hover:bg-white/5 hover:scale-110">
              <Image
                src={client.logo}
                alt={client.name}
                width={72}
                height={72}
                className="object-contain w-full h-full transition-all duration-300 group-hover:grayscale group-hover:opacity-60"
              />
            </div>
            <span className="text-[9px] text-slate-500 mt-1.5 font-sans text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
