"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

interface ExplodedChamberSceneProps {
  explodeFactor: number;
}

export default function ExplodedChamberScene({ explodeFactor = 0 }: ExplodedChamberSceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  const sep = explodeFactor * 2;

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[8, 12, 8]} intensity={2} color="#ffffff" />
      <directionalLight position={[-5, -5, -8]} intensity={0.8} color="#00B5E2" />
      <pointLight position={[0, 0, 5]} intensity={1} color="#ffffff" />

      <Float speed={1} rotationIntensity={0.05} floatIntensity={0.15}>
        <group ref={groupRef} position={[0, 0, 0]} scale={1.3}>

          {/* Part 1: Outer Cooling Jacket */}
          <group position={[0, 2 * sep, 0]}>
            <mesh>
              <cylinderGeometry args={[1.6, 1.9, 1.2, 48, 1, true]} />
              <meshStandardMaterial color="#1a3a5c" metalness={0.95} roughness={0.08} side={THREE.DoubleSide} />
            </mesh>
            {/* Wireframe overlay */}
            <mesh>
              <cylinderGeometry args={[1.62, 1.92, 1.22, 48, 1, true]} />
              <meshBasicMaterial color="#00B5E2" wireframe opacity={0.15} transparent />
            </mesh>
            {explodeFactor > 0.25 && (
              <Html position={[2.5, 0, 0]} distanceFactor={7} zIndexRange={[100, 0]}>
                <div className="bg-[#0a1628]/95 border border-cyan-400/60 text-white px-3 py-2 rounded-lg shadow-2xl backdrop-blur-md whitespace-nowrap animate-in fade-in">
                  <span className="text-[10px] font-mono text-cyan-400 block font-bold">PART 01</span>
                  <span className="text-xs font-bold block mt-0.5">Titanium Outer Cooling Jacket</span>
                  <span className="text-[10px] text-slate-400 block font-sans">Wall: 1.5mm | ±0.001mm tolerance</span>
                </div>
              </Html>
            )}
          </group>

          {/* Part 2: Cooling Channel Ring */}
          <group position={[0, 0.65 * sep, 0]}>
            <mesh>
              <torusGeometry args={[1.4, 0.18, 24, 64]} />
              <meshStandardMaterial color="#00B5E2" metalness={0.95} roughness={0.05} emissive="#00B5E2" emissiveIntensity={0.6} />
            </mesh>
            {explodeFactor > 0.35 && (
              <Html position={[-2.5, 0, 0]} distanceFactor={7} zIndexRange={[100, 0]}>
                <div className="bg-[#0a1628]/95 border border-cyan-400/60 text-white px-3 py-2 rounded-lg shadow-2xl backdrop-blur-md whitespace-nowrap">
                  <span className="text-[10px] font-mono text-cyan-400 block font-bold">PART 02</span>
                  <span className="text-xs font-bold block mt-0.5">3D Printed Micro-Cooling Channels</span>
                  <span className="text-[10px] text-slate-400 block font-sans">Additive Inconel 718</span>
                </div>
              </Html>
            )}
          </group>

          {/* Part 3: Inner Chamber Core */}
          <group position={[0, 0, 0]}>
            <mesh>
              <cylinderGeometry args={[0.85, 1.45, 2.5, 48]} />
              <meshStandardMaterial color="#2a3f55" metalness={0.85} roughness={0.15} />
            </mesh>
            {/* Inner glow ring */}
            <mesh position={[0, 0.8, 0]}>
              <torusGeometry args={[0.87, 0.05, 16, 48]} />
              <meshStandardMaterial color="#00B5E2" emissive="#00B5E2" emissiveIntensity={1} />
            </mesh>
            {explodeFactor > 0.15 && (
              <Html position={[2.2, 0, 0]} distanceFactor={7} zIndexRange={[100, 0]}>
                <div className="bg-[#0a1628]/95 border border-cyan-400/60 text-white px-3 py-2 rounded-lg shadow-2xl backdrop-blur-md whitespace-nowrap">
                  <span className="text-[10px] font-mono text-cyan-400 block font-bold">CORE</span>
                  <span className="text-xs font-bold block mt-0.5">Cryogenic Thrust Chamber Liner</span>
                  <span className="text-[10px] text-slate-400 block font-sans">ISRO Cryo Upper Stage Spec</span>
                </div>
              </Html>
            )}
          </group>

          {/* Part 4: Nozzle Expansion / Mounting Flange */}
          <group position={[0, -2 * sep, 0]}>
            <mesh>
              <cylinderGeometry args={[1.45, 2.2, 1.3, 48, 1, true]} />
              <meshStandardMaterial color="#3a4f65" metalness={0.9} roughness={0.1} side={THREE.DoubleSide} />
            </mesh>
            <mesh>
              <cylinderGeometry args={[1.47, 2.22, 1.32, 48, 1, true]} />
              <meshBasicMaterial color="#00B5E2" wireframe opacity={0.1} transparent />
            </mesh>
            {explodeFactor > 0.25 && (
              <Html position={[-2.5, 0, 0]} distanceFactor={7} zIndexRange={[100, 0]}>
                <div className="bg-[#0a1628]/95 border border-cyan-400/60 text-white px-3 py-2 rounded-lg shadow-2xl backdrop-blur-md whitespace-nowrap">
                  <span className="text-[10px] font-mono text-cyan-400 block font-bold">PART 04</span>
                  <span className="text-xs font-bold block mt-0.5">CNC Machined Mounting Flange</span>
                  <span className="text-[10px] text-slate-400 block font-sans">5-Axis | NCM Hardened Steel</span>
                </div>
              </Html>
            )}
          </group>

        </group>
      </Float>
    </>
  );
}
