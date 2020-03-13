import { userTypes } from "./actionTypes";
import localStorage from "redux-persist/es/storage";

const initState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	isLoading: false,
	user: null,
	data: null
};

const userReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case userTypes.USER_LOADING:
			return {
				...state,
				isLoading: true
			};

		case userTypes.USER_LOADED:
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
				user: payload
			};

		case userTypes.USER_REGISTER_SUCCESS:
		case userTypes.USER_LOGIN_SUCCESS:
			// localStorage.setItem("token", payload.token);
			console.log(payload);

			return {
				...state,
				...payload,
				isLoading: false,
				isAuthenticated: true,
				data: payload
			};

		case userTypes.AUTH_ERROR:
		case userTypes.USER_LOGIN_FAILURE:
		case userTypes.USER_REGISTER_FAILURE:
		case userTypes.USER_LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false,
				data: null
			};

		default:
			return state;
	}
};

export default userReducer;
