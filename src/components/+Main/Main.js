import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../../pages/+LandingPage";
import Search from "../+Search";
import MovieDetails from "../+MovieDetails";
import Favorite from "../../pages/+Favorite";
import Watchlist from "../../pages/+Watchlist";
import NotFound from "../../pages/+NotFound";

const Main = () => {
	const [mediaType, setMediaType] = useState(null);

	const getMediaType = (type) => {
		setMediaType(type);
	};

	return (
		<main className='container main'>
			<Switch>
				<Route exact path='/' component={LandingPage} />
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
				<Route component={NotFound} />
			</Switch>
		</main>
	);
};

export default Main;
