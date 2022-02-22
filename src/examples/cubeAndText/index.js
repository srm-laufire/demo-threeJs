/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React } from 'react';
import { useLoader } from '@react-three/fiber';
import { useControls } from 'leva';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { useSpring, animated } from '@react-spring/three';

const control = () => {
	const cubeProps = useControls('Cube', {
		scale: 1.2,
		color: 'red',
		position: [0, 0.5, 0.5],
		rotation: [0.1, 0, 0],
	});

	const textOnProps = useControls('Text ON', {
		text: 'ON',
		color: 'hotpink',
		size: { value: 0.5, min: 0, max: 5, step: 0.1 },
		height: { value: 0.2, min: 0, max: 5, step: 0.1 },
		position: [-0.55, 0.2, 1.1],
	});

	const textOffProps = useControls('Text OFF', {
		text: 'OFF',
		color: 'hotpink',
		size: { value: 0.5, min: 0, max: 5, step: 0.1 },
		height: { value: 0.2, min: 0, max: 5, step: 0.1 },
		position: [-0.62, 1.1, 0.8],
		rotation: [-1.5, 0, 0],
	});

	return { cubeProps, textOnProps, textOffProps };
};

const CubeAndText = (context) => {
	const { state: { clicked }, patchState } = context;

	// eslint-disable-next-line no-console
	console.log(clicked);
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
			rotation: offRotation,
			...offProps
		}} = control();
	const font = useLoader(FontLoader, `${ process.env.PUBLIC_URL }/optimer-bold.typeface.json`);
	const onConfig = { font, ...onProps };
	const offConfig = { font, ...offProps };
	const { rotation } = useSpring({
		rotation: clicked ? [1.5, 0, 0] : [0, 0, 0],
		config: {
			mass: 1,
			tension: 100,
			friction: 20,
			precision: 0.01,
			easing: (t) => t,
		},
	});

	return (
		<animated.group
			onClick={ () => patchState({ clicked: !clicked }) }
			rotation={ rotation }
		>
			<mesh { ...cubeProps }>
				<boxBufferGeometry/>
				<meshPhongMaterial color={ color }/>
			</mesh>;
			<mesh position={ onPosition }>
				<textGeometry args={ [on, onConfig] }/>
				<meshPhongMaterial color={ onColor }/>
			</mesh>
			<mesh position={ offPosition } rotation={ offRotation }>
				<textGeometry args={ [off, offConfig] }/>
				<meshPhongMaterial color={ offColor }/>
			</mesh>
		</animated.group>);
};

export default CubeAndText;
