/* eslint-disable no-magic-numbers */
import React, { useRef } from 'react';
import { useControls } from 'leva';
import { Box, Plane, useHelper } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';

// eslint-disable-next-line max-lines-per-function
const control = () => {
	const dirLightProps = useControls('Directional Light', {
		castShadow: true,
		receiveShadow: false,
		intensity: { value: 1, min: 0.5, max: 5, step: 0.5 },
		position: [-10, 8, -5],
	});

	const boxProps = useControls('Box', {
		castShadow: true,
		receiveShadow: false,
		rotation: [0, 0, 0],
		position: [0, 0, 0.5],
		args: [1, 1, 1],
		color: '#91672c',
		scale: { value: 1, min: 0.5, max: 5, step: 0.5 },
	});

	const planeProps = useControls('Plane', {
		receiveShadow: true,
		castShadow: false,
		rotation: [-1.4, 0, 0],
		position: [0, -1, 0],
		args: [-8, -5, 1],
		color: '#ff69f6',
	});

	return { dirLightProps, boxProps, planeProps };
};

const Cube = () => {
	const { planeProps, dirLightProps, boxProps } = control();
	const { color, ...bProps } = boxProps;
	const { color: pColor, ...pProps } = planeProps;
	const ref = useRef();

	useHelper(
		ref, DirectionalLightHelper, 1
	);

	return <mesh>
		<ambientLight/>
		<directionalLight ref={ ref } { ...dirLightProps }/>
		<Box { ...bProps }>
			<meshStandardMaterial color={ color }/>
		</Box>
		<Plane { ...pProps }>
			<meshStandardMaterial color={ pColor }/>
		</Plane>
	</mesh>;
};

export default Cube;
