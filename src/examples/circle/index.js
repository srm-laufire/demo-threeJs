/* eslint-disable no-magic-numbers */
import { Circle } from '@react-three/drei';
import React from 'react';
import { useControls } from 'leva';

const control = () => {
	const dirLightProps = useControls('Directional Light', {
		castShadow: true,
		intensity: 1,
		position: [1, 1, 1],
	});

	const circleProps = useControls('Circle', {
		castShadow: true,
		receiveShadow: false,
		position: [0, 2, 0],
	});

	const planeProps = useControls('Plane', {
		receiveShadow: true,
		args: [10, 1, 5],
	});

	return { dirLightProps, circleProps, planeProps };
};

const CircleDemo = () => {
	const { dirLightProps, circleProps } = control();

	return	<>
		<ambientLight intensity={ 0.1 }/>
		<directionalLight { ...dirLightProps }/>
		<Circle { ...circleProps }>
			<meshStandardMaterial attach="material" color="blue"/>
		</Circle>
	</>;
};

const Plane = () => {
	const { planeProps } = control();

	return <mesh>
		<CircleDemo/>
		<planeBufferGeometry { ...planeProps }/>
		<meshStandardMaterial color="yellow"/>
	</mesh>;
};

export default Plane;
