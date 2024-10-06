
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mercury(props) {
    const { nodes, materials } = useGLTF('/mercury.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mercury_1.geometry}
                    material={materials.mercurius}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/mercury.glb')