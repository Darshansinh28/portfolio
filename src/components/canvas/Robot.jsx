import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader"; // keep your existing loader
import { useEffect, useRef } from "react";
import { useAnimations } from "@react-three/drei";

const Robot = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play the first available animation
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.reset().fadeIn(0.5).play();
      firstAction.timeScale = 0.8;
    }
  }, [actions]);

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} scale={1.25} position={[0, -1, 0]} />
    </group>
  );
};

const RobotCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Robot />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default RobotCanvas;
