/* eslint-disable no-magic-numbers */
import React from 'react';
import { Text } from '@react-three/drei';
import { useControls } from 'leva';

const control = () => useControls('Text alignment', {
	text: 'Laufire Technologies,\nChennai,\n600115.',
	anchorX: 'center',
	anchorY: 'bottom',
	color: 'blue',
	position: [-1, 0, 0],
	rotation: [0, 0, 0],
	scale: { value: 10, min: 0, max: 20, step: 0.5 },
	fontSize: { value: 0.1, min: 0, max: 5, step: 0.5 },
	maxWidth: { value: 1, min: 0, max: 5, step: 0.5 },
	letterSpacing: { value: 0.01, min: 0, max: 5, step: 0.05 },
	lineHeight: { value: 1, min: 0, max: 5, step: 0.5 },
	curveRadius: { value: 0, min: 0, max: 5, step: 0.5 },
	fillOpacity: { value: 1, min: 0.5, max: 5, step: 0.5 },
});

const AlignmentExample = () =>
	<Text
		{ ...control() }
	/>;

export default AlignmentExample;
