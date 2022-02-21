/* eslint-disable no-magic-numbers */
import {
	MeshDistortMaterial,
	MeshWobbleMaterial,
	Sphere,
} from '@react-three/drei';
import { React } from 'react';

/* eslint-disable max-lines-per-function */
const DifferentSpheres = () =>
	<group>
		<Sphere
			castShadow={ true }
			scale={ 0.9 }
			position={ [0, 0, 0] }
			args={ [1, 16, 200] }
		>
			<meshStandardMaterial
				color="#7222D3"
				roughness={ 0.1 }
				metalness={ 0.1 }
			/>
		</Sphere>;
		<Sphere
			castShadow={ true }
			scale={ 0.9 }
			position={ [-3, 0, 0] }
			args={ [1, 16, 200] }
		>
			<MeshWobbleMaterial
				color="#EB1E99"
				factor={ 1 }
				speed={ 5 }
				roughness={ 0.1 }
			/>
		</Sphere>;
		<Sphere
			castShadow={ true }
			scale={ 0.9 }
			position={ [3, 0, 0] }
			args={ [1, 16, 200] }
		>
			<MeshDistortMaterial
				color="#00A38D"
				distort={ 0.5 }
				speed={ 1 }
				roughness={ 0.1 }
			/>
		</Sphere>;
	</group>;

export default DifferentSpheres;
