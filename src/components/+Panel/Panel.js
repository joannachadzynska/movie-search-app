import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSignIn } from "../../duck/user/actions";

const Panel = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const { email } = user.data;
	const onLogOut = () => {
		console.log("LogOut pressed.");
		dispatch(userSignIn({ email: "", password: "" }));
	};

	const style = {
		width: "300",
		display: "flex"
	};
	return (
		<div style={style}>
			<h1 className='text-center'> Hello, {user ? email : user} </h1>
			<button
				type='button'
				className='w-100 mt-3 border-radius'
				onClick={onLogOut}>
				Log out
			</button>
		</div>
	);
};

export default Panel;
