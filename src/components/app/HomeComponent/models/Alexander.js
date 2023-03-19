import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "https://cdn.enochdev.com/3d-models/Alexander.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Classic_short001.geometry}
        material={materials["05 - Default"]}
        position={[30.88, 0.46, -1.95]}
        scale={0.32}
      />
      <mesh
        geometry={nodes.Layered_sweater001.geometry}
        material={materials["04 - Default"]}
        position={[30.88, 0.46, -1.95]}
        scale={0.32}
      />
    </group>
  );
}

export default function Alexander() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <Suspense fallback={<Loader />}>
          <Center>
            <Model scale={0.1} />
          </Center>

          <OrbitControls />
          <Environment
            files={
              "https://cdn.enochdev.com/3d-models/backgrounds/greyEntrance.hdr"
            }
            background={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
