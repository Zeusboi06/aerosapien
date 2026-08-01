"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

interface LazyCanvasProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

export default function LazyCanvas({ children, fallback, className }: LazyCanvasProps) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load slightly before it enters viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {inView ? (
        <Canvas>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </Canvas>
      ) : (
        fallback || <div className="w-full h-full bg-[var(--color-soft-gray)] animate-pulse rounded-lg" />
      )}
    </div>
  );
}
