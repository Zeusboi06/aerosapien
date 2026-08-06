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
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-3 sm:p-6 md:p-8 animate-in fade-in duration-300">
      {/* Top Bar */}
      <div className="w-full max-w-7xl flex items-center justify-between z-10 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5 max-w-[80%]">
          <span className="p-1.5 sm:p-2 rounded-lg bg-[#00b5e2]/10 border border-[#00b5e2]/30 text-[#00b5e2] shrink-0">
            <Maximize2 className="w-4 h-4" />
          </span>
          <div className="truncate">
            <h3 className="text-white font-bold text-xs sm:text-base font-mono truncate">{title}</h3>
            <p className="text-[10px] sm:text-xs text-slate-400 font-sans truncate">Tap X or backdrop to close</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 sm:p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-[#00b5e2] hover:border-[#00b5e2] transition-all duration-200 shadow-lg shrink-0"
          aria-label="Close Fullscreen View"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Main Image Viewport */}
      <div 
        className="relative w-full max-w-7xl flex-1 my-2 sm:my-4 flex items-center justify-center overflow-auto cursor-zoom-out"
        onClick={onClose}
      >
        <div 
          className="relative w-full h-full max-h-[75vh] sm:max-h-[85vh] flex items-center justify-center"
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

      {/* Bottom Footer */}
      <div className="z-10 bg-slate-950/90 backdrop-blur-md px-4 sm:px-6 py-2 rounded-full border border-slate-800 text-[10px] sm:text-xs font-mono text-slate-300 flex items-center gap-2 sm:gap-4 max-w-full overflow-hidden">
        <span className="flex items-center gap-1 text-[#00b5e2] shrink-0">
          <ZoomIn className="w-3.5 h-3.5" />
          HD View
        </span>
        <span className="text-slate-600">|</span>
        <span className="truncate">Aerosapien Official Poster</span>
      </div>
    </div>
  );
}
