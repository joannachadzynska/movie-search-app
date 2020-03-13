import { favoriteTypes } from "./actionTypes";

export const addToFavorite = (payload) => ({
	type: favoriteTypes.ADD_TO_FAVORITES,
	payload
});
export const removeFromFavorites = (payload) => ({
	type: favoriteTypes.REMOVE_FROM_FAVORITES,
	payload
});
