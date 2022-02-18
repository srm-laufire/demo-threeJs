import { React, useRef } from 'react';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';

const control = () => {
	const wireFrameProps = useControls('Wire Frame', {
		scale: { value: 2, min: 0.5, max: 5, step: 0.5 },
		position: [0, 1, 0],
		rotation: [0, 0, 0],
	});

	return { wireFrameProps };
};

const wireGeometry = () => {
	const { wireFrameProps } = control();
	const Ref = useRef();

	useFrame(() => {
		Ref.current.rotation.y += 0.004;
		Ref.current.rotation.x += 0.004;
		Ref.current.rotation.z += 0.004;
	});

	return <mesh ref={ Ref } { ...wireFrameProps }>
		<boxBufferGeometry/>
		<meshBasicMaterial color="blue" wireframe={ true }/>
	</mesh>;
};

export default wireGeometry;
