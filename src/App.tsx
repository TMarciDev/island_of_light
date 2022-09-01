import React, { Suspense } from 'react';
import './App.css';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

import Box from './components/Box';
import AnimatedSphere from './components/AnimatedSphere';
import Caracter from './components/Caracter';

function App() {
  return (
    <div>
      <h1>
        hi
      </h1>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={3} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={3} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={3} />
        <Suspense fallback={null}>
          <Caracter />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
