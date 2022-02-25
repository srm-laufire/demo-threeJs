/* eslint-disable no-return-assign */
/* eslint-disable no-multi-assign */
/* eslint-disable no-magic-numbers */
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import '../../App.scss';

const Dodecahedron = ({ ...props }) =>
	<mesh { ...props }>
		<dodecahedronBufferGeometry/>
		<meshStandardMaterial roughness={ 0.75 } emissive="#404057"/>
		<Html distanceFactor={ 10 }>
			<div className="content" role="content">
				ThreeJs
			</div>
		</Html>
	</mesh>;

const Content = () => {
	const ref = useRef();

	useFrame(() => (ref.current.rotation.x
		= ref.current.rotation.y
		= ref.current.rotation.z += 0.01));
	return (
		<group ref={ ref } scale={ 1 }>
			<Dodecahedron position={ [-2, 0, 0] }/>
			<Dodecahedron position={ [0, -2, -3] }/>
			<Dodecahedron position={ [2, 0, 0] }/>
		</group>
	);
};

const HtmlAnnotations = () =>
	<group>
		<pointLight color="indianred"/>
		<pointLight position={ [10, 10, -10] } color="orange"/>
		<pointLight position={ [-10, -10, 10] } color="lightblue"/>
		<Content/>
	</group>;

export default HtmlAnnotations;
