import ShadowManager from '../services/shadowManager';

const tickIncrement = (context) => ({
	ticks: ShadowManager.tickIncrement(context),
});

const actions = {
	tickIncrement,
};

export default actions;
