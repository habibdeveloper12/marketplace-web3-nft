import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "https://cdn.enochdev.com/3d-models/Jodie.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.CC_Base_Body001.geometry}
        material={materials["01 - Default"]}
        position={[-36.76, 0.57, 0.94]}
        scale={0.31}
      />
      <mesh
        geometry={nodes.Side_part_wavy001.geometry}
        material={materials["02 - Default"]}
        position={[-36.76, 0.57, 0.94]}
        scale={0.31}
      />
    </group>
  );
}

export default function Jodie() {
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
