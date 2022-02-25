import React from 'react';

const TorusKnotGeometry = () => <mesh scale={ 1 }>
	<torusKnotGeometry/>
	<meshStandardMaterial color="green" roughness={ 0.2 }/>
</mesh>;

export default TorusKnotGeometry;
