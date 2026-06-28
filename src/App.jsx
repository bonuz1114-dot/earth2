import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Component/Earth2.jsx';
import './App.css';

function App() {

  return (
      <div style={{ width: '100vw', height: '100vh', backgroundColor: '#ffffaf'  }}>
        <Canvas camera={{ position: [20, 0, 0], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model position={[0, 0, 0]} />
        <OrbitControls  enabled={true}/>
      </Canvas>
      </div>
  )
}

export default App
