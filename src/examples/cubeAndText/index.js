/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React } from 'react';
import { useLoader } from '@react-three/fiber';
import { useControls } from 'leva';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

const control = () => {
	const cubeProps = useControls('Cube', {
		scale: 1.2,
		color: 'hotpink',
		position: [0, 0.5, 0.5],
		rotation: [0.1, 0, 0],
	});

	const textOnProps = useControls('Text ON', {
		text: 'ON',
		color: 'red',
		size: { value: 0.5, min: 0, max: 5, step: 0.1 },
		height: { value: 0.2, min: 0, max: 5, step: 0.1 },
		position: [-0.55, 0.3, 1],
	});

	const textOffProps = useControls('Text OFF', {
		text: 'OFF',
		color: 'red',
		size: { value: 0.5, min: 0, max: 5, step: 0.1 },
		height: { value: 0.2, min: 0, max: 5, step: 0.1 },
		position: [-0.55, 1.1, 0.5],
	});

	return { cubeProps, textOnProps, textOffProps };
};

const CubeAndText = (context) => {
	const { state: { clicked }, patchState } = context;
	const { cubeProps: { color, ...cubeProps },
		textOnProps: {
			color: onColor,
			text: on,
			position: onPosition,
			...onProps
		},
		textOffProps: {
			color: offColor,
			text: off,
			position: offPosition,
			...offProps
		}} = control();
	const changeClicked = () => patchState({ clicked: !clicked });
	const font = useLoader(FontLoader, `${ process.env.PUBLIC_URL }/optimer-bold.typeface.json`);
	const onConfig = { font, ...onProps };
	const offConfig = { font, ...offProps };

	return <group onClick={ () => changeClicked() } rotation={ [0, 0, 0] }>
		<mesh { ...cubeProps } rotation={ clicked ? [2, 0, 0] : [0, 0, 0] }>
			<boxBufferGeometry/>
			<meshPhongMaterial color={ color }/>
		</mesh>;
		<mesh position={ onPosition } rotation={ [0, 0, 0] }>
			<textGeometry args={ [on, onConfig] }/>
			<meshPhongMaterial color={ onColor }/>
		</mesh>
		<mesh position={ offPosition }>
			<textGeometry args={ [off, offConfig] }/>
			<meshPhongMaterial color={ offColor }/>
		</mesh>
	</group>;
};

export default CubeAndText;
