import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "https://cdn.enochdev.com/3d-models/Camila.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Bang001.geometry}
        material={materials["12 - Default.002"]}
        position={[-52.89, 0.78, -0.03]}
        scale={0.58}
      />
      <mesh
        geometry={nodes.Crop_T_Shirt001.geometry}
        material={materials["06 - Default.002"]}
        position={[-52.89, 0.78, -0.03]}
        scale={0.58}
      />
    </group>
  );
}

export default function Camila() {
  return (
    <div style={{ position: "relative" }}>
      <Canvas dpr={[1, 2]}>
        <ambientLight intensity={0.25} />
        <spotLight intensity={0.9} position={[2, 1, 2]} />
        <Suspense fallback={<Loader />}>
          <Center>
            <Model scale={0.05} />
          </Center>
          <OrbitControls />
          <Environment
            blur={true}
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
