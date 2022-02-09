import context from '../../core/context';

const start = () => {
	const { config: { tickerDelay }} = context;

	context.actions.tickIncrement();
	setInterval(context.actions.tickIncrement, tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
