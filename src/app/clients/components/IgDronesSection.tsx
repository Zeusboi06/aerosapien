import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function IgDronesSection() {
  const droneComponents = [
    { title: "Tactical UAV T-Joint & Y-Joint Airframe Component", desc: "High-strength structural airframe connector anodized black for 200 kg class logistics UAVs.", img: "/images/clients/ig-drones/drone-3.png" },
    { title: "UAV Motor Mount & Adapter Fitting", desc: "Lightweight high-rigidity motor mount plate engineered for heavy payload multi-rotor UAV platforms.", img: "/images/clients/ig-drones/drone-1.png" },
    { title: "Landing Gear Shock Strut Component", desc: "Shock-absorbing landing gear strut attachment fitting manufactured from aircraft aluminium.", img: "/images/clients/ig-drones/drone-1.png" },
    { title: "Structural Airframe Bracket Assembly", desc: "Multi-axis CNC machined airframe bracket for high-stress tactical drone frames.", img: "/images/clients/ig-drones/drone-4.png" },
    { title: "Payload Attachment Housing", desc: "Precision structural attachment housing for logistics payload release mechanisms.", img: "/images/clients/ig-drones/drone-2.png" },
    { title: "Avionics Structural Mounting Plate", desc: "Lightweight vibration-isolated mounting plate for flight controller avionics.", img: "/images/clients/ig-drones/drone-3.png" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900/90 via-[#0B1728] to-slate-950/90 border border-[#00b5e2]/30 rounded-3xl p-8 md:p-10 mb-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00b5e2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-start gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#00b5e2]/10 border border-[#00b5e2]/30 flex items-center justify-center flex-shrink-0 text-2xl">
          🛡️
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b5e2]">Defence Logistics UAV Partner</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-1 text-white">IG Drones Pvt. Ltd.</h2>
          <p className="text-slate-300 text-sm md:text-base mt-1 font-sans max-w-2xl leading-relaxed">
            Precision Manufacturing for Defence UAV Platforms — Supporting structural airframe components for <strong className="text-white">200 kg Class Logistics UAV Platforms</strong> operationally deployed by the Indian Armed Forces.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {droneComponents.map((comp, i) => (
          <div key={i} className="bg-[#060E18] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#00b5e2]/40 transition-all duration-300">
            <div className="relative w-full h-48 bg-[#040A12] border-b border-slate-800 p-4 flex items-center justify-center">
              <Image
                src={comp.img}
                alt={comp.title}
                fill
                className="object-contain p-3 hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#00b5e2] uppercase tracking-wider block mb-1">IG Drones Component {i + 1}</span>
                <h3 className="font-bold text-white text-sm leading-snug mb-1">{comp.title}</h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">{comp.desc}</p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[10px] text-[#00b5e2] font-mono font-bold">
                Aluminium 6061-T6 · ±0.001 mm
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
