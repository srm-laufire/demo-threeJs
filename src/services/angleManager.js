const AngleManager = {
	getAngle: ({ state: { ticks },
		config: { incrementValue, incrementAngle }}) =>
		ticks + incrementAngle + incrementValue,
};

export default AngleManager;
