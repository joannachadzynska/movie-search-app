import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignIn } from "../../duck/user/actions";
import { Link } from "react-router-dom";
import { validateUserLogin } from "../../utils/utils";
import FormInput from "../../components/+FormInput/FormInput";

const SignIn = () => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: ""
	});
	const { email, password } = userCredentials;

	const dispatch = useDispatch();

	const onFormSubmit = (e) => {
		e.preventDefault();

		const isValid = validateUserLogin(email, password);
		const errorMessages = isValid[1];
		console.log(isValid, errorMessages);

		if (!isValid) return;

		dispatch(userSignIn({ email, password }));
		setCredentials({
			email: "",
			password: ""
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='wrapper sign-in'>
			<h1 className='sign-in__title'>Sign in</h1>
			<form onSubmit={onFormSubmit} className='sign-in__form' noValidate>
				<FormInput
					type='email'
					name='email'
					handleChange={handleChange}
					value={email}
					label='Email'
					placeholder='Email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					handleChange={handleChange}
					value={password}
					label='Password'
					placeholder='Password'
					required
				/>

				<button type='submit' className='my-1'>
					Sign in
				</button>

				<p className='sign-in__form__info'>
					Don't have an account? <Link to='sign-up'>Register here</Link>
				</p>
			</form>
		</div>
	);
};

export default SignIn;
