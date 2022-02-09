/* eslint-disable no-magic-numbers */
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// eslint-disable-next-line max-lines-per-function
const Torus = (context) => {
	const { patchState, state } = context;
	const ref = useRef();

	useFrame(() => (ref.current.rotation.x += 0.01));

	return (
		<mesh
			ref={ ref }
			position={ [0, 0, 0] }
			scale={ state.clicked ? 0.25 : 0.2 }
			onClick={ () =>
				patchState({ clicked: !state.clicked }) }
			onPointerOver={ () => patchState({ hover: true }) }
			onPointerOut={ () => patchState({ hover: false }) }
		>
			<ambientLight/>
			<torusGeometry args={ [5, 2, 8, 24] }/>
			<meshPhongMaterial color={ state.hover ? 'orange' : 'red' }/>
		</mesh>
	);
};

export default Torus;
