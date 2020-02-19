import { combineReducers } from "redux";
import movies from "./movies/reducers";
import moviesDetails from "./details/reducers";
import similarReducer from "./similar/reducers";

export default combineReducers({
	movies,
	moviesDetails,
	similar: similarReducer
});
