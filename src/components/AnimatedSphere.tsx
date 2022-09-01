import React from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const AnimatedSphere = () => {
    return (
        <Sphere visible args={[1, 100, 200]} scale={2} >
            <MeshDistortMaterial
                color="#123456"
                attach="material"
                distort={0.7}
                speed={0.5}
                roughness={0.4}
            />
        </Sphere>
    )
}

export default AnimatedSphere