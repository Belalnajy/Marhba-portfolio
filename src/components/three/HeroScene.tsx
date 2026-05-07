"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Environment, Float, Wireframe } from "@react-three/drei";
import * as THREE from "three";

// Random points generator for particle sphere
function generateParticles(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Spherical distribution
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  // Create particles only once
  const positions = useMemo(() => generateParticles(1200, 15), []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Slow continuous rotation
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Mouse parallax effect
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouse.x * 2, 0.05);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouse.y * 2, 0.05);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06d6a0" // Emerald accent
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function GeometryRings() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-4, 2, -5]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshBasicMaterial color="#118ab2" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[4, -3, -3]} rotation={[0, Math.PI / 3, 0]}>
          <torusGeometry args={[1.2, 0.4, 16, 32]} />
          <meshBasicMaterial color="#ef476f" wireframe transparent opacity={0.2} />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[0, -5, -8]} rotation={[Math.PI / 6, 0, Math.PI / 6]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshBasicMaterial color="#ffd166" wireframe transparent opacity={0.15} />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
      <color attach="background" args={["#0a0e17"]} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#06d6a0" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#118ab2" />
      
      <ParticleField />
      <GeometryRings />
      
      {/* Fog to fade out faraway particles */}
      <fog attach="fog" args={["#0a0e17", 5, 20]} />
    </Canvas>
  );
}
