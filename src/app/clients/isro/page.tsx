import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function IsroPage() {
  return (
    <main className="min-h-screen bg-[#070D18] text-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-[#00b5e2] hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Client Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Indian Space Research Organisation <span className="text-[#00b5e2]">(ISRO)</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed font-sans">
            Aerosapien contributes precision-engineered components supporting India's space missions, including the Liquid Propulsion Systems Centre (LPSC) and the Gaganyaan Human Spaceflight Programme.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Precision Space Mechanisms</h2>
            <p className="text-slate-400 font-sans mb-6 leading-relaxed">
              Our manufacturing processes ensure exceptional precision, repeatability, and reliability for demanding space applications. We manufacture mission-critical aerospace assemblies for advanced propulsion systems.
            </p>
            <ul className="space-y-3 font-sans">
              {[
                "Gaganyaan Human Spaceflight Programme hardware",
                "PS4 Combustion Chamber Components",
                "Cryogenic Propulsion Hardware",
                "Liquid Rocket Engine Components",
                "Vacuum-Rated ±0.001 mm Tolerances"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#00b5e2] mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center justify-center p-8 overflow-hidden group">
            <div className="absolute inset-0 bg-[#00b5e2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image 
              src="/images/products/lca-fuselage-panel.png" 
              alt="Propulsion Hardware" 
              fill 
              className="object-contain p-8 group-hover:scale-105 transition-transform duration-700" 
              unoptimized 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-6">
              <div className="relative h-48 mb-6 bg-white/5 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <Image src="/images/products/lca-complex-frame.png" alt="Propulsion Assembly" fill className="object-contain p-4" unoptimized />
              </div>
              <h3 className="text-lg font-bold mb-2">Launch Vehicle Components</h3>
              <p className="text-sm text-slate-400 font-sans">
                  Topology optimized and precision-machined structural frames engineered for high vibration and extreme G-force environments during launch phases.
              </p>
           </div>
           
           <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-6">
              <div className="relative h-48 mb-6 bg-white/5 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <Image src="/images/products/lca-structural-bracket.png" alt="Precision Space Hardware" fill className="object-contain p-4" unoptimized />
              </div>
              <h3 className="text-lg font-bold mb-2">High Precision Space Components</h3>
              <p className="text-sm text-slate-400 font-sans">
                  Development of precision mechanical assemblies and prototype development to support India's commercial space industry and Astrobase Space Technologies.
              </p>
           </div>
        </div>
      </div>
    </main>
  );
}
