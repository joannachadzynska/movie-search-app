import { movieDetailsTypes } from "./actionTypes";

import {
	getMovieDBDetailUrl,
	getMovieDBMovieCastUrl
} from "../../utils/config";

export const startFetchingDetails = () => ({
	type: movieDetailsTypes.GET_MOVIE_DETAILS_REQUEST
});

export const fetchedDetails = (payload) => {
	return {
		type: movieDetailsTypes.GET_MOVIE_DETAILS_SUCCESS,
		payload
	};
};

export const fetchedDetialsError = (payload) => ({
	type: movieDetailsTypes.GET_MOVIE_DETAILS_FAILURE,
	payload
});

export const getDetails = (query, type) => (dispatch) => {
	dispatch(startFetchingDetails());

	fetch(getMovieDBDetailUrl(query, type))
		.then((response) => response.json())
		.then((data) => dispatch(fetchedDetails(data)))
		.catch((err) => dispatch(fetchedDetialsError(err)));
};

// get movie credits (cast and directors)
const getMovieCastStart = () => ({
	type: movieDetailsTypes.GET_MOVIE_CREDITS_REQUEST
});
const getMovieCastSuccess = (payload) => ({
	type: movieDetailsTypes.GET_MOVIE_CREDITS_SUCCESS,
	payload
});
const getMovieCastFailure = (payload) => ({
	type: movieDetailsTypes.GET_MOVIE_CREDITS_FAILURE,
	payload
});

export const getMovieCast = (id) => (dispatch) => {
	dispatch(getMovieCastStart());

	fetch(getMovieDBMovieCastUrl(id))
		.then((resp) => resp.json())
		.then((cast) => dispatch(getMovieCastSuccess(cast)))
		.catch((err) => dispatch(getMovieCastFailure(err)));
};
