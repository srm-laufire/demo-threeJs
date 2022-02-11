/* eslint-disable no-magic-numbers */
import { extend, useLoader } from '@react-three/fiber';
import { useControls } from 'leva';
import React from 'react';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry });

const control = () => useControls({
	color: 'aqua',
	text: 'Hello',
	size: { value: 1, min: 0, max: 5, step: 0.1 },
	height: { value: 1, min: 0, max: 5, step: 0.1 },
	position: [-2.5, -0.5, 1],
});

const ThreeDHello = () => {
	const { color, text, position, ...props } = control();

	const font = useLoader(FontLoader, `${ process.env.PUBLIC_URL }/optimer-bold.typeface.json`);
	const config = { font, ...props };

	return (
		<mesh position={ position }>
			<textGeometry args={ [text, config] }/>
			<meshStandardMaterial color={ color }/>
		</mesh>
	);
};

export default ThreeDHello;
