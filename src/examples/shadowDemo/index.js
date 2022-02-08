/* eslint-disable no-magic-numbers */
import React from 'react';
import { useControls } from 'leva';
import { Plane } from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';

// eslint-disable-next-line max-lines-per-function
const control = () => {
	const angleProps = useControls('Angle', {
		angle: { value: 0, min: 0, max: 180, step: 1 },
		distance: { value: 2, min: 1, max: 10, step: 0.1 },
	});

	const dirLightProps = useControls('Directional Light', {
		castShadow: true,
		receiveShadow: true,
		intensity: { value: 1, min: 0.5, max: 5, step: 0.5 },
	});

	const satelliteProps = useControls('Satellite', {
		args: [0.7, 300, 300],
		scale: 0.2,
		satellite: true,
		distance: 1.1,
	});

	const sphereProps = useControls('Sphere', {
		rotation: [0, 0, 0],
		position: [0, 0, 0],
		args: [0.7, 300, 300],
		color: '#ff6000',
		scale: { value: 1, min: 0.5, max: 5, step: 0.5 },
	});

	const planeProps = useControls('Plane', {
		receiveShadow: true,
		castShadow: true,
		rotation: [-1.4, 0, 0],
		position: [0, -1, 0],
		args: [500, 500],
		color: '#f0b18b',
	});

	return { dirLightProps, sphereProps,
		planeProps, satelliteProps, angleProps };
};

const getRoundedValue = (value) => Number(value.toFixed(15));

const degToPos = (angle, distance) =>
	({ x: distance * getRoundedValue(Math.cos(angle)),
		y: distance * getRoundedValue(Math.sin(angle)) });

const changeAngle = (angle) => 180 - angle;

// eslint-disable-next-line max-lines-per-function
const ShadowDemo = () => {
	const { planeProps, dirLightProps, sphereProps,
		satelliteProps, angleProps } = control();
	const { color, scale: sScale, ...sProps } = sphereProps;
	const { color: pColor, ...pProps } = planeProps;
	const { angle, distance } = angleProps;
	const { scale, satellite, distance: sDistance } = satelliteProps;
	const getRadian = degToRad(changeAngle(angle));
	const { x, y } = degToPos(getRadian, distance);
	const { x: sPosX, y: sPosY } = degToPos(getRadian, sDistance);
	const satProps = {
		castShadow: true,
		receiveShadow: true,
		position: [sPosX, sPosY, 0],
		scale: scale,
	};

	return <>
		<ambientLight/>
		<directionalLight
			position={ [x, y, 0] }
			{ ...dirLightProps }
		/>
		{ satellite && 	<mesh { ...satProps }>
			<sphereBufferGeometry { ...satelliteProps }/>
			<meshPhongMaterial color={ color }/>
		</mesh>}
		<mesh
			castShadow={ true }
			receiveShadow={ true }
			scale={ sScale }
		>
			<sphereBufferGeometry { ...sProps }/>
			<meshPhongMaterial color={ color }/>
		</mesh>
		<Plane { ...pProps }>
			<meshStandardMaterial color={ pColor }/>
		</Plane>
	</>;
};

export default ShadowDemo;
