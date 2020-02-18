import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk, logger];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
