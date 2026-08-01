"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LOADING_MESSAGES = [
  "Loading Engineering Systems",
  "Loading Manufacturing Network",
  "Preparing Interface",
  "Loading Complete",
];

export default function LoadingSequence() {
  const [isVisible, setIsVisible] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Check if user has already visited in this session
    if (sessionStorage.getItem("hasVisitedAerosapien")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(false);
      return;
    }

    // Sequence timing
    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev < LOADING_MESSAGES.length - 1) return prev + 1;
        return prev;
      });
    }, 700);

    // End sequence
    const timeout = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("hasVisitedAerosapien", "true");
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-white)] text-[var(--color-deep-navy)]"
        >
          <div className="flex flex-col items-center space-y-8 w-full max-w-md px-6">
            {/* Official Aerosapien Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/brand/aerosapien-new-logo.png"
                alt="Aerosapien"
                width={200}
                height={136}
                className="object-contain"
                priority
                unoptimized
              />
            </motion.div>

            {/* Animated Line */}
            <div className="w-full h-[1px] bg-gray-200 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 left-0 w-1/2 bg-[var(--color-brand-accent)]"
              />
            </div>

            {/* Status Message */}
            <div className="h-6 overflow-hidden relative w-full text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm font-medium tracking-wide text-gray-500 absolute w-full"
                >
                  {LOADING_MESSAGES[messageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors mt-8"
            >
              Skip
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
