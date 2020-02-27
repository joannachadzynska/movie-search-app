import { favoriteTypes } from "./actionTypes";

const initState = {
	watched: []
};

const favoriteReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case favoriteTypes.ADD_TO_FAVORITES:
			return Object.assign({}, state, {
				watched: [
					...state.watched.filter((item) => item.id !== payload.id),
					payload
				]
			});

		default:
			return state;
	}
};

export default favoriteReducer;
