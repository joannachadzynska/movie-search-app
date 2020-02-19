import { movieDetailsTypes } from "./actionTypes";

import {
	getMoviesUrl,
	typeMapping,
	getMovieDBDetailUrl
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
		.then((data) => dispatch(fetchedDetails(data)));
};
