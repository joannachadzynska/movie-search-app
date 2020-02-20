import { similarMoviesTypes } from "./actionTypes";

const initState = {
	loading: false,
	error: "",
	similarMovies: [],
	tv: [],
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

		case similarMoviesTypes.SEARCH_SIMILAR_TVSHOWS_REQUEST:
			return {
				...state,
				loading: true
			};

		case similarMoviesTypes.SEARCH_SIMILAR_TVSHOWS_SUCCESS:
			return {
				...state,
				loading: false,
				tv: payload.results,
				totalPages: payload.total_pages,
				totalResults: payload.total_results
			};

		case similarMoviesTypes.SEARCH_SIMILAR_TVSHOWS_FAILURE:
			return {
				...state,
				loading: false,
				tv: [],
				error: payload
			};

		default:
			return state;
	}
};

export default similarReducer;
