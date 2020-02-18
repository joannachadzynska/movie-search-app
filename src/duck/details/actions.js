import { movieDetailsTypes } from "./actionTypes";

import { getMoviesUrl, typeMapping } from "../../utils/config";

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

export const getDetails = (query, type = typeMapping.id) => (dispatch) => {
	dispatch(startFetchingDetails());

	fetch(getMoviesUrl(query, type))
		.then((response) => response.json())
		.then((data) => dispatch(fetchedDetails(data)));
};
