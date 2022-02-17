import { range } from '@laufire/utils/collection';
import { getRoundedValue } from '../helpers';

const Converters = {
	tickToAngle: ({ config: { fullRotateDelay, degree }, state: { ticks }}) =>
		degree / fullRotateDelay * ticks % degree,

	degToPos: (angle, distance) =>
		({ x: distance * getRoundedValue(Math.cos(angle)),
			y: distance * getRoundedValue(Math.sin(angle)) }),

	tickToColor: ({ config: { colorChangeDelay, colors },
		state: { ticks }}) =>
		colors[Math.floor(ticks / colorChangeDelay) % colors.length],

	tickToGlow: ({ config: { glow: { delay, size }}, state: { ticks }}) => {
		const step = -1;
		const possibilities = [
			...range(-size, size + 1),
			...range(
				size - 1, -size, step
			),
		];
		const fullDelay = possibilities.length;

		return possibilities[Math.floor(fullDelay / delay
			* ticks) % fullDelay];
	},
};

export default Converters;
