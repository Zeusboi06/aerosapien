import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const highlights = [
  "Precision Medical Equipment Structures",
  "Aerospace Grade Manufacturing Practices",
  "Medical Grade Materials & Surface Coatings",
  "Clean Manufacturing Environment",
  "Medical Grade Coolants & Lubricants",
  "Critical Structural Assembly",
  "High Precision CNC Machining",
  "GD&T Controlled Manufacturing",
  "Precision Tolerance up to 50 Microns",
  "100% Quality Inspection",
  "Production Ready Manufacturing",
  "ISO 13485:2016 Certified Process",
];

export default function CbwMedicalPage() {
  return (
    <main className="min-h-screen bg-[#070D18] text-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-[#00b5e2] hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Client Portfolio — Medical Automation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Cambrian Bioworks Pvt. Ltd.
          </h1>
          <p className="text-lg text-[#00b5e2] font-semibold mb-4">
            Aerospace Precision for Medical Automation
          </p>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed font-sans">
            AEROSAPIEN manufactures the complete precision structural assemblies for the{" "}
            <strong className="text-white">BELUGA Automated Genomic Sample Preparation Platform</strong>,
            applying aerospace manufacturing standards to advanced laboratory automation.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 border border-slate-800">
          <Image
            src="/images/clients/cbw-medical-full.png"
            alt="Cambrian Bioworks — BELUGA Medical Automation Platform by Aerosapien"
            fill
            className="object-contain bg-white"
            unoptimized
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* About the project */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">The BELUGA Platform</h2>
            <p className="text-slate-300 font-sans leading-relaxed mb-4">
              After more than <strong className="text-white">two years of engineering, development, validation,
              and precision manufacturing</strong>, the BELUGA Automated Genomic Sample Preparation Platform
              has successfully transitioned into production.
            </p>
            <p className="text-slate-400 font-sans leading-relaxed text-sm">
              AEROSAPIEN was responsible for manufacturing the complete precision structural assemblies
              for this cutting-edge laboratory automation platform, applying the same aerospace manufacturing
              standards used in flight-critical components to advanced medical automation — enabling
              unprecedented reliability and precision in genomic research.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["Aerospace Standards", "Medical Precision", "Automated Innovation", "Built for Excellence"].map((tag, i) => (
                <span key={i} className="text-xs font-bold text-[#00b5e2] bg-[#00b5e2]/10 border border-[#00b5e2]/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Manufacturing highlights */}
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-5">Manufacturing Highlights</h2>
            <ul className="space-y-2.5">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00b5e2] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom certs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { val: "ISO 13485:2016", label: "Certified" },
            { val: "Aerospace Grade", label: "Manufacturing" },
            { val: "Clean Room", label: "Environment" },
            { val: "50 Microns", label: "Tolerance" },
          ].map((s, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
              <div className="text-[#00b5e2] font-bold text-sm">{s.val}</div>
              <div className="text-slate-400 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors border border-slate-600 mr-4">
            View All Products
          </Link>
          <Link href="/clients/hal" className="inline-flex items-center justify-center px-8 py-4 bg-[#00b5e2]/10 hover:bg-[#00b5e2]/20 text-[#00b5e2] font-bold rounded-lg transition-colors border border-[#00b5e2]/20">
            HAL Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
