import React, { Suspense, useEffect, useRef } from "react"
import {
  PerspectiveCamera,
  Preload,
  useGLTF,
  useAnimations,
  OrbitControls,
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import CanvasLoader from "../Loader"
import * as THREE from "three"

function RubikCube(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF("/rubiks_cube.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && animations.length > 0) {
      const action = actions[animations[0].name] // Get the first animation

      if (action) {
        action.reset().fadeIn(0.5).play() // Smooth start
        action.setEffectiveWeight(1.0)
        action.setEffectiveTimeScale(1.0) // Normal speed
        action.loop = THREE.LoopRepeat // Loop infinitely

        return () => {
          action.fadeOut(0.5) // Smooth stop on unmount
        }
      }
    }
  }, [actions, animations])

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.25, 0]}
      scale={10}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.267}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Cube001_0"
                position={[0, 0.025, 0]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_5"
                  geometry={nodes.Object_5.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube002_1"
                position={[0, 0.025, 0]}
                rotation={[0, Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube003_2"
                position={[0, 0.025, 0]}
                rotation={[0, Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube004_3"
                position={[0, 0.025, 0]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_13"
                  geometry={nodes.Object_13.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube005_4"
                position={[0, 0.025, 0]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_17"
                  geometry={nodes.Object_17.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube006_5"
                position={[0, 0.025, 0]}
                rotation={[0, 0, -Math.PI]}
              >
                <mesh
                  name="Object_19"
                  geometry={nodes.Object_19.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube007_6"
                position={[0, 0.025, 0]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_22"
                  geometry={nodes.Object_22.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_23"
                  geometry={nodes.Object_23.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube008_7"
                position={[0, 0.025, 0]}
                rotation={[-Math.PI, Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_25"
                  geometry={nodes.Object_25.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube009_8"
                position={[0, 0.025, 0]}
                rotation={[0, 0, -Math.PI]}
              >
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_29"
                  geometry={nodes.Object_29.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube010_9"
                position={[0, 0.025, 0]}
                rotation={[Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_31"
                  geometry={nodes.Object_31.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_32"
                  geometry={nodes.Object_32.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube011_10"
                position={[0, 0.025, 0]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_34"
                  geometry={nodes.Object_34.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_35"
                  geometry={nodes.Object_35.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube012_11"
                position={[0, 0.025, 0]}
                rotation={[0, 0, Math.PI]}
              >
                <mesh
                  name="Object_37"
                  geometry={nodes.Object_37.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_38"
                  geometry={nodes.Object_38.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube013_12"
                position={[0, 0.025, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
              >
                <mesh
                  name="Object_40"
                  geometry={nodes.Object_40.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_41"
                  geometry={nodes.Object_41.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube014_13"
                position={[0, 0.025, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
              >
                <mesh
                  name="Object_43"
                  geometry={nodes.Object_43.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_44"
                  geometry={nodes.Object_44.geometry}
                  material={materials.material_0}
                />
              </group>
              <group name="Cube015_14" position={[0, 0.025, 0]}>
                <mesh
                  name="Object_46"
                  geometry={nodes.Object_46.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_47"
                  geometry={nodes.Object_47.geometry}
                  material={materials.material_0}
                />
              </group>
              <group name="Cube016_15" position={[0, 0.025, 0]}>
                <mesh
                  name="Object_49"
                  geometry={nodes.Object_49.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_50"
                  geometry={nodes.Object_50.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube017_16"
                position={[0, 0.025, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_52"
                  geometry={nodes.Object_52.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_53"
                  geometry={nodes.Object_53.geometry}
                  material={materials.material_0}
                />
              </group>
              <group name="Cube018_17" position={[0, 0.025, 0]}>
                <mesh
                  name="Object_55"
                  geometry={nodes.Object_55.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_56"
                  geometry={nodes.Object_56.geometry}
                  material={materials.material_0}
                />
              </group>
              <group name="Cube019_18" position={[0, 0.025, 0]}>
                <mesh
                  name="Object_58"
                  geometry={nodes.Object_58.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_59"
                  geometry={nodes.Object_59.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube020_19"
                position={[0, 0.025, 0]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_61"
                  geometry={nodes.Object_61.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_62"
                  geometry={nodes.Object_62.geometry}
                  material={materials.material_0}
                />
              </group>
              <group name="Cube021_20" position={[0, 0.025, 0]}>
                <mesh
                  name="Object_64"
                  geometry={nodes.Object_64.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_65"
                  geometry={nodes.Object_65.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube022_21"
                position={[0, 0.025, 0]}
                rotation={[0, 0, -Math.PI]}
              >
                <mesh
                  name="Object_67"
                  geometry={nodes.Object_67.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_68"
                  geometry={nodes.Object_68.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube023_22"
                position={[0, 0.025, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_70"
                  geometry={nodes.Object_70.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_71"
                  geometry={nodes.Object_71.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube024_23"
                position={[0, 0.025, 0]}
                rotation={[0, 0, -Math.PI]}
              >
                <mesh
                  name="Object_73"
                  geometry={nodes.Object_73.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_74"
                  geometry={nodes.Object_74.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube026_25"
                position={[0, 0.025, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_79"
                  geometry={nodes.Object_79.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_80"
                  geometry={nodes.Object_80.geometry}
                  material={materials.material_0}
                />
              </group>
              <group name="Cube025_24" position={[0, 0.025, 0]}>
                <mesh
                  name="Object_76"
                  geometry={nodes.Object_76.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_77"
                  geometry={nodes.Object_77.geometry}
                  material={materials.material_0}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/rubiks_cube.glb")

const RubikCubeCanvas = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [10, 10, 10], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={1} />
          <hemisphereLight intensity={0.55} groundColor="white" />
          <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
          />
          <directionalLight position={[10, 5, 10]} intensity={1.8} />
          {/* <Stage environment="night" intensity={0.5}> */}
          <RubikCube />
          {/* </Stage> */}
          <OrbitControls enableZoom={false} autoRotate />
          <PerspectiveCamera position={[-1, 1, 0]} zoom={0.9} makeDefault />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default RubikCubeCanvas
