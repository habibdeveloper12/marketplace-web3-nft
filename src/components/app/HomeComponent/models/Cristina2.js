import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "https://cdn.enochdev.com/3d-models/Cristina2.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.CC_Base_Body001.geometry}
        material={materials["11 - Default"]}
        position={[-66.65, 0.61, -1.19]}
        scale={0.43}
      />
      <mesh
        geometry={nodes.Hair001.geometry}
        material={materials["10 - Default"]}
        position={[-66.65, 0.61, -1.19]}
        scale={0.43}
      />
    </group>
  );
}

export default function Cristina() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <Suspense fallback={<Loader />}>
          <Center>
            <Model scale={0.09} />
          </Center>

          <OrbitControls />
          <Environment
            files={
              "https://cdn.enochdev.com/3d-models/backgrounds/yellowEntrance.hdr"
            }
            background={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
