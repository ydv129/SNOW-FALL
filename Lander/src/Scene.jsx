import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const CYLINDER_CONFIGS = [
  { pos: [-2.5, 0, 0], rotY: 0.1, rotX: 0.4 },
  { pos: [-0.8, 0, 0], rotY: -0.1, rotX: -0.4 },
  { pos: [0.8, 0, 0], rotY: 0.15, rotX: 0.2 },
  { pos: [2.5, 0, 0], rotY: -0.15, rotX: -0.2 },
];

const Scene = () => {
  const textures = useTexture([
    './back.jpg',
    './back.jpg',
    './back.jpg',
    './back.jpg',
  ]);

  // Create refs for each mesh in an array
  const cylRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useFrame((_, delta) => {
    cylRefs.forEach((ref, i) => {
      if (ref.current) {
        ref.current.rotation.y += CYLINDER_CONFIGS[i].rotY * delta / Math.abs(CYLINDER_CONFIGS[i].rotY);
        ref.current.rotation.x = CYLINDER_CONFIGS[i].rotX;
      }
    });
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      {CYLINDER_CONFIGS.map((cfg, i) => (
        <mesh ref={cylRefs[i]} position={cfg.pos} key={i}>
          <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
          <meshStandardMaterial map={textures[i]} transparent side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
};

export default Scene;