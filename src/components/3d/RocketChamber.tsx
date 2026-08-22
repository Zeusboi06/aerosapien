"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Center } from "@react-three/drei";
import * as THREE from "three";

export default function RocketChamber() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -20, -10]} intensity={1} color="#00B5E2" />
      
      <Center>
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
          <group ref={meshRef}>
            {/* Main Chamber Body */}
            <mesh castShadow receiveShadow position={[0, 1, 0]}>
              <cylinderGeometry args={[1.5, 1, 2, 32]} />
              <meshStandardMaterial color="#E9EDF2" metalness={0.9} roughness={0.2} wireframe={false} />
            </mesh>
            
            {/* Nozzle Throat */}
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
              <cylinderGeometry args={[1, 0.6, 0.5, 32]} />
              <meshStandardMaterial color="#c0c5cc" metalness={0.9} roughness={0.3} />
            </mesh>
            
            {/* Expansion Nozzle */}
            <mesh castShadow receiveShadow position={[0, -1, 0]}>
              <cylinderGeometry args={[0.6, 1.8, 2, 32]} />
              <meshStandardMaterial color="#E9EDF2" metalness={0.7} roughness={0.1} />
            </mesh>
            
            {/* Inner glow (combustion) */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.5, 1.7, 2.1, 32]} />
              <meshBasicMaterial color="#ff9900" transparent opacity={0.3} side={THREE.BackSide} />
            </mesh>
            
            {/* Blueprint Overlay Rings */}
            {[1, 1.5, 2, 0, -1, -1.5, -2].map((y, i) => (
              <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[y > 0 ? 1.5 : Math.abs(y) === 2 ? 1.8 : 1, 0.02, 16, 100]} />
                <meshBasicMaterial color="#00B5E2" transparent opacity={0.5} />
              </mesh>
            ))}
          </group>
        </Float>
      </Center>
    </>
  );
}
