import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Phone = ({ isMobile }) => {
  const phone = useGLTF("./old_landline_phone/scene.gltf");

  // Define a scale factor
  const scaleFactor = isMobile ? 2.2 : 2.2; // Adjust this value as needed

  return (
    <mesh>
      <hemisphereLight intensity={0.6} groundColor='black' />
      <spotLight
        position={[10, 70, 10]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={phone.scene}
        scale={[scaleFactor, scaleFactor, scaleFactor]} 
        position={isMobile ? [0.2, -2.20, -1.5] : [0.2, -2.20, -1.5]}
        rotation={[0.01, 1.25, 0]}
      />
    </mesh>
  );
};

const PhoneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [35, 1, 7], fov: 22}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2.5}
        />
        <Phone isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PhoneCanvas;
