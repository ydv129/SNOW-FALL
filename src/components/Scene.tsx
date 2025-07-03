import React, { useRef, useMemo } from 'react';
import { useTexture, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const CYLINDER_CONFIGS = [
  { pos: [-4, 0, 0], rotY: 0.2, rotX: 0, scale: 1.2, text: 'NEERAJ' },
  { pos: [-1.5, 0, 0], rotY: -0.15, rotX: 0, scale: 1, text: 'YADAV' },
  { pos: [1.5, 0, 0], rotY: 0.18, rotX: 0, scale: 1.1, text: 'DEVELOPER' },
  { pos: [4, 0, 0], rotY: -0.22, rotX: 0, scale: 0.9, text: 'INTERACTIVE' },
];

const Scene = () => {
  const textures = useTexture([
    'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ]);

  const cylRefs = useMemo(() => CYLINDER_CONFIGS.map(() => React.createRef<THREE.Mesh>()), []);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }, delta) => {
    const time = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }

    cylRefs.forEach((ref, i) => {
      const cfg = CYLINDER_CONFIGS[i];
      if (ref.current) {
        ref.current.rotation.y += cfg.rotY * delta;
        ref.current.rotation.x = Math.sin(time + i) * 0.1;
        const scale = cfg.scale + Math.sin(time * 2 + i) * 0.1;
        ref.current.scale.setScalar(scale);
      }
    });
  });

  // Fallback: spinning sphere always visible
  const fallbackRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (fallbackRef.current) {
      fallbackRef.current.rotation.y += 0.01;
      fallbackRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
      {/* Fallback mesh for debugging */}
      <mesh ref={fallbackRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#00ffe7" emissive="#00ffe7" emissiveIntensity={0.5} />
      </mesh>
      {CYLINDER_CONFIGS.map((cfg, i) => (
        <group key={i} position={cfg.pos as [number, number, number]}>
          <mesh ref={cylRefs[i]}>
            <cylinderGeometry args={[1.2, 1.2, 1.5, 64, 64, true]} />
            <meshStandardMaterial 
              map={textures[i]} 
              transparent 
              side={THREE.DoubleSide}
              emissive="#001122"
              emissiveIntensity={0.2}
              roughness={0.3}
              metalness={0.7}
              opacity={0.8}
            />
          </mesh>

          <Text
            position={[0, 0, 1.21]}
            rotation={[0, 0, 0]}
            fontSize={0.3}
            color="#00ffe7"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#ffffff"
            font="/fonts/orbitron-bold.woff"
            maxWidth={2}
          >
            {cfg.text}
          </Text>

          <Text
            position={[0, 0, -1.21]}
            rotation={[0, Math.PI, 0]}
            fontSize={0.3}
            color="#ff4f4f"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#ffffff"
            font="/fonts/orbitron-bold.woff"
            maxWidth={2}
          >
            {cfg.text}
          </Text>

          <Text
            position={[-1.21, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#00ffe7"
            font="/fonts/orbitron-bold.woff"
            maxWidth={2}
            fillOpacity={0.8}
          >
            {cfg.text}
          </Text>

          <Text
            position={[1.21, 0, 0]}
            rotation={[0, Math.PI / 2, 0]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#ff4f4f"
            font="/fonts/orbitron-bold.woff"
            maxWidth={2}
            fillOpacity={0.8}
          >
            {cfg.text}
          </Text>

          <mesh position={[0, 0, 0]} scale={1.05}>
            <cylinderGeometry args={[1.25, 1.25, 1.55, 32, 32, true]} />
            <meshBasicMaterial 
              color="#00ffe7" 
              transparent 
              opacity={0.1}
              side={THREE.BackSide}
            />
          </mesh>
        </group>
      ))}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[6, 6.5, 64]} />
        <meshBasicMaterial 
          color="#00ffe7" 
          transparent 
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} scale={0.8}>
        <ringGeometry args={[7, 7.2, 64]} />
        <meshBasicMaterial 
          color="#ff4f4f" 
          transparent 
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Scene;
