const tick = ({ state: { ticks }, config: { incrementValue }}) => ({
	ticks: ticks + incrementValue,
});

const actions = {
	tick,
};

export default actions;
