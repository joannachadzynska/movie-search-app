import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Search from "../+Search";
import MovieDetails from "../+MovieDetails";

import {
	LandingPage,
	Favorite,
	Watchlist,
	SignIn,
	SignOut,
	SignUp,
	NotFound
} from "../../pages";

// import PrivateRoute from "../+PrivateRoute/PrivateRoute";

const Main = () => {
	const [mediaType, setMediaType] = useState(null);

	const getMediaType = (type) => {
		setMediaType(type);
	};

	return (
		<main className='container main py-2'>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				{/* <PrivateRoute path='/' component={LandingPage} /> */}
				<Route
					path='/search'
					render={(props) => (
						<Search
							{...props}
							getMediaType={getMediaType}
							mediaType={mediaType}
						/>
					)}
				/>
				<Route
					exact
					path='/details/:id'
					render={(props) => <MovieDetails {...props} mediaType={mediaType} />}
				/>
				<Route path='/favorite' component={Favorite} />
				<Route path='/watchlist' component={Watchlist} />
				<Route path='/sign-in' component={SignIn} />
				<Route path='/sign-up' component={SignUp} />
				<Route path='/sign-out' component={SignOut} />
				<Route component={NotFound} />
			</Switch>
		</main>
	);
};

export default Main;
