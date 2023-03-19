import React from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "https://cdn.enochdev.com/3d-models/LenoxDraco.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Jacket_Low001.geometry}
        material={materials["18 - Default"]}
        position={[-38.01, -0.05, 1.41]}
        scale={0.28}
      />
      <mesh
        geometry={nodes.Hairs.geometry}
        material={materials["24 - Default"]}
        position={[-38.01, -0.05, 1.41]}
        scale={0.28}
      />
    </group>
  );
}

export default function Lenox() {
  return (
    <div>
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 60, near: 0.1, far: 1000, position: [0, 0, 5] }}
      >
        <ambientLight intensity={0.1} />
        <spotLight intensity={0.9} position={[2, 1, 2]} />

        <Suspense fallback={<Loader />}>
          <Center>
            <Model scale={0.1} />
          </Center>

          <OrbitControls />
          <Environment
            blur={true}
            files={
              "https://cdn.enochdev.com/3d-models/backgrounds/Luminance.hdr"
            }
            background={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
