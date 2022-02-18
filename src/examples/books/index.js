/* eslint-disable no-magic-numbers */
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { React, useRef } from 'react';
import image from '../../images/bookCover.jpg';

const control = () => useControls('Book', {
	scale: 0.25,
	args: [7, 10, 1.5],
	positionOne: [0.75, 0.5, 0],
	positionTwo: [-0.75, 0.5, 0],
});

const Book = ({ position }) => {
	const { scale, args } = control();
	const [colorMap] = useTexture([image]);
	const mesh = useRef();

	useFrame(() => {
		// eslint-disable-next-line no-multi-assign
		mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	});

	return <mesh ref={ mesh } scale={ scale } position={ position }>
		<boxBufferGeometry args={ args }/>
		<meshLambertMaterial map={ colorMap }/>
	</mesh>;
};

const RotatingBooks = () => {
	const { positionOne, positionTwo } = control();

	return <mesh>
		<Book position={ positionOne }/>
		<Book position={ positionTwo }/>
	</mesh>;
};

export default RotatingBooks;
