import AngleManager from '../services/angleManager';

const getAngle = (context) => ({
	ticks: AngleManager.getAngle(context),
});

const actions = {
	getAngle,
};

export default actions;
