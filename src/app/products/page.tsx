"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Building2, Cpu, Rocket, Activity, Wifi } from "lucide-react";

const allProducts = [
  {
    id: 1,
    title: "HAL LCA Tejas Wing Structural Fitting",
    category: "aerospace",
    clientBadge: "HAL — LCA Tejas",
    desc: "Primary load-bearing wing attachment fittings and structural brackets engineered for high stress aero-structures. CNC machined from titanium Ti-6Al-4V and high-strength aircraft aluminium billet.",
    material: "Titanium Alloy / Aircraft Aluminium",
    tolerance: "±0.001 mm",
    process: "5-Axis Simultaneous CNC Machining",
    img: "/images/products/lca-wing-structural.png",
    tags: ["Aero-Structure", "Class-1 Structural", "Flight Certified"]
  },
  {
    id: 2,
    title: "ISRO LPSC Liquid Propulsion Valve Component",
    category: "propulsion",
    clientBadge: "ISRO — LPSC",
    desc: "Precision cryogenic valve housing, propellant feed sub-assembly, and PS4 combustion chamber hardware engineered to withstand severe thermal flux and vacuum environments.",
    material: "Inconel 718 / Stainless Steel",
    tolerance: "±0.001 mm",
    process: "Multi-Axis Milling & EDM",
    img: "/images/homepage_components/comp6.jpeg",
    tags: ["Propulsion System", "Cryogenic Hardware", "Vacuum Rated"]
  },
  {
    id: 3,
    title: "Astrobase Liquid Rocket Engine Hardware",
    category: "propulsion",
    clientBadge: "Astrobase Space",
    desc: "Flight-ready liquid rocket engine thruster components, high-pressure gas manifold blocks, and combustion chamber sub-assemblies for commercial space systems.",
    material: "Titanium Grade 5 / Refractory Alloy",
    tolerance: "±0.001 mm",
    process: "5-Axis CNC Precision Machining",
    img: "/images/astrobase_transparent_engine.png",
    tags: ["Rocket Thruster", "High Pressure", "Commercial Space"]
  },
  
  {
    id: 5,
    title: "Microfluidic & Reagent Temperature Control Module",
    category: "medical",
    clientBadge: "Cambrian Bioworks",
    desc: "Precision CNC milled thermal management plate providing uniform heat dissipation and reagent module stabilization in automated laboratory robotics.",
    material: "High Thermal Conductivity Copper / Aluminium",
    tolerance: "±0.001 mm",
    process: "Precision Surface Milling",
    img: "/images/homepage_components/comp4.jpeg",
    tags: ["Thermal Control", "Reagent Module", "Cleanroom Grade"]
  },
  {
    id: 6,
    title: "IG Drones T-Joint & Y-Joint Airframe Connector",
    category: "uav",
    clientBadge: "IG Drones",
    desc: "High-strength structural T-joint and Y-joint airframe connectors for tactical 200 kg class logistics UAV platforms operationally deployed with defence forces.",
    material: "Aluminium 6061-T6 Black Anodized",
    tolerance: "±0.001 mm",
    process: "Multi-Axis CNC Turning & Milling",
    img: "/images/ig_drone_transparent.png",
    tags: ["UAV Connector", "Tactical Airframe", "High Strength"]
  },
  {
    id: 7,
    title: "Tactical UAV Motor Mount & Gimbal Assembly",
    category: "uav",
    clientBadge: "SkyX / IG Drones",
    desc: "Ultra-lightweight high-rigidity motor mount plates and payload gimbal structural attachments designed for long-endurance autonomous aerial systems.",
    material: "Carbon-Aluminium Hybrid Billet",
    tolerance: "±0.001 mm",
    process: "5-Axis CNC Machining",
    img: "/images/ig_drone_new.png",
    tags: ["Motor Mount", "Payload Gimbal", "Tactical UAV"]
  },
  {
    id: 8,
    title: "HAL Tejas Landing Gear Shock Strut Component",
    category: "aerospace",
    clientBadge: "HAL — LCA Tejas",
    desc: "Heavy-duty load-bearing landing gear shock strut attachment fittings with 100% CMM metrology verification and structural fatigue testing.",
    material: "High Strength NCM Alloy Steel",
    tolerance: "±0.001 mm",
    process: "4-Axis CNC Machining + Heat Treat",
    img: "/images/products/lca-landing-gear.png",
    tags: ["Landing Gear", "Aero-Structure", "Fatigue Certified"]
  },
  {
    id: 9,
    title: "Aircraft Fuselage Structural Frame Panel",
    category: "aerospace",
    clientBadge: "HAL — LCA Tejas",
    desc: "Corrosion-resistant fuselage panel and internal structural frame member engineered for aircraft structural integrity.",
    material: "Aircraft Grade Aluminium 7075",
    tolerance: "±0.001 mm",
    process: "High Precision CNC Milling",
    img: "/images/products/lca-fuselage-panel.png",
    tags: ["Fuselage Frame", "Aero-Structure", "Corrosion Proof"]
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#070D18] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-[#00b5e2] hover:text-white transition-colors mb-10 text-sm font-semibold">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Aerosapien & Client Works Overview Briefing */}
        <div className="bg-gradient-to-br from-slate-900/90 via-[#0B1728] to-slate-950/90 border border-slate-800 rounded-3xl p-8 md:p-12 mb-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00b5e2]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl space-y-4">
            <span className="inline-flex items-center gap-2 text-[#00b5e2] font-semibold tracking-[0.2em] uppercase text-xs px-4 py-1.5 rounded-full bg-[#00b5e2]/10 border border-[#00b5e2]/20">
              <Building2 className="w-3.5 h-3.5" />
              Aerosapien Precision Engineering Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Flight-Ready <span className="text-[#00b5e2]">Products & Components</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans">
              AEROSAPIEN is a premier precision manufacturing and engineering partner based in Bengaluru, India. We deliver Class-1 critical aerospace structural fittings for the HAL LCA Tejas programme, liquid engine propulsion components for ISRO LPSC & Astrobase Space, automated medical robotics assemblies for Cambrian Bioworks, and tactical UAV airframe hardware for IG Drones & defence partners.
            </p>
          </div>
        </div>

        {/* Categorization Pills (Engineering Disciplines) */}
        <div className="text-center mb-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00b5e2]">Filter by Engineering Discipline</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {[
            { id: "all", label: "All Components" },
            { id: "aerospace", label: "Aerospace Structures" },
            { id: "propulsion", label: "Propulsion & Space Systems" },
            { id: "uav", label: "UAV Airframes & Hardware" },
            { id: "medical", label: "Medical Automation Systems" },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                activeCategory === cat.id 
                  ? "bg-[#00b5e2] text-white shadow-[0_0_15px_rgba(0,181,226,0.4)] scale-105" 
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-[#0B1728] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#00b5e2]/40 transition-all duration-300">
              <div className="relative w-full h-56 bg-[#060E18] border-b border-slate-800/80 p-6 flex items-center justify-center">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">{product.title}</h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">{product.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  <div className="flex justify-between items-center text-xs text-slate-300 font-sans">
                    <span className="text-slate-500 font-bold">Material:</span>
                    <span className="font-semibold text-slate-200">{product.material}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-300 font-sans">
                    <span className="text-slate-500 font-bold">Tolerance:</span>
                    <span className="font-mono text-[#00b5e2] font-bold bg-[#00b5e2]/10 px-2 py-0.5 rounded border border-[#00b5e2]/20">{product.tolerance}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/40">
                    <div className="flex flex-wrap gap-1">
                      {product.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-semibold bg-slate-900 text-slate-300 border border-slate-800 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Subtle Client Attribution Badge */}
                    <span className="text-[10px] font-mono font-bold text-[#00b5e2] bg-[#00b5e2]/10 border border-[#00b5e2]/20 px-2 py-0.5 rounded-full">
                      {product.clientBadge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
