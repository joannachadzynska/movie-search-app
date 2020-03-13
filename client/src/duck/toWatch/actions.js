import { toWatchTypes } from "./actionTypes";

export const addToWatchlist = (payload) => ({
	type: toWatchTypes.ADD_TO_WATCHLIST,
	payload
});

export const removeFromWatchlist = (payload) => ({
	type: toWatchTypes.REMOVE_FROM_WATCHLIST,
	payload
});
