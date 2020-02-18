import { movieDetailsTypes } from "./actionTypes";

const initState = {
	loading: false,
	details: [],
	error: ""
};

const moviesDetails = (state = initState, action) => {
	switch (action.type) {
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
				details: action.payload
			};

		case movieDetailsTypes.GET_MOVIE_DETAILS_FAILURE:
			return {
				...state,
				details: [],
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
};

export default moviesDetails;
