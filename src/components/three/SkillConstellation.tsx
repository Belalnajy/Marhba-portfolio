"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, Text, Line, Html } from "@react-three/drei";
import * as THREE from "three";

const SKILL_DATA = [
  // Testing Concepts (Emerald)
  { id: "functional", label: "Functional", group: "concepts", pos: [0, 2, 0], color: "#06d6a0" },
  { id: "regression", label: "Regression", group: "concepts", pos: [-2, 3, -1], color: "#06d6a0" },
  { id: "exploratory", label: "Exploratory", group: "concepts", pos: [2, 3, 1], color: "#06d6a0" },
  { id: "e2e", label: "E2E Testing", group: "concepts", pos: [0, 4, -2], color: "#06d6a0" },
  
  // Tools & Automation (Blue)
  { id: "selenium", label: "Selenium", group: "tools", pos: [-3, -1, 2], color: "#118ab2" },
  { id: "testng", label: "TestNG", group: "tools", pos: [-4, 0, 1], color: "#118ab2" },
  { id: "postman", label: "Postman", group: "tools", pos: [-2, -2, 3], color: "#118ab2" },
  { id: "pom", label: "POM", group: "tools", pos: [-4, -2, 0], color: "#118ab2" },
  
  // DB & Code (Gold)
  { id: "java", label: "Java", group: "code", pos: [3, -1, 2], color: "#ffd166" },
  { id: "sql", label: "SQL", group: "code", pos: [4, 0, 1], color: "#ffd166" },
  { id: "oop", label: "OOP", group: "code", pos: [4, -2, 0], color: "#ffd166" },
  
  // CI/CD & Reporting (Coral)
  { id: "jenkins", label: "Jenkins", group: "cicd", pos: [0, -3, -2], color: "#ef476f" },
  { id: "git", label: "Git", group: "cicd", pos: [-1.5, -4, -1], color: "#ef476f" },
  { id: "jira", label: "Jira / Trello", group: "cicd", pos: [1.5, -4, 0], color: "#ef476f" },
];

// Define connections between related skills
const CONNECTIONS = [
  // Concepts
  ["functional", "regression"], ["functional", "exploratory"], ["regression", "e2e"],
  // Tools
  ["selenium", "testng"], ["selenium", "pom"], ["postman", "e2e"],
  // Java & Tools
  ["java", "selenium"], ["java", "oop"],
  // CI/CD
  ["git", "jenkins"], ["jenkins", "testng"],
];

function Node({ data, isHovered, setHovered }: { data: any, isHovered: boolean, setHovered: (id: string | null) => void }) {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    
    // Gentle floating animation
    const t = state.clock.getElapsedTime();
    mesh.current.position.y = data.pos[1] + Math.sin(t * 2 + data.pos[0]) * 0.1;
    
    // Scale on hover
    const targetScale = isHovered ? 1.5 : 1;
    mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <group position={data.pos as [number, number, number]}>
      <Sphere 
        ref={mesh} 
        args={[0.3, 32, 32]}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(data.id); document.body.style.cursor = "pointer"; }}
        onPointerOut={(e) => { setHovered(null); document.body.style.cursor = "auto"; }}
      >
        <meshStandardMaterial 
          color={data.color} 
          emissive={data.color} 
          emissiveIntensity={isHovered ? 2 : 0.5} 
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      
      {/* HTML Label below the node */}
      <Html 
        position={[0, -0.6, 0]} 
        center 
        style={{ 
          transition: "all 0.2s", 
          opacity: isHovered ? 1 : 0.6,
          transform: `scale(${isHovered ? 1.2 : 1})`,
          pointerEvents: "none"
        }}
      >
        <div className={`px-2 py-1 rounded bg-[var(--color-brand-bg)] border border-[${data.color}] text-xs whitespace-nowrap font-mono font-bold shadow-lg`} style={{ color: data.color }}>
          {data.label}
        </div>
      </Html>
    </group>
  );
}

function Edges() {
  const lines = useMemo(() => {
    return CONNECTIONS.map((pair) => {
      const start = SKILL_DATA.find(n => n.id === pair[0]);
      const end = SKILL_DATA.find(n => n.id === pair[1]);
      if (start && end) {
        return {
          start: start.pos,
          end: end.pos,
          color: start.color // use start node color for gradient feel
        };
      }
      return null;
    }).filter(Boolean);
  }, []);

  return (
    <group>
      {lines.map((line: any, i) => (
        <Line 
          key={i} 
          points={[line.start, line.end]} 
          color={line.color} 
          lineWidth={1.5} 
          transparent 
          opacity={0.3} 
        />
      ))}
    </group>
  );
}

function Constellation() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const { mouse } = useThree();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Slow auto-rotation
    groupRef.current.rotation.y += delta * 0.1;
    
    // Very subtle mouse parallax
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouse.x * 0.5, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouse.y * 0.5, 0.05);
  });

  return (
    <group ref={groupRef}>
      <Edges />
      {SKILL_DATA.map((node) => (
        <Node 
          key={node.id} 
          data={node} 
          isHovered={hoveredNode === node.id} 
          setHovered={setHoveredNode} 
        />
      ))}
    </group>
  );
}

export default function SkillConstellation() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Constellation />
    </Canvas>
  );
}
