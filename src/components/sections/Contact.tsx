"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import { Mail, MapPin, Phone, ArrowRight, ExternalLink } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
      );
    }
  }, []);

  return (
    <Section id="contact" className="bg-[#060E18] relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-xs">Get In Touch</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">Partner with Aerosapien</h2>
        <p className="mt-4 text-slate-400 font-sans text-base leading-relaxed">
          Ready to elevate your aerospace manufacturing capabilities? Contact our engineering team to discuss your specific requirements.
        </p>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-[var(--color-brand-accent)]/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-brand-accent)]/10 border border-[var(--color-brand-accent)]/20 flex items-center justify-center text-[var(--color-brand-accent)] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 text-sm">Headquarters</h4>
                <p className="text-slate-400 font-sans text-sm leading-relaxed">
                  Kariobanahalli, Thigalarapalya Main Rd,<br />Nagasandra Post, Bengaluru, Karnataka 560073, India
                </p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Kariobanahalli,+Thigalarapalya+Main+Rd,+Nagasandra+Post,+Bengaluru,+Karnataka+560073" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-xs text-[var(--color-brand-accent)] hover:underline font-semibold">
                  Get Directions <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-[var(--color-brand-accent)]/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-brand-accent)]/10 border border-[var(--color-brand-accent)]/20 flex items-center justify-center text-[var(--color-brand-accent)] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 text-sm">Email</h4>
                <a href="mailto:aerosapien.co.in@gmail.com" className="text-slate-400 font-sans hover:text-[var(--color-brand-accent)] transition-colors text-sm">aerosapien.co.in@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-[var(--color-brand-accent)]/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-brand-accent)]/10 border border-[var(--color-brand-accent)]/20 flex items-center justify-center text-[var(--color-brand-accent)] flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 text-sm">Phone</h4>
                <a href="tel:+919035744541" className="text-slate-400 font-sans hover:text-[var(--color-brand-accent)] transition-colors text-sm">+91 90357 44541</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/[0.07] h-64 lg:flex-1">
            <iframe
              title="Aerosapien Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.177!2d77.5198!3d13.0478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d9a65fcb73b%3A0x5b2a5f2c6c15d48!2sKariobanahalli%2C%20Nagasandra%2C%20Bengaluru%2C%20Karnataka%20560073!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="bg-white/[0.04] p-8 md:p-10 rounded-2xl border border-white/[0.07]">
          <h4 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h4>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/40 focus:border-[var(--color-brand-accent)]/40 transition-all font-sans text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Company</label>
                <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/40 focus:border-[var(--color-brand-accent)]/40 transition-all font-sans text-sm" placeholder="Organization" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/40 focus:border-[var(--color-brand-accent)]/40 transition-all font-sans text-sm" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Message / Requirements</label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/40 focus:border-[var(--color-brand-accent)]/40 transition-all font-sans text-sm resize-none" placeholder="Describe your requirement, material, quantity, tolerances..." />
            </div>
            <button type="submit" className="w-full bg-[var(--color-brand-accent)] hover:bg-[#00a0c8] text-white font-bold py-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group shadow-[0_4px_0_#007a99,0_6px_20px_rgba(0,181,226,0.3)] hover:shadow-[0_2px_0_#007a99,0_4px_14px_rgba(0,181,226,0.25)] active:shadow-none active:translate-y-1">
              <span>Submit Inquiry</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <div className="mt-8 pt-7 border-t border-white/10">
            <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Subscribe to Updates</h4>
            <p className="text-xs text-slate-500 font-sans mb-4">Get the latest news on Aerosapien R&D and manufacturing capabilities.</p>
            <div className="flex gap-2">
              <input type="email" className="flex-1 px-4 py-2.5 text-sm rounded-lg border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/40 font-sans" placeholder="Email address" />
              <button className="px-4 py-2.5 bg-white/[0.07] hover:bg-white/[0.12] text-white font-semibold text-sm rounded-lg transition-colors border border-white/10">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
