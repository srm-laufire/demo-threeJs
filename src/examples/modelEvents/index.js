/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva';

const control = () => {
	const flightProps = useControls('Flight', {
		flight: true,
		x: -2,
		y: -1,
		z: 1.5,
		rotation: [2, 0, 0],
	});

	const humanProps = useControls('Human', {
		human: true,
		x: 2,
		y: -1,
		z: 1.5,
		rotation: [2, 0, 0],
	});

	return { flightProps, humanProps };
};

const ModelEvents = (context) => {
	const { state: { clicked }, patchState } = context;
	const { flightProps: { x: xFlight, y: yFlight,
		z: zFlight, rotation, flight },
	humanProps: { x: xHuman, y: yHuman, z: zHuman,
		rotation: hRotation, human }} = control();

	// eslint-disable-next-line no-console
	console.log(clicked);
	const gltf = useLoader(GLTFLoader,
		`${ process.env.PUBLIC_URL }/flight.gltf`);
	const gltfTwo = useLoader(GLTFLoader,
		`${ process.env.PUBLIC_URL }/a.gltf`);
	const gltfHumanProps = {
		onClick: () => patchState({ clicked: !clicked }),
		object: gltfTwo.scene,
		scale: 1.5,
		position: [xHuman, yHuman, zHuman],
		rotation: clicked ? hRotation : [0, 0, 0],
	};
	const gltfFlightProps = {
		onClick: () => patchState({ clicked: !clicked }),
		object: gltf.scene,
		scale: 0.3,
		position: [xFlight, yFlight, zFlight],
		rotation: clicked ? rotation : [0, 0, 0],
	};

	return (
		<>
			<ambientLight/>
			{ flight && <primitive { ...gltfFlightProps }/> }
			{ human && <primitive { ...gltfHumanProps }/> }
		</>
	);
};

export default ModelEvents;
