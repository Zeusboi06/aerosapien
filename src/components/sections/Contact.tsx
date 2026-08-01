"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const elements = containerRef.current.children;
      
      gsap.fromTo(
        elements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <Section id="contact" className="bg-[var(--color-soft-gray)] relative">
      <div ref={containerRef} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left: Contact Information */}
        <div>
          <h2 className="text-[var(--color-brand-accent)] font-semibold tracking-wider uppercase text-sm mb-4">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-deep-navy)] mb-8">
            Partner with Aerosapien
          </h3>
          <p className="text-lg text-slate-600 font-sans mb-12">
            Ready to elevate your aerospace manufacturing capabilities? 
            Contact our engineering team to discuss your specific requirements.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--color-brand-primary)] flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-deep-navy)] mb-1">Headquarters Address</h4>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  Kariobanahalli, Thigalarapalya Main Rd,<br />
                  Nagasandra Post, Bengaluru, Karnataka 560073, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--color-brand-primary)] flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-deep-navy)] mb-1">Email</h4>
                <a href="mailto:aerosapien.co.in@gmail.com" className="text-slate-600 font-sans hover:text-[var(--color-brand-accent)] transition-colors block text-sm">
                  aerosapien.co.in@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--color-brand-primary)] flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-deep-navy)] mb-1">Phone</h4>
                <a href="tel:+919035744541" className="text-slate-600 font-sans hover:text-[var(--color-brand-accent)] transition-colors text-sm">
                  +91 90357 44541
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form & Newsletter */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          <h4 className="text-2xl font-bold text-[var(--color-deep-navy)] mb-6">Send an Inquiry</h4>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] focus:border-transparent transition-all font-sans"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] focus:border-transparent transition-all font-sans"
                  placeholder="Organization"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] focus:border-transparent transition-all font-sans"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message / Requirements</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] focus:border-transparent transition-all font-sans resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-[var(--color-deep-navy)] hover:bg-[var(--color-brand-primary)] text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>Submit Inquiry</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-gray-100">
            <h4 className="text-sm font-bold text-[var(--color-deep-navy)] mb-2 uppercase tracking-wide">Subscribe to Updates</h4>
            <p className="text-sm text-slate-500 font-sans mb-4">Get the latest news on Aerosapien R&D and manufacturing capabilities.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                className="flex-1 px-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] font-sans"
                placeholder="Email address"
              />
              <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </Section>
  );
}
