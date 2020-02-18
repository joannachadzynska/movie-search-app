import { getMoviesUrl, typeMapping } from "../../utils/config";
import { searchMoviesTypes } from "./actionTypes";

export const startFetching = () => ({
	type: searchMoviesTypes.SEARCH_MOVIES_REQUEST
});

export const fetchedMovies = (payload) => ({
	type: searchMoviesTypes.SEARCH_MOVIES_SUCCESS,
	payload
});

export const fetchedMoviesError = (payload) => ({
	type: searchMoviesTypes.SEARCH_MOVIES_FAILURE,
	payload
});

export const getMovies = (query, type, page) => (dispatch) => {
	dispatch(startFetching());

	fetch(getMoviesUrl(query, type, page))
		.then((response) => response.json())
		.then((movies) => dispatch(fetchedMovies(movies)))
		.catch((error) => dispatch(fetchedMoviesError(error)));
};
