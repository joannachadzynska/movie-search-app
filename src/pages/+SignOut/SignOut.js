import React from "react";
import { Link } from "react-router-dom";

const SignOut = ({ history }) => {
	return (
		<div className='sign-out wrapper'>
			<h2>Sign out successfully!</h2>
			{/* <button onClick={history.push("/")}>go back</button>
			 */}
			<Link to='/'>Go to main page</Link>
		</div>
	);
};

export default SignOut;
