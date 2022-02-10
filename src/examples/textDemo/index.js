/* eslint-disable no-magic-numbers */
import React from 'react';
import { extend, useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { useControls } from 'leva';

extend({ TextGeometry });

const control = () => {
	const textProps = useControls('Text', {
		position: [-7, 0, -4],
		size: { value: 2, min: 0.5, max: 5, step: 0.5 },
		height: { value: 0.05, min: 0.01, max: 5, step: 0.01 },
		curveSegments: { value: 5, min: 0.5, max: 10, step: 0.5 },
		bevelEnabled: true,
		bevelThickness: { value: 2, min: 0.5, max: 5, step: 0.5 },
		bevelSize: { value: 0.2, min: 0, max: 5, step: 0.1 },
		bevelOffset: { value: 0, min: 0, max: 5, step: 0.1 },
		bevelSegments: { value: 3, min: 0.5, max: 5, step: 0.5 },
	});

	return { textProps };
};

const TextDemo = () => {
	const { textProps } = control();
	const { position, ...props } = textProps;
	const font = useLoader(FontLoader, `${ process.env.PUBLIC_URL }/roboto-Medium.json`);

	return (
		<mesh
			castShadow={ true }
			receiveShadow={ true }
			position={ position }
		>
			<textGeometry
				args={ ['LAUFIRE', { font, ...props }] }
			/>
			<meshNormalMaterial/>
		</mesh>
	);
};

export default TextDemo;
