
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';


function SpinningCube() {
  const ref = useRef<THREE.Mesh>(null);
  // Load 6 images for each face of the cube
  const textures = useTexture([
    '/src/img/pfp.jpg', // right
    '/src/img/pfp.jpg', // left
    '/src/img/pfp.jpg', // top
    '/src/img/pfp.jpg', // bottom
    '/src/img/pfp.jpg', // front
    '/src/img/pfp.jpg', // back
  ]);

  // Only continuous rotation
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += 0.12 * delta;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[4, 4, 4]} />
      {/* 6 materials for 6 faces */}
      {textures.map((tex, i) => (
        <meshStandardMaterial
          key={i}
          map={tex}
          emissive="#000000"
          emissiveIntensity={0}
        />
      ))}
    </mesh>
  );
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] flex items-center justify-center" style={{ 
      background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
      boxShadow: '0 0 120px 40px #00ffe7, 0 0 200px 80px #00ffe7 inset'
    }}>
      <Canvas 
        camera={{ fov: 45, position: [0, 0, 8] }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
        style={{ background: '#222' }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#00ffe7" />
        <SpinningCube />
      </Canvas>
    </div>
  );
};

export default Background3D;