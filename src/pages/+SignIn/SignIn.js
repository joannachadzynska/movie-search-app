import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignIn } from "../../duck/user/actions";
import { Link } from "react-router-dom";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const onFormSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) return;
		dispatch(userSignIn({ email: email, password: password }));
		setEmail("");
		setPassword("");
	};

	return (
		<div
			style={{ height: "100vh" }}
			className='d-flex justify-content-center align-items-center'>
			<div style={{ width: 300 }}>
				<h1 className='text-center'>Sign in</h1>
				<form onSubmit={onFormSubmit}>
					<fieldset>
						<label>Email address</label>
						<input
							type='email'
							placeholder='Enter email'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</fieldset>

					<fieldset>
						<label>Password</label>
						<input
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</fieldset>
					<button type='submit' className='w-100 mt-3'>
						Sign in
					</button>
				</form>
				<h2>
					Don't have an account? <Link to='sign-up'>Register here</Link>
				</h2>
			</div>
		</div>
	);
};

export default SignIn;
