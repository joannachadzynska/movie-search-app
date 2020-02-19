import { similarMoviesTypes } from "./actionTypes";

const initState = {
	loading: false,
	error: "",
	similarMovies: [],
	totalPages: null,
	totalResults: null
};

const similarReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case similarMoviesTypes.SEARCH_SIMILAR_MOVIES_REQUEST:
			return {
				...state,
				loading: true,
				error: "",
				similarMovies: []
			};

		case similarMoviesTypes.SEARCH_SIMILAR_MOVIES_SUCCESS:
			return {
				...state,
				loading: false,
				error: "",
				similarMovies: payload.results,
				totalPages: payload.total_pages,
				totalResults: payload.total_results
			};

		case similarMoviesTypes.SEARCH_SIMILAR_MOVIES_FAILURE:
			return {
				...state,
				loading: false,
				error: payload,
				similarMovies: []
			};

		default:
			return state;
	}
};

export default similarReducer;
