import { userTypes } from "./actionTypes";

export const userSignIn = (payload) => ({
	type: userTypes.USER_LOGIN_SUCCESS,
	payload
});
