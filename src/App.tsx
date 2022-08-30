import React from 'react';
import './App.css';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

import Box from './components/Box';

function App() {
  return (
    <div>
      <h1>
        hi
      </h1>
      <Canvas className="canvas">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={3} />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
