import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { folder, useControls } from 'leva';
import { React, Suspense } from 'react';
import './App.scss';
import examples from './examples';

const getInput = () => useControls({
	Example: {
		options: examples,
	},
	orbitControl: true,
	Background: folder({
		color: '#6fba93',
		environment: false,
		preset: {
			options: {
				city: 'city',
				park: 'park',
				apartment: 'apartment',
				sunset: 'sunset',
				dawn: 'dawn',
				night: 'night',
			},
		},
	}, { collapsed: true }),
});

const App = () => {
	const { Example, color, orbitControl, environment, preset } = getInput();

	return (
		<div className="App" role="App">
			<Canvas style={ { background: color } } shadows={ true }>
				<Suspense fallback={ null }>
					<Example/>
					{ environment
			&& <Environment background={ true } preset={ preset }/>}
				</Suspense>
				{ orbitControl && <OrbitControls/> }
			</Canvas>
		</div>);
};

export default App;
