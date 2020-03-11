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
