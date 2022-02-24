/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva';
import { peek } from '@laufire/utils/debug';

const control = () => {
	const flightProps = useControls('Flight', {
		flight: true,
		x: { value: -2, min: -2, max: 2, step: 0.2 },
		y: { value: 0, min: -2, max: 2, step: 0.2 },
		z: { value: 1.5, min: 1.5, max: 5, step: 0.2 },
		rotation: [0, 0, 0],
	});

	const stacyProps = useControls('Stacy', {
		stacy: true,
		x: { value: 2, min: -2, max: 2, step: 0.2 },
		y: { value: 0, min: -2, max: 2, step: 0.2 },
		z: { value: 1.5, min: 1.5, max: 5, step: 0.2 },
		rotation: [0, 0, 0],
	});

	return { flightProps, stacyProps };
};

const ModelEvents = (context) => {
	const { config: { clickColors }, state: { color },
		patchState } = context;
	const { flightProps: { x: xFlight, y: yFlight,
		z: zFlight, rotation, flight },
	stacyProps: { x: xStacy, y: yStacy,
		z: zStacy, rotation: sRotation }} = control();
	const flightGltf = useLoader(GLTFLoader,
		`${ process.env.PUBLIC_URL }/flight.gltf`);
	const gltfFlightProps = {
		onClick: () => patchState({ color: clickColors[0] }),
		object: flightGltf.scene,
		scale: 0.3,
		position: [xFlight, yFlight, zFlight],
		rotation: rotation,
	};
	const stacyGltf = useLoader(GLTFLoader,
		`${ process.env.PUBLIC_URL }/stacy.glb`);

	const stacyProps = {
		onClick: () => patchState({ color: clickColors[1] }),
		object: stacyGltf.scene,
		position: [xStacy, yStacy, zStacy],
		rotation: sRotation,
	};

	return (
		<>
			<primitive { ...stacyProps }/>
			{ flight && <primitive { ...gltfFlightProps }/>}
			<mesh position={ [0, -2, 0] }>
				<planeBufferGeometry/>
				<meshStandardMaterial color={ peek(color) }/>
			</mesh>
		</>
	);
};

export default ModelEvents;
