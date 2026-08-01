"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Center, Float, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

export default function ComponentScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <PresentationControls
      global
      snap={true}
      rotation={[0, 0.3, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      
      <Center>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <group ref={groupRef}>
            {/* Simple placeholder for a CNC component / turbine part */}
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[1, 1, 0.5, 32]} />
              <meshStandardMaterial color="#E9EDF2" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
              <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
              <meshStandardMaterial color="#E9EDF2" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh castShadow receiveShadow position={[0, 1.2, 0]}>
              <torusGeometry args={[0.4, 0.1, 16, 100]} />
              <meshStandardMaterial color="#00B5E2" metalness={0.6} roughness={0.3} />
            </mesh>
          </group>
        </Float>
      </Center>
    </PresentationControls>
  );
}
