import { string } from "prop-types";

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

// Filter and sort

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

//  rating box utils
export const setRating = (favorites, id, rating) => {
	// const favorites = useSelector((state) => state.favorites.watched);
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
