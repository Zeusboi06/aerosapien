"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, Maximize2 } from "lucide-react";

interface PosterLightboxProps {
  src: string;
  alt: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PosterLightbox({ src, alt, title, isOpen, onClose }: PosterLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 md:p-8 animate-in fade-in duration-300">
      {/* Top Bar */}
      <div className="w-full max-w-7xl flex items-center justify-between z-10 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-lg bg-[#00b5e2]/10 border border-[#00b5e2]/30 text-[#00b5e2]">
            <Maximize2 className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-white font-bold text-base md:text-lg font-mono">{title}</h3>
            <p className="text-xs text-slate-400 font-sans">Full Screen High-Resolution Infographic View · Press ESC or click X to close</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-[#00b5e2] hover:border-[#00b5e2] transition-all duration-200 shadow-lg"
          aria-label="Close Fullscreen View"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main High-Res Image Container */}
      <div 
        className="relative w-full max-w-7xl flex-1 my-4 flex items-center justify-center overflow-auto cursor-zoom-out"
        onClick={onClose}
      >
        <div 
          className="relative w-full h-full max-h-[85vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain rounded-xl shadow-2xl"
            unoptimized
            priority
          />
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="z-10 bg-slate-950/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-[#00b5e2]">
          <ZoomIn className="w-4 h-4" />
          HD Poster Resolution
        </span>
        <span className="text-slate-600">|</span>
        <span>Aerosapien Official Technical Infographic</span>
      </div>
    </div>
  );
}
