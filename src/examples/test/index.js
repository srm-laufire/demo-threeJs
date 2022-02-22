/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React } from 'react';
import { useControls } from 'leva';
import { useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

const control = () => {
	const cubeProps = useControls('Cube test', {
		scale: { value: 1, min: 0.5, max: 5, step: 0.5 },
		position: [-1, 0, 0],
		rotation: [0, 0, 0],
	});

	const sphereProps = useControls('Sphere test', {
		scale: { value: 0.8, min: 0.5, max: 5, step: 0.5 },
		position: [-0.5, 0, 0],
		args: [1, 16, 200],
	});

	const groupProps = useControls('Group', {
		x: { value: -10, min: -10, max: 10, step: 0.1 },
		y: { value: -10, min: -10, max: 10, step: 0.1 },
		z: { value: -10, min: -10, max: 10, step: 0.1 },
	});

	const textOffProps = useControls('OFF', {
		text: 'OFF',
		color: 'hotpink',
		size: { value: 0.5, min: 0, max: 5, step: 0.1 },
		height: { value: 0.2, min: 0, max: 5, step: 0.1 },
		position: [-1, 0, 0.6],
		rotation: [0, 0, 0],
	});

	return { cubeProps, sphereProps, groupProps, textOffProps };
};

// eslint-disable-next-line max-lines-per-function
const GroupEvents = (context) => {
	const { state: { clicked }, patchState } = context;

	const { cubeProps, sphereProps, groupProps: { x, y, z }, 	textOffProps: {
		color: offColor,
		text: off,
		position: offPosition,
		rotation: offRotation,
		...offProps
	}} = control();
	const font = useLoader(FontLoader, `${ process.env.PUBLIC_URL }/optimer-bold.typeface.json`);
	const offConfig = { font, ...offProps };
	const getRotation = () => (clicked ? [x, y, z] : [0, 0, 0]);
	const changeClick = () => patchState({ clicked: !clicked });

	return (
		<group
			rotation={ getRotation() }
			onClick={ () => changeClick() }
		>
			<mesh position={ offPosition } rotation={ offRotation }>
				<textGeometry args={ [off, offConfig] }/>
				<meshPhongMaterial color={ clicked ? offColor : 'blue' }/>
			</mesh>
			<mesh { ...cubeProps }>
				<boxBufferGeometry/>
				<meshStandardMaterial
					color="brown"
					metalness={ 0.1 }
				/>
			</mesh>;
			<mesh { ...sphereProps }>
				<sphereBufferGeometry/>
				<meshStandardMaterial
					color="green"
					roughness={ 0.1 }
					metalness={ 0.1 }
				/>
			</mesh>;
		</group>);
};

export default GroupEvents;
