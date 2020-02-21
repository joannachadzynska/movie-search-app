export const setImgUrl = (path) => `http://image.tmdb.org/t/p/w185${path}`;
export const setProfileImgUrl = (path) =>
	`http://image.tmdb.org/t/p/w185${path}`;

export const calculateAge = (birthdate) => {
	// console.log(birthdate);
};

export const range = (from, to, step = 1) => {
	let i = from;
	const range = [];

	while (i <= to) {
		range.push(i);
		i += step;
	}

	return range;
};
