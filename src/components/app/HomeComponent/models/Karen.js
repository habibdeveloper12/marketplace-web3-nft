import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "https://cdn.enochdev.com/3d-models/Karen.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.CC_Base_Body001.geometry}
        material={materials["11 - Default"]}
        position={[-40.64, 1.5, -0.42]}
        scale={0.4}
      />
      <mesh
        geometry={nodes.Hair001.geometry}
        material={materials["12 - Default"]}
        position={[-40.69, 1.5, -0.33]}
        scale={0.4}
      />
    </group>
  );
}

export default function Karen() {
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
              "https://cdn.enochdev.com/3d-models/backgrounds/blueEntrance.hdr"
            }
            background={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
