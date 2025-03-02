/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useRef, useState, useMemo } from "react"
import { Canvas, useFrame, useGraph } from "@react-three/fiber"
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  Preload,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei"
import { SkeletonUtils } from "three-stdlib"
import CanvasLoader from "../Loader"
import * as THREE from "three"

const SpiderMan = (props) => {
  const group = useRef()
  const { scene, animations } = useGLTF(
    "/spider-man_nwh_-_spider-man_integrated_suit.glb"
  )
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  const { actions, mixer } = useAnimations(animations, group)

  // 🎯 Get animation keys & filter out unwanted indices
  const actionKeys = Object.keys(actions).filter(
    (_, index) => ![6, 7, 10, 11, 12].includes(index)
  )

  const [currentAnimation, setCurrentAnimation] = useState(0)

  // ✅ Function to switch animations smoothly
  const playNextAnimation = () => {
    setCurrentAnimation((prev) => (prev + 1) % actionKeys.length)
  }

  useEffect(() => {
    if (!actions || actionKeys.length === 0) {
      // console.warn("No animations found")
      return
    }

    // console.log("Filtered Animations:", actionKeys)

    const action = actions[actionKeys[currentAnimation]]

    if (action) {
      // console.log(`Playing animation: ${actionKeys[currentAnimation]}`)
      action.reset().fadeIn(0.5).play()
      action.setLoop(THREE.LoopOnce)
      action.clampWhenFinished = true

      // ✅ Add event listener for when the animation finishes
      mixer.addEventListener("finished", playNextAnimation)
    }

    return () => {
      // ✅ Remove event listener & fade out previous animation
      action?.fadeOut(0.5)
      mixer.removeEventListener("finished", playNextAnimation)
    }
  }, [currentAnimation, actions, mixer])

  // ✅ Keep animations running smoothly
  useFrame((_, delta) => {
    mixer.update(delta)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene" position={[0, -10.5, 0]} scale={10}>
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.12}
        >
          <group
            name="Spider-man_(Integrated_Suit)fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_148"
                      position={[100, 4, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_150"
                      position={[0, 4, 13.289]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_152"
                      position={[0, 4, 13.289]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_154"
                      position={[0, 4, 13.289]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_156"
                      position={[-100, 4, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_158"
                      position={[-266.612, 4, 0.478]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_160"
                      position={[0, 136.869, -9.593]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={80}
                    />
                    <skinnedMesh
                      name="Object_149"
                      geometry={nodes.Object_149.geometry}
                      material={materials.SpiderMan_web02}
                      skeleton={nodes.Object_149.skeleton}
                    />
                    <skinnedMesh
                      name="Object_151"
                      geometry={nodes.Object_151.geometry}
                      material={materials.hero_spiderman01_s08_02}
                      skeleton={nodes.Object_151.skeleton}
                    />
                    <skinnedMesh
                      name="Object_153"
                      geometry={nodes.Object_153.geometry}
                      material={materials.hero_spiderman01_s08_01}
                      skeleton={nodes.Object_153.skeleton}
                    />
                    <skinnedMesh
                      name="Object_155"
                      geometry={nodes.Object_155.geometry}
                      material={materials.hero_spiderman01_s08_03}
                      skeleton={nodes.Object_155.skeleton}
                    />
                    <skinnedMesh
                      name="Object_157"
                      geometry={nodes.Object_157.geometry}
                      material={materials.SpiderMan_web02}
                      skeleton={nodes.Object_157.skeleton}
                    />
                    <skinnedMesh
                      name="Object_159"
                      geometry={nodes.Object_159.geometry}
                      material={materials.manhole}
                      skeleton={nodes.Object_159.skeleton}
                    />
                    <skinnedMesh
                      name="Object_161"
                      geometry={nodes.Object_161.geometry}
                      material={materials.hero_spiderman01_s08_wp}
                      skeleton={nodes.Object_161.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="spider_wp003"
                  position={[100, 4, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="hero_spiderman01_s08_02"
                  position={[0, 4, 13.289]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="hero_spiderman01_s08_01"
                  position={[0, 4, 13.289]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="hero_spiderman01_s08_03"
                  position={[0, 4, 13.289]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="spider_wp02"
                  position={[-100, 4, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="manhole"
                  position={[-266.612, 4, 0.478]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="hero_spiderman01_s08_wp"
                  position={[0, 136.869, -9.593]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={80}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

// useGLTF.preload("/spider-man_nwh_-_spider-man_integrated_suit.glb")

const SpiderManCanvas = () => {
  return (
    <Canvas
      // frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 50, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={3} />
        <hemisphereLight intensity={12} groundColor="white" />
        <spotLight
          position={[-20, 500, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <directionalLight position={[10, 5, 10]} intensity={1.8} />
        {/* <Stage environment="city" intensity={0.5}> */}
        <SpiderMan />
        {/* </Stage> */}
        <OrbitControls
          enableZoom={false}
          // autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault /> */}
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default SpiderManCanvas
