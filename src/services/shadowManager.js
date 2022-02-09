const ShadowManager = {
	tickIncrement: ({ state: { ticks }, config: { incrementValue }}) =>
		ticks + incrementValue,

	getAngle: ({ config: { fullRotateDelay, degree }, state: { ticks }}) =>
		degree / fullRotateDelay * ticks % degree,
};

export default ShadowManager;
