import { movieDetailsTypes } from "./actionTypes";

const initState = {
	loading: false,
	details: [],
	error: "",
	credits: []
};

const moviesDetails = (state = initState, { type, payload }) => {
	switch (type) {
		case movieDetailsTypes.GET_MOVIE_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
				error: "",
				details: []
			};

		case movieDetailsTypes.GET_MOVIE_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				details: payload
			};

		case movieDetailsTypes.GET_MOVIE_DETAILS_FAILURE:
			return {
				...state,
				details: [],
				loading: false,
				error: payload
			};

		case movieDetailsTypes.GET_MOVIE_CREDITS_REQUEST:
			return {
				...state,
				loading: true,
				error: "",
				credits: []
			};

		case movieDetailsTypes.GET_MOVIE_CREDITS_SUCCESS:
			return {
				...state,
				loading: false,
				credits: payload
			};

		case movieDetailsTypes.GET_MOVIE_CREDITS_FAILURE:
			return {
				...state,
				loading: false,
				error: payload,
				credits: []
			};

		default:
			return state;
	}
};

export default moviesDetails;
