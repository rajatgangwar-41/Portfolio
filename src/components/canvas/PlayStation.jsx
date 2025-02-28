import React, { Suspense } from "react"
import {
  PerspectiveCamera,
  Preload,
  useGLTF,
  OrbitControls,
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import CanvasLoader from "../Loader"

function PlayStation(props) {
  const { nodes, materials } = useGLTF("/playstation5.glb")
  return (
    <group {...props} dispose={null} position={[0, 0, 0]} scale={5}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.196}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials["1011"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials["1001"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials["1002"]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/playstation5.glb")

const PlayStationCanvas = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [10, 10, 0], fov: 25 }}
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
          <PlayStation />
          {/* </Stage> */}
          <OrbitControls enableZoom={false} autoRotate />
          <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.6} makeDefault />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default PlayStationCanvas
