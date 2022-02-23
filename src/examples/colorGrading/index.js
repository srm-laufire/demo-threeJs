/* eslint-disable no-magic-numbers */
import React from 'react';
import { useTexture } from '@react-three/drei';
import { useControls } from 'leva';

const controls = () => {
	const sphereProps = useControls('Color Grading Sphere', {
		envMapIntensity: 0.8,
		clearcoat: 0.8,
		clearcoatRoughness: 0,
		roughness: 1,
		metalness: 0,
		scale: 1.5,
		args: [1, 64, 64],
	});

	return { sphereProps };
};

// eslint-disable-next-line max-lines-per-function
const ColorGradingSphere = () => {
	const texture = useTexture(`${ process.env.PUBLIC_URL }/terrazo.png`);
	const { sphereProps: { scale, args, ...sProps }} = controls();

	return (
		<mesh scale={ scale }>
			<sphereBufferGeometry args={ args }/>
			<meshPhysicalMaterial
				{ ...sProps }
				map={ texture }
			/>
		</mesh>
	);
};

export default ColorGradingSphere;
