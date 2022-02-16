/* eslint-disable no-magic-numbers */
import React from 'react';
import { Text } from '@react-three/drei';
import { useControls } from 'leva';

// eslint-disable-next-line max-lines-per-function
const control = () => useControls('Text alignment', {
	text: 'LAUFIRE',
	anchorX: 'center',
	anchorY: 'bottom',
	color: 'red',
	// font: 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff',
	position: [-1, 0, 0],
	rotation: [0, 0, 0],
	outlineColor: '#ffd800',
	outlineWidth: { value: 0.5, min: -0.5, max: 0.5, step: 0.1 },
	outlineOpacity: { value: 1, min: 0, max: 1, step: 0.01 },
	outlineOffsetX: { value: 0, min: -0.5, max: 0.5, step: 0.1 },
	outlineOffsetY: { value: 0, min: -0.5, max: 0.5, step: 0.1 },
	outlineBlur: { value: 0.07, min: -0.5, max: 0.5, step: 0.1 },
	strokeOpacity: { value: 10, min: -0.5, max: 10, step: 0.1 },
	strokeWidth: { value: 0, min: -0.9, max: 0.9, step: 0.1 },
	fillOpacity: { value: 0.82, min: 0, max: 1, step: 0.01 },
	scale: { value: 20, min: 0, max: 50, step: 0.5 },
	fontSize: { value: 0.1, min: 0, max: 5, step: 0.5 },
	maxWidth: { value: 1, min: 0, max: 5, step: 0.5 },
	letterSpacing: { value: 0.01, min: 0, max: 5, step: 0.05 },
	lineHeight: { value: 0.5, min: 0, max: 5, step: 0.5 },
	curveRadius: { value: 0, min: 0, max: 5, step: 0.5 },
});

// eslint-disable-next-line max-lines-per-function
const AlignmentExample = () => {
	const {
		outlineWidth,
		strokeWidth,
		outlineOffsetX,
		outlineOffsetY,
		strokeOpacity,
		outlineBlur,
		...props
	} = control();

	return (
		<Text
			outlineWidth={ outlineWidth / 100 }
			strokeWidth={ strokeWidth / 100 }
			strokeOpacity={ strokeOpacity / 10 }
			outlineOffsetX={ outlineOffsetX / 10 }
			outlineOffsetY={ outlineOffsetY / 10 }
			outlineBlur={ outlineBlur / 10 }
			{ ...props }
		/>);
};

export default AlignmentExample;
