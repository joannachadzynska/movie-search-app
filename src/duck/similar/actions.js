import { similarMoviesTypes } from "./actionTypes";
import { getMovieDBurl } from "../../utils/config";

export const startFetching = () => ({
	type: similarMoviesTypes.SEARCH_SIMILAR_MOVIES_REQUEST
});

export const fetchedMovies = (payload) => ({
	type: similarMoviesTypes.SEARCH_SIMILAR_MOVIES_SUCCESS,
	payload
});

export const fetchedMoviesError = (payload) => ({
	type: similarMoviesTypes.SEARCH_SIMILAR_MOVIES_FAILURE,
	payload
});

export const getSimilarMovies = (query, page) => (dispatch) => {
	dispatch(startFetching());

	fetch(getMovieDBurl(query, page))
		.then((response) => response.json())
		.then((movies) => dispatch(fetchedMovies(movies)));
	// .catch((error) => dispatch(fetchedMoviesError(error)));
};
