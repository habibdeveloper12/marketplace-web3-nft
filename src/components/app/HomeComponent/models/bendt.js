import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";

function Model(props) {
  const { nodes, materials } = useGLTF(
    "https://cdn.enochdev.com/3d-models/Bendt.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.HoodieMale_Puffy_Open_01_003.geometry}
        material={materials["09 - Default"]}
        position={[79.29, 6.35, -0.11]}
        scale={0.48}
      />
      <mesh
        geometry={nodes.Hair.geometry}
        material={materials["19 - Default"]}
        position={[79.26, 3.07, 0.04]}
        scale={0.5}
      />
    </group>
  );
}

export default function Bendt() {
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
              "https://cdn.enochdev.com/3d-models/backgrounds/studioLightBlack.hdr"
            }
            background={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
