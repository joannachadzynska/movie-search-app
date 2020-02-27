import { favoriteTypes } from "./actionTypes";

export const addToFavorite = (payload) => ({
	type: favoriteTypes.ADD_TO_FAVORITES,
	payload
});
