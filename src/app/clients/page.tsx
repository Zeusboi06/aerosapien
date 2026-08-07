"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Award, Zap, Building2 } from "lucide-react";
import HalSection from "./components/HalSection";
import IsroSection from "./components/IsroSection";
import AstrobaseSection from "./components/AstrobaseSection";
import CbwSection from "./components/CbwSection";
import IgDronesSection from "./components/IgDronesSection";

const tabs = [
  { id: "hal", label: "HAL — LCA Tejas" },
  { id: "isro", label: "ISRO & LPSC Space" },
  { id: "astrobase", label: "Astrobase Space" },
  { id: "cbw", label: "Cambrian Bioworks" },
  { id: "igdrones", label: "IG Drones" },
];

const additionalClients = [
  { name: "Bellatrix Aerospace", desc: "Space Propulsion Systems & Thruster Components", logo: "/client_logos/new/bellatrix.png" },
  { name: "SkyX Aerospace", desc: "High-Altitude Tactical UAV Airframe Hardware", logo: "/client_logos/new/ig_drones.png" },
  { name: "Textron Aviation", desc: "Aerospace Structural Components & Assemblies", logo: "/client_logos/aeronautical_clients/Textron_Aviation_logo_2018.svg.webp" },
  { name: "Recaero", desc: "Airbus & Boeing Supply Chain Precision Hardware", logo: "/client_logos/aeronautical_clients/recaero-logo.svg" },
  { name: "IISc Bengaluru", desc: "Advanced Propulsion & Materials Research", logo: "/client_logos/rd_clients/fSID-logo-img.png" },
  { name: "Wipro 3D", desc: "Additive Manufacturing & Metal 3D Printing", logo: "/client_logos/additive_clients/wipro_new_logo.png" },
  { name: "Wipro PARI", desc: "Robotics & Industrial Automation Systems", logo: "/client_logos/rd_clients/wipro-pari-new-logo.png" },
  { name: "Janatics", desc: "High Precision Pneumatic & Control Hardware", logo: "/client_logos/additive_clients/janatics_logo.png" }
];

function ClientsContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState("hal");

  useEffect(() => {
    if (tabParam && tabs.some(t => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <Link href="/" className="inline-flex items-center text-[#00b5e2] hover:text-white transition-colors mb-10 text-sm font-semibold">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>

      {/* Aerosapien Overview Briefing */}
      <div className="bg-gradient-to-br from-slate-900/90 via-[#0B1728] to-slate-950/90 border border-slate-800 rounded-3xl p-8 md:p-12 mb-14 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00b5e2]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 text-[#00b5e2] font-semibold tracking-[0.2em] uppercase text-xs px-4 py-1.5 rounded-full bg-[#00b5e2]/10 border border-[#00b5e2]/20 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Aerosapien Client Collaborations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Powering India&apos;s Flagship <span className="text-[#00b5e2]">Aerospace & Defence Programs</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans mb-8">
            AEROSAPIEN is a premier precision manufacturing and engineering partner based in Bengaluru, India. We specialize in Class-1 critical structural aerospace components, space propulsion hardware, tactical UAV assemblies, and high-precision medical automation devices. Operating under strict ISO 9001:2015 quality standards with precision micro-machining tolerances up to ±0.001 mm, we are a trusted defense supplier to HAL, ISRO LPSC, Astrobase, Cambrian Bioworks, and global aerospace leaders.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00b5e2] shrink-0" />
              <div>
                <div className="text-xs text-slate-400 font-sans">Quality System</div>
                <div className="text-sm font-bold text-white">ISO 9001:2015</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#00b5e2] shrink-0" />
              <div>
                <div className="text-xs text-slate-400 font-sans">Machining Precision</div>
                <div className="text-sm font-bold text-white">±0.001 mm</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#00b5e2] shrink-0" />
              <div>
                <div className="text-xs text-slate-400 font-sans">Quality Assurance</div>
                <div className="text-sm font-bold text-white">100% CMM Metrology</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-[#00b5e2] shrink-0" />
              <div>
                <div className="text-xs text-slate-400 font-sans">Location</div>
                <div className="text-sm font-bold text-white">Bengaluru, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Client Selector Navigation Pills */}
      <div className="text-center mb-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00b5e2]">Featured Client Portfolio</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300 ${
              activeTab === tab.id 
                ? "bg-[#00b5e2] text-white shadow-[0_0_20px_rgba(0,181,226,0.4)] scale-105" 
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="mb-20 min-h-[500px]">
        {activeTab === "hal" && <HalSection />}
        {activeTab === "isro" && <IsroSection />}
        {activeTab === "astrobase" && <AstrobaseSection />}
        {activeTab === "cbw" && <CbwSection />}
        {activeTab === "igdrones" && <IgDronesSection />}
      </div>

      {/* Additional Ecosystem Partners Section - Alternating White & Dark Blue Card Contrast */}
      <div className="border-t border-slate-800 pt-16 mb-12">
        <div className="text-center mb-10">
          <span className="text-[#00b5e2] text-xs font-bold uppercase tracking-[0.2em]">Ecosystem Partners</span>
          <h2 className="text-3xl font-bold text-white mt-2">Additional Engineering Collaborations</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {additionalClients.map((client, i) => {
            const isWhiteBg = i % 2 === 0;

            return (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 flex flex-col items-center justify-center text-center hover:border-slate-700 hover:bg-slate-900 transition-all">
                <div className={`w-20 h-20 rounded-xl flex items-center justify-center p-3 mb-3 shadow-md border transition-all duration-300 ${
                  isWhiteBg ? "bg-white border-slate-200" : "bg-[#0B1728] border-slate-800"
                }`}>
                  <Image src={client.logo} alt={client.name} width={70} height={70} className="object-contain w-full h-full" unoptimized />
                </div>
                <h3 className="font-bold text-sm text-slate-200">{client.name}</h3>
                <p className="text-xs text-slate-400 mt-1 font-sans">{client.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-[#070D18] text-white pt-24 pb-16">
      <Suspense fallback={<div className="text-center text-slate-400 py-20 font-mono">Loading Client Projects...</div>}>
        <ClientsContent />
      </Suspense>
    </main>
  );
}
