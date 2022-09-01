/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: LamedeFeu (https://sketchfab.com/lamedefeu)
license: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
source: https://sketchfab.com/3d-models/jack-of-blades-260da596ec53494cb81971fcaf13f848
title: Jack Of Blades
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Caracter(props) {
	const { nodes, materials } = useGLTF('/caracter.gltf');
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
					<primitive object={nodes._rootJoint} />
					<skinnedMesh
						geometry={nodes.Object_6.geometry}
						material={materials.Aeons}
						skeleton={nodes.Object_6.skeleton}
					/>
					<skinnedMesh
						geometry={nodes.Object_7.geometry}
						material={materials.Glow}
						skeleton={nodes.Object_7.skeleton}
					/>
					<skinnedMesh
						geometry={nodes.Object_9.geometry}
						material={materials.MASKS}
						skeleton={nodes.Object_9.skeleton}
					/>
					<skinnedMesh
						geometry={nodes.Object_10.geometry}
						material={materials.LEGS_ARMS}
						skeleton={nodes.Object_10.skeleton}
					/>
					<skinnedMesh
						geometry={nodes.Object_11.geometry}
						material={materials.TORSO}
						skeleton={nodes.Object_11.skeleton}
					/>
					<skinnedMesh
						geometry={nodes.Object_12.geometry}
						material={materials.CLOAK}
						skeleton={nodes.Object_12.skeleton}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/caracter.gltf');
