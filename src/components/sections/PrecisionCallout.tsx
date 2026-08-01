"use client";

import { Gauge, ShieldCheck, Compass, Layers, Award } from "lucide-react";

const callouts = [
  { icon: Gauge, label: "Precision", value: "±0.004 mm" },
  { icon: Layers, label: "Materials", value: "Ti / Inconel 718" },
  { icon: ShieldCheck, label: "Quality", value: "AS9100D" },
  { icon: Compass, label: "Heritage", value: "ISRO & HAL" },
  { icon: Award, label: "Traceability", value: "100% Certified" },
];

export default function PrecisionCallout() {
  return (
    <div className="w-full bg-[#0B1728] py-4 px-4 md:px-8 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {callouts.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center space-x-2.5"
            >
              <Icon className="w-4 h-4 text-[var(--color-brand-accent)]" />
              <div className="flex items-baseline space-x-1.5">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-sans">
                  {item.label}
                </span>
                <span className="text-sm font-bold text-white">
                  {item.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
