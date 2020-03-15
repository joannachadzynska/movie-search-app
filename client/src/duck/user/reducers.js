import { userTypes } from "./actionTypes";

const initState = {
	token: localStorage.getItem("token"),
	isAuthenticated: false,
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
			localStorage.setItem("token", payload.token);
			return {
				...state,
				// ...payload,
				isLoading: false,
				isAuthenticated: true,
				user: payload,
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
				user: payload,
				isAuthenticated: false,
				isLoading: false,
				data: payload
			};

		default:
			return state;
	}
};

export default userReducer;
