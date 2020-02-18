import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDetails } from "../../duck/details/actions";
import Ratings from "./Ratings";

const MovieDetails = ({ getDetails, id, details }) => {
	useEffect(() => {
		getDetails(id);
	}, [getDetails, id]);

	const { details: movieDetails, loading } = details;

	console.log(movieDetails);

	return (
		<div className='details'>
			<h3>movie details</h3>
			{loading ? (
				<span>loading...</span>
			) : (
				<div className='details-box'>
					<h3>{movieDetails.Title}</h3>
					<Ratings ratings={movieDetails.Ratings} />
				</div>
			)}
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
