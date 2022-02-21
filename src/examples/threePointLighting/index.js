/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';

const GroundPlane = () =>
	<mesh receiveShadow={ true } rotation={ [5, 0, 0] } position={ [0, -1, 0] }>
		<planeBufferGeometry args={ [500, 500] }/>
		<meshStandardMaterial color="white"/>
	</mesh>;

const BackDrop = () =>
	<mesh receiveShadow={ true } position={ [0, -1, -5] }>
		<planeBufferGeometry args={ [500, 500] }/>
		<meshStandardMaterial color="white"/>
	</mesh>;

const Sphere = () =>
	<mesh position={ [0, 0, 0] } rotation={ [0, 0, 0] }>
		<sphereGeometry args={ [1, 16, 16] }/>
		<meshStandardMaterial
			color="white"
			roughness={ 0.2 }
			metalness={ 0.1 }
		/>
	</mesh>;

const KeyLight = () =>
	<rectAreaLight
		width={ 3 }
		height={ 3 }
		color="#ffc9f9"
		intensity={ 5.6 }
		position={ [-2, 0, 5] }
		castShadow={ true }
	/>;

const FillLight = () =>
	<rectAreaLight
		width={ 3 }
		height={ 3 }
		intensity={ 2.6 }
		color="#bdefff"
		position={ [2, 1, 4] }
		castShadow={ true }
	/>;

const RimLight = () =>
	<rectAreaLight
		width={ 2 }
		height={ 2 }
		intensity={ 54 }
		color="#fff"
		position={ [1, 4, -2] }
		rotation={ [0, 180, 0] }
		castShadow={ true }
	/>;

const ThreePointLighting = () => {
	const [light, setLight] = useState(true);

	return <group onClick={ () => setLight(!light) }>
		<GroundPlane/>
		<BackDrop/>
		{ light && <KeyLight/> }
		<FillLight/>
		<RimLight/>
		<Sphere/>
	</group>;
};

export default ThreePointLighting;
