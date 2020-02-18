export const initState = {
	loading: true,
	movies: [],
	errorMessage: null
};

export const searchMovieTypes = {
	SEARCH_MOVIE_REQUEST: "[search] SEARCH_MOVIE_REQUEST",
	SEARCH_MOVIE_SUCCESS: "[search] SEARCH_MOVIE_SUCCESS",
	SEARCH_MOVIE_FAILURE: "[search] SEARCH_MOVIE_FAILURE"
};

export const searchReducer = (state, { type, payload, error }) => {
	switch (type) {
		case searchMovieTypes.SEARCH_MOVIE_REQUEST:
			return {
				...state,
				loading: true,
				errorMessage: null
			};

		case searchMovieTypes.SEARCH_MOVIE_SUCCESS:
			return {
				...state,
				loading: false,
				errorMessage: null,
				movies: payload
			};

		case searchMovieTypes.SEARCH_MOVIE_FAILURE:
			return {
				...state,
				loading: false,
				errorMessage: error
			};

		default:
			return state;
	}
};
