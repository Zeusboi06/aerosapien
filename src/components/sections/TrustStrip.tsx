"use client";

import Image from "next/image";

const highlightClients = [
  {
    name: "ISRO",
    description: "Critical Space Propulsion Systems & LPSC Hardware",
    src: "/client_logos/new/isro.png",
  },
  {
    name: "HAL",
    description: "LCA Tejas Structural Assemblies & Flight Hardware",
    src: "/client_logos/aeronautical_clients/Hindustan_Aeronautics_Limited_Logo.png",
  },
  {
    name: "Astrobase",
    description: "Advanced Space Technologies & Commercial Launch Systems",
    src: "/client_logos/new/astrobase.png",
  },
  {
    name: "Textron Aviation",
    description: "Precision Aerospace Structural & Flight Components",
    src: "/client_logos/aeronautical_clients/Textron_Aviation_logo_2018.svg.webp",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-[#060E18] py-20 overflow-hidden border-b border-slate-900 w-full">
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b5e2]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#00b5e2] px-4 py-2 rounded-full bg-[#00b5e2]/10 border border-[#00b5e2]/20">
            Strategic Partnerships
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 tracking-tight">
            Trusted by Aerospace <span className="text-[#00b5e2]">Pioneers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlightClients.map((client, i) => (
            <div
              key={i}
              className="group relative bg-slate-900/40 border border-slate-800 hover:border-[#00b5e2]/50 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-slate-900/80 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,181,226,0.2)] overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00b5e2]/0 to-[#00b5e2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative w-full max-w-[180px] h-24 mb-6 flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00b5e2] transition-colors duration-300">
                {client.name}
              </h3>
              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
