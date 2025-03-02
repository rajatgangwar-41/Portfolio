/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

function Mug(props) {
  const { nodes, materials } = useGLTF("/mugModel.glb")
  return (
    <group {...props} dispose={null} position={[0, -0.3, 0]} scale={0.11}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0.121, 0.007, 0]}>
        <mesh
          geometry={nodes.Coffee_Coup_0.geometry}
          material={materials.Texture}
          position={[0.4, -0.148, 0.221]}
          rotation={[0, 0, -0.852]}
        />
        <mesh
          geometry={nodes.Lid_0.geometry}
          material={materials.material}
          position={[0.4, -0.148, 6.722]}
          rotation={[0, 0, -0.389]}
          scale={[3.404, 3.404, 0.186]}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/mugModel.glb")

const MugCanvas = () => {
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
          <Mug />
          {/* </Stage> */}
          <OrbitControls enableZoom={false} autoRotate />
          <PerspectiveCamera position={[-1, 0, 1]} zoom={0.8} makeDefault />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default MugCanvas
