/* eslint-disable no-magic-numbers */
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon';
import { React } from 'react';

const BoxTrigger = ({ size, position }) => {
	const [ref] = useBox(() => ({ isTrigger: true,
		args: size,
		position: position }));

	return (
		<mesh ref={ ref } position={ position }>
			<boxGeometry args={ size }/>
			<meshStandardMaterial wireframe={ true } color="blue"/>
		</mesh>
	);
};

const Ball = () => {
	const [ref] = useSphere(() => ({
		mass: 1,
		position: [0, 20, -3],
		args: 1,
	}));

	return (
		<mesh ref={ ref } castShadow={ true } receiveShadow={ true }>
			<sphereGeometry args={ [1, 64, 64] }/>
			<meshLambertMaterial color="white"/>
		</mesh>
	);
};

const Plane = (props) => {
	const [ref] = usePlane(() => ({ type: 'Static', ...props }));

	return (
		<mesh ref={ ref } receiveShadow={ true }>
			<planeGeometry args={ [100, 100] }/>
			<shadowMaterial color="#171717"/>
		</mesh>
	);
};

const TriggerMesh = () =>
	<group>
		<ambientLight intensity={ 0.1 }/>
		<spotLight
			position={ [10, 10, 10] }
			angle={ 0.5 }
			intensity={ 1 }
			castShadow={ true }
			penumbra={ 1 }
		/>
		<Physics>
			<BoxTrigger
				position={ [0, 4, -3] }
				size={ [4, 1, 4] }
			/>
			<Ball/>
			<Plane rotation={ [-Math.PI / 2, 0, 0] } position={ [0, -4, 0] }/>
		</Physics>
	</group>
	;

export default TriggerMesh;
