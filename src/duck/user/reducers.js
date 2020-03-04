import { userTypes } from "./actionTypes";

const initState = {
	loading: true,
	data: null
};

const userReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case userTypes.USER_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				data: payload
			};
		case userTypes.USER_LOGOUT:
			return {
				...state,
				data: null
			};

		default:
			return state;
	}
};

export default userReducer;
