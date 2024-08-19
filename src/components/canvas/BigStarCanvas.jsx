import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const BigStars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(2000), { radius: 3 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 3;
  });

  return (
    <group rotation={[0, 0, Math.PI]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          color='purple'
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const BigStarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]' style={{ backgroundColor: 'black' }}>
      <Canvas
        camera={{ position: [0, 1, 3] }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <BigStars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BigStarsCanvas;
