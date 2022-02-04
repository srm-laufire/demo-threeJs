/* eslint-disable no-magic-numbers */
import React from 'react';
import { useControls } from 'leva';
import { Plane, Sphere } from '@react-three/drei';

// eslint-disable-next-line max-lines-per-function
const control = () => {
	const dirLightProps = useControls('Directional Light', {
		castShadow: true,
		receiveShadow: false,
		intensity: { value: 1, min: 0.5, max: 5, step: 0.5 },
		position: [-10, 8, -5],
	});

	const sphereProps = useControls('Sphere', {
		castShadow: true,
		receiveShadow: false,
		rotation: [0, 0, 0],
		position: [0, 0, 0.5],
		args: [0.8, 60, 60],
		color: '#ff6000',
		scale: { value: 1, min: 0.5, max: 5, step: 0.5 },
	});

	const planeProps = useControls('Plane', {
		receiveShadow: true,
		castShadow: false,
		rotation: [-1.4, 0, 0],
		position: [0, -1, 0],
		args: [-8, -5, 1],
		color: '#f0b18b',
	});

	return { dirLightProps, sphereProps, planeProps };
};

const DemoSphere = () => {
	const { planeProps, dirLightProps, sphereProps } = control();
	const { color, ...sProps } = sphereProps;
	const { color: pColor, ...pProps } = planeProps;

	return <mesh>
		<ambientLight/>
		<directionalLight { ...dirLightProps }/>
		<Sphere { ...sProps }>
			<meshStandardMaterial color={ color }/>
		</Sphere>
		<Plane { ...pProps }>
			<meshStandardMaterial color={ pColor }/>
		</Plane>
	</mesh>;
};

export default DemoSphere;
