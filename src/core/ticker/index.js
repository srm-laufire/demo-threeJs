import context from '../../core/context';

const start = () => {
	const { config: { tickerDelay }} = context;

	context.actions.getAngle();
	setInterval(context.actions.getAngle, tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
