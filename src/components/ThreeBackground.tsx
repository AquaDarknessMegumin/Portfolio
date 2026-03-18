"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AbstractShape() {
    return (
        <Sphere visible args={[1, 100, 200]} scale={2.5} position={[0, 0, -2]}>
            <MeshDistortMaterial
                color="#8b1a1a" // Tailwind primary-500
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
                wireframe
                transparent
                opacity={0.12}
            />
        </Sphere>
    );
}

function Scene() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Auto-rotate the scene slowly
            groupRef.current.rotation.y += delta * 0.05;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Primary color sparkles */}
            <Sparkles 
                count={150} 
                scale={15} 
                size={1.5} 
                speed={0.4} 
                opacity={0.5} 
                color="#8b1a1a" // primary-500
            />
            {/* Secondary color sparkles */}
            <Sparkles 
                count={100} 
                scale={12} 
                size={2.5} 
                speed={0.3} 
                opacity={0.3} 
                color="#b8860b" // secondary-500
            />
            {/* Accent color sparkles */}
            <Sparkles 
                count={80} 
                scale={10} 
                size={2} 
                speed={0.2} 
                opacity={0.4} 
                color="#c97878" // accent-500
            />
            
            <AbstractShape />
        </group>
    );
}

export function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-[2] opacity-80 mix-blend-screen pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 2]} // Optimize for performance and quality (pixel ratio)
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Scene />
            </Canvas>
        </div>
    );
}
