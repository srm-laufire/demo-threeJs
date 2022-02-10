import context from '../../core/context';

const start = () => {
	const { config: { tickerDelay }} = context;

	context.actions.tick();
	setInterval(context.actions.tick, tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
