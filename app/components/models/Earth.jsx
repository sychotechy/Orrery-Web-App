import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Earth(props) {
    const { nodes, materials } = useGLTF('/earth.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.moon}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/earth.glb')