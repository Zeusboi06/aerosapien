import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deep-navy)] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div className="md:col-span-2 space-y-5">
            <Link href="/" className="inline-block group mb-2">
              <Image
                src="/brand/aerosapien-logo-full.png"
                alt="Aerosapien Logo"
                width={160}
                height={57}
                className="object-contain"
                unoptimized
              />
            </Link>
            <p className="text-slate-400 font-sans max-w-sm leading-relaxed text-sm">
              A next-generation aerospace manufacturing and engineering company based in Bangalore, India. Driven by precision, innovation, and national pride.
            </p>
          </div>
          <div className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Company</h4>
            <ul className="space-y-2.5 font-sans text-sm text-slate-400">
              <li><Link href="#about" className="hover:text-[var(--color-brand-accent)] transition-colors flex items-center group">About Us <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="#capabilities" className="hover:text-[var(--color-brand-accent)] transition-colors flex items-center group">Capabilities <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="#timeline" className="hover:text-[var(--color-brand-accent)] transition-colors flex items-center group">Flight Heritage <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="#research" className="hover:text-[var(--color-brand-accent)] transition-colors flex items-center group">Research & Dev <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>
          <div className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Contact & Location</h4>
            <address className="not-italic font-sans text-sm text-slate-400 space-y-2.5 leading-relaxed">
              <p>Kariobanahalli, Thigalarapalya Main Rd,<br />Nagasandra Post, Bengaluru, Karnataka 560073</p>
              <p><a href="tel:+919035744541" className="hover:text-[var(--color-brand-accent)] transition-colors">+91 90357 44541</a></p>
              <p><a href="mailto:aerosapien.co.in@gmail.com" className="hover:text-[var(--color-brand-accent)] transition-colors">aerosapien.co.in@gmail.com</a></p>
            </address>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-slate-500 font-sans text-xs">© {new Date().getFullYear()} Aerosapien Technologies. All rights reserved.</p>
          <div className="flex space-x-6 text-xs font-sans text-slate-500"><span>Bengaluru, India</span></div>
        </div>
      </div>
    </footer>
  );
}
