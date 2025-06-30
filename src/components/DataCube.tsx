import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Edges, Text } from '@react-three/drei';
import * as THREE from 'three';

const FlashingCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      const flash = Math.sin(state.clock.elapsedTime * 6) * 0.5 + 0.5;
      material.emissiveIntensity = flash * 3;
      meshRef.current.scale.setScalar(0.2 + flash * 0.4);
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.03;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.4, 0]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

const FlashingParticles = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        const flash = Math.sin(state.clock.elapsedTime * 4 + index) * 0.5 + 0.5;
        material.emissiveIntensity = flash * 2;
        mesh.position.y = Math.sin(state.clock.elapsedTime * 2 + index) * 0.3;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 1.2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <mesh key={i} position={[x, 0, z]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={1}
              transparent
              opacity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const AnimatedCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#1A1A1A"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
        <Edges color="#ffffff" lineWidth={3} />
      </mesh>
      
      {/* Inner cube */}
      <mesh position={[0, 0, 0]} scale={0.6}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#333333"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.7}
        />
        <Edges color="#ffffff" lineWidth={1} />
      </mesh>
      
      {/* Flashing core */}
      <FlashingCore />
      
      {/* Flashing particles inside */}
      <FlashingParticles />
      
      {/* Floating nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <mesh key={i} position={[x, 0, z]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const DataCube = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#ffffff" />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.6}
          color="#ffffff"
          castShadow
        />
        <AnimatedCube />
      </Canvas>
    </div>
  );
};

export default DataCube;
