import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../../pages/+LandingPage";
import Search from "../+Search";
import MovieDetails from "../+MovieDetails";
import NotFound from "../../pages/+NotFound";

const Main = ({ searchMovies, loading, errorMessage, movies }) => {
	return (
		<Switch>
			<Route exact path='/' component={LandingPage} />
			<Route path='/search' component={Search} />
			<Route path='/details/:id' component={MovieDetails} />

			<Route component={NotFound} />
		</Switch>
	);
};

export default Main;
