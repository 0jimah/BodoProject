import React, { Suspense,useEffect,useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({isMobile}) => {
  const earth = useGLTF("./golfball/scene.gltf");

  return (
    <mesh>
       <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 20, 10]}
        angle={0.75}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
    <primitive object={earth.scene} scale={isMobile ? 0.02 : 0.05} 
    position={isMobile ? [1.5, -1.5, 0] : [4.5, -2, 0]} 
    // position-y={0}
    rotation={[0.9, -0.2, -0.01]} />
     </mesh> 
  );
};

const EarthCanvasTwo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.7,
        far: 600,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvasTwo;
