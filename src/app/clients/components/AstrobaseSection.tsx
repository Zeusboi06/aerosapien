import Image from "next/image";
import { CheckCircle2, Rocket, ShieldCheck } from "lucide-react";

export default function AstrobaseSection() {
  const deliverables = [
    "Liquid Rocket Engine Components",
    "Propulsion System Hardware",
    "High Precision Space Components",
    "Rapid Prototype Development",
    "Precision Mechanical Assemblies",
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
      <div className="max-w-4xl">
        <span className="inline-flex items-center gap-2 text-[#00b5e2] font-semibold tracking-[0.2em] uppercase text-xs px-4 py-1.5 rounded-full bg-[#00b5e2]/10 border border-[#00b5e2]/20 mb-4">
          <Rocket className="w-3.5 h-3.5" />
          Commercial Space Exploration
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          Astrobase Space <span className="text-[#00b5e2]">Technologies Pvt. Ltd.</span>
        </h2>
        <p className="text-lg text-[#00b5e2] font-medium mb-4">
          Advancing India&apos;s Commercial Space Industry
        </p>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans max-w-3xl">
          AEROSAPIEN collaborates with Astrobase Space Technologies to manufacture flight-grade liquid rocket engine components, high-precision propulsion hardware, and specialized space assemblies engineered for extreme orbital environments.
        </p>
      </div>

      {/* Transparent Liquid Rocket Engine Thruster Component */}
      <div className="relative w-full aspect-[21/9] min-h-[340px] bg-[#060E18] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center p-8">
        <Image 
          src="/images/astrobase_transparent_engine.png" 
          alt="Astrobase Liquid Rocket Engine Thruster Component" 
          fill 
          className="object-contain p-6 hover:scale-105 transition-transform duration-700" 
          unoptimized 
        />
        <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-800 z-10">
          <span className="text-xs font-bold text-white font-mono">Astrobase Liquid Rocket Engine Thruster · Precision Machined</span>
        </div>
      </div>

      {/* Detailed Technical Capabilities Grid */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#00b5e2]" />
          Key Capabilities & Flight Hardware Deliverables
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#0B1728] border border-slate-800 p-4 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-[#00b5e2] shrink-0" />
              <span className="text-sm text-slate-200 font-semibold font-sans">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
