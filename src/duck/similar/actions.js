import { similarMoviesTypes } from "./actionTypes";
import { getMovieDBurl } from "../../utils/config";

// get similar movies

const startFetching = () => ({
	type: similarMoviesTypes.SEARCH_SIMILAR_MOVIES_REQUEST
});

const fetchedMovies = (payload) => ({
	type: similarMoviesTypes.SEARCH_SIMILAR_MOVIES_SUCCESS,
	payload
});

const fetchedMoviesError = (payload) => ({
	type: similarMoviesTypes.SEARCH_SIMILAR_MOVIES_FAILURE,
	payload
});

export const getSimilarMovies = (type, query, page) => (dispatch) => {
	dispatch(startFetching());

	fetch(getMovieDBurl(type, query, page))
		.then((response) => response.json())
		.then((movies) => dispatch(fetchedMovies(movies)))
		.catch((error) => dispatch(fetchedMoviesError(error)));
};

// get similar tv shows

const getSimilarTvStart = () => ({
	type: similarMoviesTypes.SEARCH_SIMILAR_TVSHOWS_REQUEST
});

const getSimilarTvSuccess = (payload) => ({
	type: similarMoviesTypes.SEARCH_SIMILAR_TVSHOWS_SUCCESS,
	payload
});

const getSimilarTvFailure = (payload) => ({
	type: similarMoviesTypes.SEARCH_SIMILAR_TVSHOWS_FAILURE,
	payload
});

export const getSimilarTvShows = (type, query, page) => (dispatch) => {
	dispatch(getSimilarTvStart());

	fetch(getMovieDBurl(type, query, page))
		.then((response) => response.json())
		.then((tv) => dispatch(getSimilarTvSuccess(tv)))
		.catch((error) => dispatch(getSimilarTvFailure(error)));
};
