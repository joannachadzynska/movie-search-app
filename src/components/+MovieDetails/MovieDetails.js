import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDetails } from "../../duck/details/actions";
import { typeDetailsByMediaType } from "../../utils/config";
import MovieCard from "./MovieCard";
import Spinner from "../+Spinner";
import Similar from "../+Similar/Similar";

const MovieDetails = ({ getDetails, id, details }) => {
	useEffect(() => {
		getDetails(id, typeDetailsByMediaType.movie);
		getDetails(id, typeDetailsByMediaType.tv);
	}, [getDetails, id]);

	const { details: movieDetails, loading } = details;
	console.log(movieDetails);

	return (
		<div className='details'>
			{loading ? (
				<Spinner />
			) : (
				<>
					<MovieCard movie={movieDetails} />
					<Similar id={id} />
				</>
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
