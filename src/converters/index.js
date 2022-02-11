import { getRoundedValue } from '../helpers';

const Converters = {
	tickToAngle: ({ config: { fullRotateDelay, degree }, state: { ticks }}) =>
		degree / fullRotateDelay * ticks % degree,

	degToPos: (angle, distance) =>
		({ x: distance * getRoundedValue(Math.cos(angle)),
			y: distance * getRoundedValue(Math.sin(angle)) }),
};

export default Converters;
