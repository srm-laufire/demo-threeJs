/* eslint-disable no-magic-numbers */
import React from 'react';
import { extend, useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { useControls } from 'leva';

extend({ TextGeometry });

const control = () => {
	const textProps = useControls('Text', {
		text: 'Laufire Technologies,\nChennai,\n600115.',
		position: [-3, 2, 0],
		rotation: [0.2, 0, 0],
		size: { value: 0.5, min: 0.5, max: 5, step: 0.5 },
		height: { value: 0.2, min: 0.01, max: 5, step: 0.01 },
		curveSegments: { value: 5, min: 0.5, max: 10, step: 0.5 },
		bevelEnabled: true,
		bevelThickness: { value: 1, min: 0.5, max: 5, step: 0.5 },
		bevelSize: { value: 0, min: 0, max: 5, step: 0.1 },
		bevelOffset: { value: 0, min: 0, max: 5, step: 0.1 },
		bevelSegments: { value: 3, min: 0.5, max: 5, step: 0.5 },
	});

	return { textProps };
};

const TextDemo = () => {
	const { textProps } = control();
	const { text, position, rotation, ...props } = textProps;
	const font = useLoader(FontLoader, `${ process.env.PUBLIC_URL }/roboto-Medium.json`);

	return (
		<mesh
			castShadow={ true }
			receiveShadow={ true }
			position={ position }
			rotation={ rotation }
		>
			<textGeometry
				args={ [text, { font, ...props }] }
			/>
			<meshNormalMaterial/>
		</mesh>
	);
};

export default TextDemo;
