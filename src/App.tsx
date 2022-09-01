import React, { Suspense, useRef } from 'react';
import './App.css';

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CubeTextureLoader, Mesh, Object3D, /*PerspectiveCamera*/ } from 'three';
//import { OrbitControls } from '@react-three/drei';

function Box() {
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef} position={[0, 1, 0]} castShadow={true} receiveShadow={true} >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={123456} />
    </mesh>
  );
}

function Plane() {
  return (
    <mesh castShadow={false} receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100, 1, 1]} />
      <meshStandardMaterial color={0xFFFFFF} />
    </mesh>
  );
}

/*
function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return <OrbitControls args={[camera, domElement]} />;
}*/

/*
function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1920 / 1080, 1, 1000);
  return <group position={[0, 0, 2]}>
    <cameraHelper args={[camera]} />
  </group>;
}*/

function myObj3d(a: number, b: number, c: number) {
  const obj = new Object3D();
  obj.position.set(a, b, c);
  return obj;
}

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg"
  ]);
  scene.background = texture;
  return null;
}

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas className='canvas' orthographic={false} shadows={true} dpr={window.devicePixelRatio}
        camera={{
          position: [75, 20, 0],
          fov: 60, near: 1.0, far: 1000, //aspect: 1920 / 1080,
          left: 0, right: 0, top: 0, bottom: 0, zoom: 1
        }}>
        <ambientLight intensity={1} color={0xFFFFFF} />
        <directionalLight intensity={1} color={0xFFFFFF} position={[100, 100, 100]} target={myObj3d(0, 0, 0)} castShadow={true} shadowMapHeight={2040} shadowMapWidth={2040} shadowCameraNear={1.0} shadowCameraFar={500} shadowCameraLeft={200} shadowCameraRight={-200} shadowCameraTop={200} shadowCameraBottom={-200} />
        {/*<Controls />
        <CameraHelper />
        
        */}
        <Box />
        <SkyBox />
        <Suspense fallback={null}>
          <Plane />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
