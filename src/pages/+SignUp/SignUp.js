import React, { useState } from "react";

// import { userPostFetch } from "../redux/actions";
import { Link } from "react-router-dom";
import FormInput from "../../components/+FormInput/FormInput";

const SignUp = () => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-up wrapper'>
			<h2 className='sign-up__title'>I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className='sign-up__form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					label='Display Name'
					value={displayName}
					onChange={handleChange}
					required
				/>
				<FormInput
					type='email'
					name='email'
					label='Email'
					value={email}
					onChange={handleChange}
					required
				/>
				<FormInput
					type='password'
					name='password'
					label='Password'
					value={password}
					onChange={handleChange}
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					label='Confirm Password'
					value={confirmPassword}
					onChange={handleChange}
					required
				/>
				<button>Sign up</button>

				<p className='sign-up__form__info'>
					Already have an account? <Link to='sign-in'>Login here</Link>
				</p>
			</form>
		</div>
	);
};

export default SignUp;
