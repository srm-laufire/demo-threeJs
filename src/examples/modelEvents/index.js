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
		x: { value: 0, min: -2, max: 2, step: 0.2 },
		y: { value: 0, min: -2, max: 2, step: 0.2 },
		z: { value: 1.5, min: 1.5, max: 5, step: 0.2 },
		rotation: [0, 0, 0],
	});

	return { flightProps };
};

const ModelEvents = (context) => {
	const { state: { clicked }, patchState } = context;
	const { flightProps: { x: xFlight, y: yFlight,
		z: zFlight, rotation, flight }} = control();
	const flightGltf = useLoader(GLTFLoader,
		`${ process.env.PUBLIC_URL }/human.gltf`);
	const gltfFlightProps = {
		onClick: () => patchState({ clicked: !clicked }),
		object: flightGltf.scene,
		scale: 1.5,
		position: [xFlight, yFlight, zFlight],
		rotation: clicked ? [2, 0, 0] : rotation,
	};

	return (
		<>
			<ambientLight/>
			{ flight && <primitive { ...gltfFlightProps }/> }
		</>
	);
};

export default ModelEvents;
