export const setImgUrl = (path) => `http://image.tmdb.org/t/p/w185${path}`;

export const setProfileImgUrl = (path) =>
	`http://image.tmdb.org/t/p/w185${path}`;

export const range = (from, to, step = 1) => {
	let i = from;
	const range = [];

	while (i <= to) {
		range.push(i);
		i += step;
	}

	return range;
};

// Filters

export const isSearched = (searchTerm) => (item) => {
	if (item.item.media_type === "movie") {
		return item.item.title.toLowerCase().includes(searchTerm.toLowerCase());
	} else if (
		item.item.media_type === "person" ||
		item.item.media_type === "tv"
	) {
		return item.item.name.toLowerCase().includes(searchTerm.toLowerCase());
	}

	return item;
};

export const isSearchedByYear = (searchTerm) => (item) => {
	if (item.item.media_type === "movie") {
		return item.item.title.toLowerCase().includes(searchTerm.toLowerCase());
	} else if (
		item.item.media_type === "person" ||
		item.item.media_type === "tv"
	) {
		return item.item.name.toLowerCase().includes(searchTerm.toLowerCase());
	}

	return item;
};

export const isSearchedByType = (searchTerm) => (item) =>
	item.item.media_type.toLowerCase().includes(searchTerm.toLowerCase());

export const getOnlyYear = (date) => {
	if (!date) return;
	let year = date.slice(0, 4);
	return year;
};

// sorting
export const sortByRating = (items) => {
	const copy = [...items];
	copy.sort((a, b) => b.item.vote_average - a.item.vote_average);
	return copy;
};

export const sortByRatingReverse = (items) => {
	const copy = [...items];
	copy.sort((a, b) => a.item.vote_average - b.item.vote_average);
	return copy;
};

export const sortByYear = (items, mediaType) => {
	const copy = [...items];
	let sorted;

	// const copyYears = copy.map(
	// 	(el) =>
	// 		Date.parse(el.item.first_air_date) || Date.parse(el.item.release_date)
	// );

	// let years = [];
	// for (let date of copyYears) {
	// 	let year = new Date(date).getFullYear();
	// 	if (!isNaN(year)) {
	// 		years.push(year);
	// 	}
	// }

	// years.sort((a, b) => b - a);

	if (mediaType === "movie") {
		sorted = copy.sort(
			(a, b) =>
				b.item.release_date.slice(0, 4) - a.item.release_date.slice(0, 4)
		);
	} else if (mediaType === "tv") {
		sorted = copy.sort(
			(a, b) =>
				b.item.first_air_date.slice(0, 4) - a.item.first_air_date.slice(0, 4)
		);
	} else if (mediaType === "all") {
		console.log("currently have no idea how to do this");
		sorted = copy;
	}

	return sorted;
};

export const sortByName = (items) => {
	// const names = items.map((el) => el.item.name || el.item.title);
	// console.log(names.sort((a, b) => b.item.name - a.item.name));
	// return names.sort();
};

//  rating box utils
export const setRating = (favorites, id, rating) => {
	let userRating;
	if (favorites.some((el) => el.id === id)) {
		const fav = favorites
			.filter((el) => el.id === id)
			.map((el) => el.rating)
			.toString();

		userRating = Number(fav);
	} else {
		userRating = rating;
	}

	return userRating;
};

// login validation utils
const emailRegex = /\S+@\S+\.\S+/;

export const validateUserLogin = (email, password) => {
	let isValid = false;
	let errorMessages = [];

	if (!email) {
		isValid = false;
		errorMessages.push("Email cannot be empty!");
	}

	if (!password) {
		isValid = false;
		errorMessages.push("Password cannot be empty!");
	}

	if (emailRegex.test(String(email).toLowerCase())) {
		isValid = true;
	} else {
		isValid = false;
		errorMessages.push("Email is incorrect!");
	}

	if (
		password.match(/[a-z]/g) &&
		password.match(/[A-Z]/g) &&
		password.match(/[0-9]/g) &&
		password.match(/[^a-zA-Z\d]/g) &&
		password.length >= 8
	) {
		isValid = true;
	} else {
		isValid = false;
		errorMessages.push("Password is incorrect!");
	}

	if (!password.match(/[a-z]/g)) {
		isValid = false;
		errorMessages.push(
			"Password should contain at least 1 lowercase character"
		);
	}

	if (!password.match(/[A-Z]/g)) {
		isValid = false;
		errorMessages.push(
			"Password should contain at least 1 uppercase character"
		);
	}

	if (!password.match(/[0-9]/g)) {
		isValid = false;
		errorMessages.push("Password should contain at least 1 digit");
	}

	if (!password.match(/[^a-zA-Z\d]/g)) {
		isValid = false;
		errorMessages.push("Password should contain at least 1 special character");
	}

	if (password.length < 8) {
		isValid = false;
		errorMessages.push("Password should have at least 8 characters");
	}

	return [isValid, errorMessages];
};
