const tick = ({ state: { ticks }, config: { incrementValue }}) => ({
	ticks: ticks + incrementValue,
});

const changeColor = ({ state: { colorValue },
	config: { textClickColors: { length }}}) => ({
	colorValue: (colorValue + 1) % length,
});

const actions = {
	changeColor,
	tick,
};

export default actions;
