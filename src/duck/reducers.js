import { combineReducers } from "redux";
import movies from "./movies/reducers";
import moviesDetails from "./details/reducers";
export default combineReducers({
	movies,
	moviesDetails
});
