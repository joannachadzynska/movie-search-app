import { toWatchTypes } from "./actionTypes";

const initState = {
	toWatch: []
};

const toWatchReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case toWatchTypes.ADD_TO_WATCHLIST:
			return Object.assign({}, state, {
				toWatch: [
					...state.toWatch.filter((item) => item.id !== payload.id),
					payload
				]
			});

		case toWatchTypes.REMOVE_FROM_WATCHLIST:
			return Object.assign({}, state, {
				toWatch: [...state.toWatch.filter((item) => item.id !== payload.id)]
			});

		default:
			return state;
	}
};

export default toWatchReducer;
