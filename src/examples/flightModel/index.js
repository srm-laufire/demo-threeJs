import { React } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const FlightModel = () => {
	const gltf = useLoader(GLTFLoader,
		`${ process.env.PUBLIC_URL }/flight.gltf`);

	return (
		<>
			<ambientLight/>
			<primitive object={ gltf.scene } scale={ 0.4 }/>
		</>
	);
};

export default FlightModel;
