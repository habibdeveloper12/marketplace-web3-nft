import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "https://cdn.enochdev.com/3d-models/Helena.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Double_low001.geometry}
        material={materials["12 - Default"]}
        position={[44.34, -0.04, -1.35]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.4}
      />
      <mesh
        geometry={nodes.Object001.geometry}
        material={materials["11 - Default"]}
        position={[44.36, 0.56, -1.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      />
    </group>
  );
}

export default function Helena() {
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
              "https://cdn.enochdev.com/3d-models/backgrounds/luminanceWhite.hdr"
            }
            background={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
