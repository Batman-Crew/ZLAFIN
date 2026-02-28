import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

const GoldBox = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    ref.current.rotation.y += 0.005 * speed;
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#c9943e"
          metalness={0.9}
          roughness={0.15}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
};

const GoldSphere = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#d4a843"
        metalness={0.95}
        roughness={0.1}
        envMapIntensity={2}
      />
    </mesh>
  );
};

const GlassTorus = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
  });
  return (
    <Float speed={speed * 0.7} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.35, 16, 48]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.2}
          anisotropy={0.3}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#1a2744"
          transmissionSampler={false}
        />
      </mesh>
    </Float>
  );
};

const Octahedron = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.4;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.5;
  });
  return (
    <Float speed={speed * 0.5} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#b8860b"
          metalness={0.85}
          roughness={0.2}
          envMapIntensity={1.8}
        />
      </mesh>
    </Float>
  );
};

const Particles = () => {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#c9943e" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const Hero3DScene = () => {
  return (
    <div className="absolute inset-0 z-[1]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffd700" />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#4a6fa5" />
        <pointLight position={[0, -3, 3]} intensity={0.8} color="#c9943e" />

        <GoldBox position={[-4.5, 2, -2]} scale={0.6} speed={1.2} />
        <GoldBox position={[4.2, -1.5, -1]} scale={0.45} speed={0.9} />
        <GoldSphere position={[3.5, 2.5, -3]} scale={0.35} speed={0.7} />
        <GoldSphere position={[-3, -2, -2]} scale={0.5} speed={1} />
        <GlassTorus position={[5, 0, -2]} scale={0.7} speed={1.1} />
        <GlassTorus position={[-5, -1, -3]} scale={0.5} speed={0.8} />
        <Octahedron position={[0, 3, -4]} scale={0.5} speed={0.6} />
        <Octahedron position={[-2, -3, -2]} scale={0.35} speed={1.3} />
        <Octahedron position={[3, -3, -3]} scale={0.4} speed={0.9} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
