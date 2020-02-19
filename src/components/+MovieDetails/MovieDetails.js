import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDetails } from "../../duck/details/actions";

import MovieCard from "./MovieCard";
import Spinner from "../+Spinner";

const MovieDetails = ({ getDetails, id, details }) => {
	useEffect(() => {
		getDetails(id);
	}, [getDetails, id]);

	const { details: movieDetails, loading } = details;

	return (
		<div className='details'>
			{loading ? <Spinner /> : <MovieCard movie={movieDetails} />}
		</div>
	);
};

const mapState = (state, ownProps) => {
	return {
		details: state.moviesDetails,
		id: ownProps.match.params.id
	};
};

const mapDispatch = (dispatch) => ({
	getDetails: (query, type) => dispatch(getDetails(query, type))
});

export default connect(mapState, mapDispatch)(MovieDetails);
