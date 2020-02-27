import { favoriteTypes } from "./actionTypes";

const initState = {
	favorite: []
};

const favoriteReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case favoriteTypes.ADD_TO_FAVORITES:
			return Object.assign({}, state, {
				favorite: [
					...state.favorite.filter((item) => item.id !== payload.id),
					payload
				]
			});
		default:
			return state;
	}
};

export default favoriteReducer;
