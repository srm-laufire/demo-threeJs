/* eslint-disable no-magic-numbers */
import { React } from 'react';
import { Physics, usePlane, useBox } from '@react-three/cannon';

const Plane = (props) => {
	const [ref] = usePlane(() =>
		({ rotation: [-Math.PI / 2, 0, 0], ...props }));

	return (
		<mesh ref={ ref } receiveShadow={ true }>
			<planeGeometry args={ [1000, 1000] }/>
			<meshStandardMaterial color="#f0f0f0"/>
		</mesh>
	);
};

const Cube = (props) => {
	const [ref] = useBox(() => ({ mass: 40, ...props }));

	return (
		<mesh ref={ ref } castShadow={ true }>
			<boxGeometry/>
			<meshStandardMaterial color="orange"/>
		</mesh>
	);
};

const SimplePhysics = () =>
	<group>
		<spotLight
			angle={ 0.25 }
			penumbra={ 0.5 }
			position={ [10, 10, 5] }
			castShadow={ true }
		/>
		<Physics>
			<Plane position={ [0, -2, 0] }/>
			<Cube position={ [0, 5, 0] }/>
			<Cube position={ [0.45, 7, -0.25] }/>
			<Cube position={ [-0.45, 9, 0.25] }/>
			<Cube position={ [-0.45, 10, -2] }/>
		</Physics>
	</group>
	;

export default SimplePhysics;
