import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";

import CanvasLoader from "../Loader";

const Email = ({ isMobile }) => {
  const email = useGLTF("./email_icon/scene.gltf");

  // Calculate the bounding box and center the model
  const bbox = new Box3().setFromObject(email.scene);
  const center = new Vector3();
  bbox.getCenter(center);
  email.scene.position.sub(center);  // Recenter the model

  // Define a scale factor
  const scaleFactor = isMobile ? 0.015 : 0.015; // Adjust this value as needed

  return (
    <group scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-10, 70, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      {/* Adjust the scale and position based on the scaleFactor */}
      <primitive
        object={email.scene}
        rotation={[0, 0, 0]}
      />
    </group>
  );
};

const EmailCanvas = () => {
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
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [1, 2, 7], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Email isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EmailCanvas;
