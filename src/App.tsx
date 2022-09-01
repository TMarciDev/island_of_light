import React, { Suspense, useRef } from 'react';
import './App.css';

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { DoubleSide, Mesh, PerspectiveCamera } from 'three';
import { OrbitControls } from '@react-three/drei';

/*const Foo = () => {
  const { size } = useThree();
  console.log(size);
  size.height = 10;
  console.log(size);
  return (<></>)
}*/

function Box() {
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" side={DoubleSide} />
    </mesh>
  );
}

function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return <OrbitControls args={[camera, domElement]} />;
}

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return <cameraHelper args={[camera]} />
}

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas orthographic camera={{
        position: [0, 0, 2], left: -2,
        right: 2, top: 2, bottom: -2, zoom: 100
      }}>
        <ambientLight />
        <pointLight position={[5, 5, 5]} intensity={3} />
        <pointLight position={[-3, -3, 2]} />
        <Controls />
        <Box />
        <CameraHelper />
      </Canvas>
    </div>
  );
}

export default App;
