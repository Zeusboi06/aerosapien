import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";

const programs = [
  {
    title: "Gaganyaan Human Spaceflight Programme",
    desc: "Mission-critical precision assemblies for India's first human spaceflight mission — the nation's most ambitious space program.",
  },
  {
    title: "PS4 Combustion Chamber Components",
    desc: "High thermal-flux components for the PS4 upper stage engine, requiring extreme precision and material integrity.",
  },
  {
    title: "Cryogenic Propulsion Hardware",
    desc: "Cryogenic system parts engineered to perform reliably at extreme temperatures for GSLV and LVM3 launch vehicles.",
  },
  {
    title: "Launch Vehicle Components",
    desc: "Structural and mechanical components for ISRO's launch vehicle platforms, vacuum-rated and vibration tested.",
  },
  {
    title: "Precision Space Mechanisms",
    desc: "Ultra-precise mechanical assemblies requiring sub-micron accuracy for orbital and interplanetary missions.",
  },
  {
    title: "Mission-Critical Aerospace Assemblies",
    desc: "End-to-end precision assemblies with 100% inspection, full documentation, and aerospace quality traceability.",
  },
];

const astrobaseComponents = [
  "Liquid Rocket Engine Components",
  "Propulsion System Hardware",
  "High Precision Space Components",
  "Prototype Development",
  "Precision Mechanical Assemblies",
];

const hardwareImages = [
  "/images/clients/isro/isro-hardware-2.png",
  "/images/clients/isro/isro-hardware-3.png",
  "/images/clients/isro/isro-hardware-4.png",
  "/images/clients/isro/isro-hardware-5.png",
  "/images/clients/isro/isro-hardware-6.png",
  "/images/clients/isro/isro-hardware-7.png",
];

export default function IsroPage() {
  return (
    <main className="min-h-screen bg-[#070D18] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-[#00b5e2] hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-16 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Client Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            ISRO — Liquid Propulsion <span className="text-[#00b5e2]">Systems Centre (LPSC)</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed font-sans">
            AEROSAPIEN contributes precision-engineered components supporting India&apos;s most ambitious
            space missions. Our manufacturing processes ensure exceptional precision, repeatability,
            and reliability for demanding space applications.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {programs.map((prog, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-[#00b5e2]/30 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-[#00b5e2] mb-3" />
              <h3 className="font-bold text-white mb-2 text-sm">{prog.title}</h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">{prog.desc}</p>
            </div>
          ))}
        </div>

        {/* Hardware gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Precision Space Hardware Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {hardwareImages.map((img, i) => (
              <div key={i} className="relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-slate-800 group">
                <Image
                  src={img}
                  alt={`ISRO Precision Hardware ${i + 1}`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* Astrobase section */}
        <div className="bg-slate-900/60 border border-[#00b5e2]/20 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#00b5e2]/10 border border-[#00b5e2]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-[#00b5e2] text-lg">🚀</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00b5e2]">Also Supporting</span>
              <h2 className="text-xl font-bold mt-1">Astrobase Space Technologies Pvt. Ltd.</h2>
              <p className="text-slate-400 text-sm mt-1 font-sans">
                Advancing India&apos;s Commercial Space Industry — Manufacturing precision components for advanced propulsion systems.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {astrobaseComponents.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-300 font-sans">
                <ChevronRight className="w-4 h-4 text-[#00b5e2] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/clients/hal" className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-600 transition-colors">
            HAL Projects <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-[#00b5e2]/10 hover:bg-[#00b5e2]/20 text-[#00b5e2] font-bold rounded-lg border border-[#00b5e2]/20 transition-colors">
            All Products <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}
