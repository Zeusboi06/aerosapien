"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";

const timelineSteps = [
  { title: "Research", desc: "Feasibility, material science, and process innovation." },
  { title: "Engineering", desc: "Precision CAD/CAM design and structural analysis." },
  { title: "Manufacturing", desc: "5-axis CNC machining and advanced fabrication." },
  { title: "Inspection", desc: "CMM verification to ±0.004 mm tolerances." },
  { title: "Delivery", desc: "Secure, traceable delivery to integration partners." },
  { title: "Support", desc: "Ongoing engineering and lifecycle support." },
];

export default function WhyAerosapien() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current && lineRef.current) {
      const steps = sectionRef.current.querySelectorAll(".timeline-step");
      
      // Animate the connecting line
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );

      // Animate each step
      steps.forEach((step, i) => {
        gsap.fromTo(step,
          { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            }
          }
        );
      });
    }
  }, []);

  return (
    <Section id="why-us" ref={sectionRef} className="bg-white">
      <div className="flex flex-col items-center mb-24 text-center max-w-3xl mx-auto">
        <h2 className="text-[var(--color-brand-accent)] font-semibold tracking-wider uppercase text-sm mb-4">
          The Aerosapien Advantage
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-deep-navy)]">
          Why Aerosapien?
        </h3>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Central Line */}
        <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2">
          <div ref={lineRef} className="w-full h-full bg-[var(--color-brand-primary)] origin-top" />
        </div>

        {/* Timeline Steps */}
        <div className="space-y-12">
          {timelineSteps.map((step, index) => (
            <div key={index} className={`timeline-step relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Dot */}
              <div className="absolute left-12 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-brand-accent)] -translate-x-1/2 border-4 border-white shadow-sm z-10" />
              
              {/* Content */}
              <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <div className="bg-[var(--color-soft-gray)] p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <span className="text-[var(--color-brand-accent)] font-mono text-sm font-bold block mb-2 opacity-60">
                    PHASE 0{index + 1}
                  </span>
                  <h4 className="text-xl font-bold text-[var(--color-deep-navy)] mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 font-sans text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
