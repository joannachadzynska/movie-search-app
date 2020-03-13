import { userTypes } from "./actionTypes";

// check token & load user
export const loadUser = () => ({});

export const userSignIn = (payload) => ({
	type: userTypes.USER_LOGIN_SUCCESS,
	payload
});

// user register

export const registerSuccess = (payload) => ({
	type: userTypes.USER_REGISTER_SUCCESS,
	payload
});

export const registerFailure = (payload) => ({
	type: userTypes.USER_REGISTER_FAILURE,
	payload
});

export const registerUser = (user) => (dispatch) => {
	fetch("http://localhost:3000/api/v1/users", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ user })
	})
		.then((resp) => resp.json())
		.then((data) => console.log(data))
		.catch((err) => dispatch(registerFailure(err)));
};
