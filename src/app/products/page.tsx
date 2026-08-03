import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";

const productsList = [
  {
    title: "5-Axis CNC Precision Components",
    client: "HAL / Defence",
    desc: "Complex 3D aerospace geometries machined from solid billets of Inconel, Titanium Ti-6Al-4V, and NCM Steel. Engineered with a precision tolerance of ±0.001 mm.",
    img: "/images/products/lca-cnc-assembly.png"
  },
  {
    title: "LCA Tejas Structural Brackets",
    client: "HAL",
    desc: "Critical primary structural load brackets and wing attachment fittings for the Light Combat Aircraft (LCA) Tejas flight hardware. Features DFM optimization and zero-defect standard.",
    img: "/images/products/lca-wing-structural.png"
  },
  {
    title: "UAV Airframe & Stabilizer Assemblies",
    client: "IG Drones / Defence",
    desc: "Aerodynamic fin & tail-plane structural components engineered for next-generation unmanned aerial systems. Tactical military-grade sub-assemblies deployed with IG Drones.",
    img: "/images/products/lca-fin-assembly.png"
  },
  {
    title: "Propulsion & Combustion Hardware",
    client: "ISRO",
    desc: "PS4 combustion chamber components and cryogenic propulsion hardware supporting the Gaganyaan Human Spaceflight Programme.",
    img: "/images/products/lca-fuselage-panel.png"
  },
  {
    title: "Launch Vehicle Complex Frames",
    client: "ISRO / Astrobase",
    desc: "Topology optimized, vacuum-rated structural frames for space systems and liquid rocket engine components.",
    img: "/images/products/lca-complex-frame.png"
  },
  {
    title: "Precision Landing Gear Sub-assemblies",
    client: "HAL / Aerospace",
    desc: "Heavy-duty precision landing gear shock-strut fittings with 100% CMM measurement verification and fatigue certification.",
    img: "/images/products/lca-landing-gear.png"
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#070D18] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-[#00b5e2] hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="mb-16 max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00b5e2] mb-2">Detailed Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Flight-Ready Products & Components
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed font-sans">
            Explore our comprehensive range of precision-manufactured aerospace components. We deliver uncompromising quality with tolerances up to ±0.001 mm for India's leading defence and space organizations.
          </p>
        </div>

        <div className="space-y-16">
          {productsList.map((product, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center bg-slate-900/40 p-8 rounded-3xl border border-slate-800/60`}>
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video lg:aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-8 overflow-hidden group">
                  <div className="absolute inset-0 bg-[#00b5e2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image 
                    src={product.img} 
                    alt={product.title} 
                    fill 
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-700" 
                    unoptimized 
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00b5e2] bg-[#00b5e2]/10 px-3 py-1 rounded-md mb-4 border border-[#00b5e2]/20">
                  {product.client}
                </div>
                <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                <p className="text-slate-300 font-sans text-lg mb-6 leading-relaxed">
                  {product.desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-sm font-sans text-slate-400">
                     <CheckCircle2 className="w-4 h-4 text-[#00b5e2] mr-2" />
                     ±0.001 mm Precision
                  </div>
                  <div className="flex items-center text-sm font-sans text-slate-400">
                     <CheckCircle2 className="w-4 h-4 text-[#00b5e2] mr-2" />
                     AS9100D Certified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold mb-6">Explore Our Client Work</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/clients/hal" className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors border border-slate-600">
              HAL Projects <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/clients/isro" className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors border border-slate-600">
              ISRO Missions <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
