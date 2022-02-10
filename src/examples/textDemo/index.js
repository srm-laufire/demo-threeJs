/* eslint-disable no-magic-numbers */
import React, { useMemo, useRef } from 'react';
import { extend, useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { useControls } from 'leva';

extend({ TextGeometry });

const control = () => {
	const textProps = useControls('Text', {
		position: [-15, 0, 0],
	});

	const configProps = useControls('Config', {
		size: 5,
		height: 1,
		curveSegments: 5,
		bevelEnabled: true,
		bevelThickness: 1,
		bevelSize: 0.5,
		bevelOffset: 0,
		bevelSegments: 2,
	});

	return { textProps, configProps };
};

// eslint-disable-next-line max-lines-per-function
const TextDemo = () => {
	const { textProps, configProps } = control();
	const font = useLoader(FontLoader, `${ process.env.PUBLIC_URL }/roboto-hindi.json`);
	const config = useMemo(() => ({
		font,
		...configProps,
	}),
	[font, configProps]);
	const mesh = useRef();

	return (
		<mesh ref={ mesh } { ...textProps }>
			<textGeometry
				args={ ['लौफायर', config] }
			/>
			<meshNormalMaterial/>
		</mesh>
	);
};

export default TextDemo;
