/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React from 'react';
import { useControls } from 'leva';
import { degToRad } from 'three/src/math/MathUtils';
import Converters from '../../converters';
import AngleManager from '../../services/angleManager';

const control = () => {
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

	return { sphereProps, satelliteProps };
};

// eslint-disable-next-line max-statements
const ShadowDemo = (context) => {
	const { tickToAngle, degToPos } = Converters;
	const { invertAngle } = AngleManager;
	const { sphereProps, satelliteProps } = control();
	const { color, scale: sScale, ...sProps } = sphereProps;
	const { scale, satellite, distance: sDistance } = satelliteProps;
	const getRadian = degToRad(invertAngle(tickToAngle(context)));
	const { x: sPosX, y: sPosY } = degToPos(getRadian, sDistance);
	const satProps = {
		castShadow: true,
		receiveShadow: true,
		position: [sPosX, sPosY, 0],
		scale: scale,
	};

	return <>
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
	</>;
};

export default ShadowDemo;
