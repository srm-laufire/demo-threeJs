/* eslint-disable no-magic-numbers */
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { React, useRef } from 'react';

const control = () => useControls('Book', {
	scale: 0.25,
	args: [7, 10, 1.5],
	color: '0xffffff',
	positionOne: [0.75, 0.5, 0],
	positionTwo: [-0.75, 0.5, 0],
});

const Book = ({ position }) => {
	const { scale, args, color } = control();
	const bookCover = useTexture(`${ process.env.PUBLIC_URL }/bookCover.jpg`);
	const bookBack = useTexture(`${ process.env.PUBLIC_URL }/bookBack.jpg`);
	const bookSide = useTexture(`${ process.env.PUBLIC_URL }/bookSide.jpg`);
	const bookSpine = useTexture(`${ process.env.PUBLIC_URL }/bookSpine.jpg`);

	const mesh = useRef();

	useFrame(() => {
		// eslint-disable-next-line no-multi-assign
		mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	});

	return <mesh ref={ mesh } scale={ scale } position={ position }>
		<boxBufferGeometry args={ args }/>
		<meshLambertMaterial color={ color } map={ bookCover }/>
		<meshLambertMaterial map={ bookBack }/>
		<meshLambertMaterial map={ bookSide }/>
		<meshLambertMaterial map={ bookSide }/>
		<meshLambertMaterial map={ bookCover }/>
		<meshLambertMaterial map={ bookSpine }/>
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
