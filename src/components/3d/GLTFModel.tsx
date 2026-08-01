"use client";

import { useGLTF, Center, Float } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GLTFModelProps {
  url?: string;
  modelPath?: string;
  scale?: number;
  rotationSpeed?: number;
  autoRotate?: boolean;
  wireframe?: boolean;
}

export default function GLTFModel({
  url,
  modelPath,
  scale = 1,
  rotationSpeed = 0.5,
  autoRotate = true,
  wireframe = false,
}: GLTFModelProps) {
  const modelUrl = url || modelPath || "/models/turbine_blade.glb";
  const { scene } = useGLTF(modelUrl);
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (modelRef.current && autoRotate) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * rotationSpeed;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
      
      <Center>
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
          <primitive 
            ref={modelRef} 
            object={scene} 
            scale={scale} 
          />
        </Float>
      </Center>
    </>
  );
}

useGLTF.preload("/models/turbine_blade.glb");

