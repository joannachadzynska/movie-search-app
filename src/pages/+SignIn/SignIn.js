import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignIn } from "../../duck/user/actions";
import { Link } from "react-router-dom";
import { validateUserLogin } from "../../utils/utils";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [isValid, setIsValid] = useState(false);
	const dispatch = useDispatch();

	const onFormSubmit = (e) => {
		e.preventDefault();

		const isValid = validateUserLogin(email, password);
		const errorMessages = isValid[1];
		console.log(isValid, errorMessages);

		if (!isValid) return;

		dispatch(userSignIn({ email, password }));
		setEmail("");
		setPassword("");
	};

	return (
		<div className='wrapper sign-in'>
			<div className='sign-in__container'>
				<h1 className='sign-in__title'>Sign in</h1>
				<form onSubmit={onFormSubmit} className='sign-in__form' noValidate>
					<fieldset className='my-1'>
						<label>Email</label>
						<input
							type='email'
							placeholder='Enter email'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</fieldset>

					<fieldset className='my-1'>
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
					<button type='submit' className='my-1'>
						Sign in
					</button>

					<p className='sign-in__form__info'>
						Don't have an account? <Link to='sign-up'>Register here</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
