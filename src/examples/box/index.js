import { React } from 'react';
import { useControls } from 'leva';

const control = () => {
	const cubeProps = useControls('Cube', {
		scale: { value: 1, min: 0.5, max: 5, step: 0.5 },
		// eslint-disable-next-line no-magic-numbers
		rotation: [0, 0, 0],
	});

	return { cubeProps };
};

const Box = () => {
	const { cubeProps } = control();

	return <mesh { ...cubeProps }>
		<boxBufferGeometry/>
		<meshNormalMaterial/>
	</mesh>;
};

export default Box;
