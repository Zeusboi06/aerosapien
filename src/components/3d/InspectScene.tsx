"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, PresentationControls, Html } from "@react-three/drei";
import * as THREE from "three";

interface Props {
  activeHotspot: number;
}

export default function InspectScene({ activeHotspot }: Props) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[8, 10, 8]} intensity={2} color="#ffffff" />
      <directionalLight position={[-6, -4, -6]} intensity={0.6} color="#00B5E2" />
      <spotLight position={[0, 8, 0]} angle={0.4} penumbra={0.8} intensity={1.5} />

      <PresentationControls
        global
        snap
        rotation={[0.1, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.2, Math.PI / 1.2]}
      >
        <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.1}>
          <group ref={groupRef} scale={1.4}>

            {/* Base Flange */}
            <mesh position={[0, -1.2, 0]} castShadow>
              <cylinderGeometry args={[2, 2.2, 0.4, 64]} />
              <meshStandardMaterial color="#1e3550" metalness={0.95} roughness={0.08} />
            </mesh>
            {/* Bolt ring on flange */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              return (
                <mesh key={i} position={[Math.cos(angle) * 1.85, -1.0, Math.sin(angle) * 1.85]}>
                  <cylinderGeometry args={[0.06, 0.06, 0.15, 12]} />
                  <meshStandardMaterial color="#8899aa" metalness={0.9} roughness={0.1} />
                </mesh>
              );
            })}

            {/* Hotspot 1 label */}
            {activeHotspot === 1 && (
              <Html position={[2.5, -1.2, 0]} distanceFactor={6} zIndexRange={[100, 0]}>
                <div className="bg-[#0a1628]/95 border border-cyan-400/60 text-white px-3 py-2 rounded-lg shadow-2xl backdrop-blur-md whitespace-nowrap">
                  <span className="text-[10px] font-mono text-cyan-400 block font-bold">HOTSPOT 01</span>
                  <span className="text-xs font-bold block mt-0.5">5-Axis CNC Flange Interface</span>
                  <span className="text-[10px] text-slate-400 block">±0.001 mm | Ra 0.4 µm finish</span>
                </div>
              </Html>
            )}

            {/* Main Chamber Body */}
            <mesh position={[0, 0.2, 0]} castShadow>
              <cylinderGeometry args={[0.9, 1.5, 2.4, 64]} />
              <meshStandardMaterial color="#1a3a5c" metalness={0.9} roughness={0.12} />
            </mesh>

            {/* Cooling channel ring grooves */}
            {[0.6, 0.2, -0.2, -0.6].map((y, i) => (
              <mesh key={i} position={[0, y, 0]}>
                <torusGeometry args={[1.05 + (0.9 - y * 0.3), 0.025, 12, 64]} />
                <meshStandardMaterial color="#00B5E2" emissive="#00B5E2" emissiveIntensity={0.4} metalness={0.95} roughness={0.05} />
              </mesh>
            ))}

            {/* Hotspot 2 label */}
            {activeHotspot === 2 && (
              <Html position={[-2, 0.2, 0]} distanceFactor={6} zIndexRange={[100, 0]}>
                <div className="bg-[#0a1628]/95 border border-cyan-400/60 text-white px-3 py-2 rounded-lg shadow-2xl backdrop-blur-md whitespace-nowrap">
                  <span className="text-[10px] font-mono text-cyan-400 block font-bold">HOTSPOT 02</span>
                  <span className="text-xs font-bold block mt-0.5">Cooling Channel Jacket</span>
                  <span className="text-[10px] text-slate-400 block">Inconel 718 Superalloy</span>
                </div>
              </Html>
            )}

            {/* Nozzle Throat */}
            <mesh position={[0, 1.7, 0]} castShadow>
              <cylinderGeometry args={[0.5, 0.85, 0.8, 48]} />
              <meshStandardMaterial color="#2a4565" metalness={0.85} roughness={0.15} />
            </mesh>

            {/* Throat glow ring */}
            <mesh position={[0, 2.1, 0]}>
              <torusGeometry args={[0.52, 0.04, 16, 48]} />
              <meshStandardMaterial color="#00B5E2" emissive="#00B5E2" emissiveIntensity={1.2} />
            </mesh>

            {/* Hotspot 3 label */}
            {activeHotspot === 3 && (
              <Html position={[1.5, 1.7, 0]} distanceFactor={6} zIndexRange={[100, 0]}>
                <div className="bg-[#0a1628]/95 border border-cyan-400/60 text-white px-3 py-2 rounded-lg shadow-2xl backdrop-blur-md whitespace-nowrap">
                  <span className="text-[10px] font-mono text-cyan-400 block font-bold">HOTSPOT 03</span>
                  <span className="text-xs font-bold block mt-0.5">Cryogenic Nozzle Throat</span>
                  <span className="text-[10px] text-slate-400 block">&gt;15 MW/m² | NDT Tested</span>
                </div>
              </Html>
            )}

          </group>
        </Float>
      </PresentationControls>
    </>
  );
}
