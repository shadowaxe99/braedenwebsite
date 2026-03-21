import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
  const [points, sizes] = useMemo(() => {
    const p = [];
    const s = [];
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 60;
      p.push(x, y, z);
      s.push(Math.random());
    }
    return [new Float32Array(p), new Float32Array(s)];
  }, []);

  const materialRef = useRef<THREE.PointsMaterial>(null);
  
  useFrame((state) => {
    if (materialRef.current) {
      // Individual twinkling effect simulated by global opacity oscillation
      const baseOpacity = 0.15;
      materialRef.current.opacity = baseOpacity + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <Points positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        ref={materialRef}
        transparent
        color="#C6A85B"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function StarBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`fixed inset-0 pointer-events-none -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 1] }} style={{ pointerEvents: 'none' }}>
        <StarField />
      </Canvas>
    </div>
  );
}
