/* eslint-disable no-magic-numbers */
import React from 'react';
import { useControls } from 'leva';
import { Plane } from '@react-three/drei';

// eslint-disable-next-line max-lines-per-function
const control = () => {
	const dirLightProps = useControls('Directional Light', {
		angle: { value: 0, min: 0, max: 180, step: 15 },
		distance: { value: 7, min: 7, max: 10, step: 1 },
		castShadow: true,
		receiveShadow: false,
		intensity: { value: 1, min: 0.5, max: 5, step: 0.5 },
	});

	const sphereProps = useControls('Sphere', {
		rotation: [0, 0, 0],
		position: [0, 0, 0],
		args: [0.8, 15, 15],
		color: '#ff6000',
		scale: { value: 1, min: 0.5, max: 5, step: 0.5 },
	});

	const planeProps = useControls('Plane', {
		receiveShadow: true,
		castShadow: false,
		rotation: [-1.4, 0, 0],
		position: [0, -1, 0],
		args: [500, 500],
		color: '#f0b18b',
	});

	return { dirLightProps, sphereProps, planeProps };
};

const degToPos = (angle, distance) =>
	({ x: distance * Math.cos(angle), y: distance * Math.sin(angle) });

const changeAngle = (angle) => 180 - angle;

// eslint-disable-next-line max-lines-per-function
const DemoSphere = () => {
	const { planeProps, dirLightProps, sphereProps } = control();
	const { color, ...sProps } = sphereProps;
	const { color: pColor, ...pProps } = planeProps;
	const { angle, distance } = dirLightProps;
	const { x, y } = degToPos(changeAngle(angle), distance);

	return <>
		<ambientLight/>
		<directionalLight position={ [x, y, 0] } { ...dirLightProps }/>
		<mesh
			castShadow={ true }
			receiveShadow={ false }
		>
			<sphereBufferGeometry { ...sProps }/>
			<meshStandardMaterial color={ color }/>
		</mesh>
		<Plane { ...pProps }>
			<meshStandardMaterial color={ pColor }/>
		</Plane>
	</>;
};

export default DemoSphere;
