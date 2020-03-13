import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const user = useSelector((state) => state.user);
	return (
		<Route
			{...rest}
			render={(routeProps) =>
				user.data ? <Component {...routeProps} /> : <Redirect to='/sign-in' />
			}
		/>
	);
	/*  we are spreading routeProps to be able to access this routeProps in the component. */
};

export default PrivateRoute;
