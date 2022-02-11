/* eslint-disable complexity */
/* eslint-disable no-magic-numbers */
import { Environment, OrbitControls, Plane } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { folder, useControls } from 'leva';
import { React, Suspense, useEffect } from 'react';
import './App.scss';
import examples from './examples';
import Ticker from './core/ticker';
import { degToRad } from 'three/src/math/MathUtils';
import Converters from './converters';

// eslint-disable-next-line max-lines-per-function
const getInput = () => {
	const appProps = useControls({
		Example: {
			options: examples,
		},
		orbitControl: true,
		plane: true,
		directionalLight: true,
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

	const planeProps = useControls('Plane', {
		receiveShadow: true,
		castShadow: true,
		rotation: [-1.4, 0, 0],
		position: [0, -2, 0],
		args: [200, 200],
		color: '#f0b18b',
	});

	const dirLightProps = useControls('Directional Light', {
		distance: 1.5,
		angle: { value: 0, min: 0, max: 180, step: 15 },
		castShadow: true,
		receiveShadow: true,
		intensity: { value: 1, min: 0.5, max: 5, step: 0.5 },
	});

	return { appProps, planeProps, dirLightProps };
};

// eslint-disable-next-line max-lines-per-function
const App = (context) => {
	useEffect(Ticker.start, []);
	const { degToPos } = Converters;

	const { appProps, planeProps, dirLightProps } = getInput();
	const { angle, distance, ...props } = dirLightProps;
	const { x, y } = degToPos(degToRad(angle), distance);
	const dirProps = { position: [x, y, 0], ...props };

	const { Example, color, orbitControl, plane,
		directionalLight, environment, preset } = appProps;
	const { color: pColor, ...pProps } = planeProps;

	return (
		<div className="App" role="App">
			<Canvas
				style={ { background: color } }
				shadows={ true }
			>
				<Suspense fallback={ null }>
					<ambientLight/>
					{	directionalLight
						&& <directionalLight { ...dirProps }/>}
					<Example { ...context }/>
					{ environment
						&& <Environment background={ true } preset={ preset }/>}
					{	plane && <Plane { ...pProps }>
						<meshStandardMaterial color={ pColor }/>
					</Plane>}
				</Suspense>
				{ orbitControl && <OrbitControls/> }
			</Canvas>
		</div>);
};

export default App;
