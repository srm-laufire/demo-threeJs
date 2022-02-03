/* eslint-disable no-magic-numbers */
import { Circle } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

// eslint-disable-next-line max-lines-per-function
const control = () => {
	const pLightProps = useControls(
		'Point Light', {
			castShadow: true,
			intensity: 0.2,
			args: [1, 1, 1],
			position: [1, 1, 1],
		}, { collapsed: true }
	);

	const sLightProps = useControls('Spot Light', {
		castShadow: true,
		intensity: 1,
		position: [-1, 1, 1],
	});

	const ambLightProps = useControls('Ambient Light', {
		intensity: 0.1,
	});

	return { pLightProps, sLightProps, ambLightProps };
};

const Scene = () => {
	const boxRef = useRef();

	useFrame(() => {
		boxRef.current.rotation.y += 0.004;
		boxRef.current.rotation.x += 0.004;
		boxRef.current.rotation.z += 0.004;
	});

	return (
		<group>
			<Circle
				ref={ boxRef }
				castShadow={ true }
				receiveShadow={ true }
				position={ [0, 0, 0] }
			>
				<meshStandardMaterial attach="material" color="blue"/>
			</Circle>
		</group>
	);
};

// eslint-disable-next-line max-lines-per-function
const RotatingCircle = () => {
	const { pLightProps, sLightProps, ambLightProps } = control();

	return (
		<>
			<ambientLight { ...ambLightProps }/>
			<pointLight { ...pLightProps }/>
			<spotLight { ...sLightProps }/>
			<Scene/>
		</>);
};

export default RotatingCircle;
