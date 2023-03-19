import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { KernelSize } from "postprocessing";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Loader } from "./Loader";

export function Model(props) {
  const { nodes, materials, scene } = useGLTF(
    "https://cdn.enochdev.com/3d-models/Tim.glb"
  );
  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.CC_Base_Tongue.geometry}
          material={materials["Std_Tongue_Pbr.002"]}
          position={[55.2, -0.05, 1.41]}
          scale={0.28}
        />
        <group position={[55.2, -0.05, 1.41]} scale={0.28}>
          <mesh
            geometry={nodes.Mesh011.geometry}
            material={materials["hands.001"]}
          />
          <mesh
            geometry={nodes.Mesh011_1.geometry}
            material={materials["Lagrimales.001"]}
          />
          <mesh
            geometry={nodes.Mesh011_2.geometry}
            material={materials["Std_Skin_Leg_Pbr.002"]}
          />
          <mesh
            geometry={nodes.Mesh011_3.geometry}
            material={materials["Head.001"]}
          />
          <mesh
            geometry={nodes.Mesh011_4.geometry}
            material={materials["02 - Default.001"]}
          />
        </group>
        <group position={[55.2, -0.05, 1.41]} scale={0.28}>
          <mesh
            geometry={nodes.Mesh012.geometry}
            material={materials["Std_Upper_Teeth_Pbr.002"]}
          />
          <mesh
            geometry={nodes.Mesh012_1.geometry}
            material={materials["Std_Lower_Teeth_Pbr.002"]}
          />
        </group>
        <mesh
          geometry={nodes.CC_Base_Eye.geometry}
          material={materials["01 - Default.001"]}
          position={[55.2, -0.05, 1.41]}
          scale={0.28}
        />
        <mesh
          geometry={nodes.Male_Bushy.geometry}
          material={materials["08 - cjas+.001"]}
          position={[55.2, -0.05, 1.41]}
          scale={0.28}
        />
        <mesh
          geometry={nodes.Jacket_Low.geometry}
          material={materials["15 - Default.001"]}
          position={[55.2, -0.05, 1.41]}
          scale={0.28}
        />
        <mesh
          geometry={nodes.Slim_fit_pants.geometry}
          material={materials["pants.001"]}
          position={[55.2, -0.05, 1.41]}
          scale={0.28}
        />
        <group position={[55.2, -0.05, 1.41]} scale={0.28}>
          <mesh
            geometry={nodes.Mesh017.geometry}
            material={materials["_3___Default_Pbr.002"]}
          />
          <mesh
            geometry={nodes.Mesh017_1.geometry}
            material={materials["22 - Default.001"]}
          />
          <mesh
            geometry={nodes.Mesh017_2.geometry}
            material={materials["16 - Default.001"]}
          />
          <mesh
            geometry={nodes.Mesh017_3.geometry}
            material={materials["17 - Default.001"]}
          />
          <mesh
            geometry={nodes.Mesh017_4.geometry}
            material={materials["23 - Default.001"]}
          />
          <mesh
            geometry={nodes.Mesh017_5.geometry}
            material={materials["sneakers.001"]}
          />
          <mesh
            geometry={nodes.Mesh017_6.geometry}
            material={materials["Material #186.001"]}
          />
        </group>
        <mesh
          geometry={nodes.Short_blowback.geometry}
          material={materials["Hair.001"]}
          position={[55.2, -0.05, 1.41]}
          scale={0.28}
        />
      </group>
    </>
  );
}

export default function Tim() {
  return (
    <div>
      <Canvas>
        <ambientLight color={"white"} intensity={5} />
        <hemisphereLight />
        <spotLight intensity={0.5} position={[300, 300, 4000]} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<Loader />}>
          <Center>
            <Model scale={0.1} />
            <EffectComposer multisampling={8}>
              <Bloom
                kernelSize={3}
                luminanceThreshold={0}
                luminanceSmoothing={0.4}
                intensity={0.6}
              />
              <Bloom
                kernelSize={KernelSize.HUGE}
                luminanceThreshold={0}
                luminanceSmoothing={0}
                intensity={0.5}
              />
            </EffectComposer>
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
