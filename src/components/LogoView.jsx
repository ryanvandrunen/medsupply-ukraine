import React from 'react'
import { Canvas } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';
import ThreejsLogo from './ThreejsLogo';

export const LogoView = () => {
    return (
        <Canvas dpr={[1, 2]} shadows camera={{fov: 45}} style={{maxWidth: "100%", maxHeight: '600px'}}> 
            <PresentationControls speed={1.5} global zoom={.5} polar={[Math.PI/6, Math.PI/3]}>
                <ThreejsLogo/>
            </PresentationControls>
        </Canvas>
    )
}

