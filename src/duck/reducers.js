import { combineReducers } from "redux";
import movies from "./movies/reducers";
import moviesDetails from "./details/reducers";
import similarReducer from "./similar/reducers";
import favoriteReducer from "./favorite/reducers";
import toWatchReducer from "./toWatch/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["favorites", "watchlist"] // which reducer want to store
};

const rootReducer = combineReducers({
	movies,
	moviesDetails,
	similar: similarReducer,
	favorites: favoriteReducer,
	watchlist: toWatchReducer
});

export default persistReducer(persistConfig, rootReducer);
