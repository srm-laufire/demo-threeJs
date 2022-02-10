const Converters = {
	tickToAngle: ({ config: { fullRotateDelay, degree }, state: { ticks }}) =>
		degree / fullRotateDelay * ticks % degree,
};

export default Converters;
