import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDetails, getMovieCast } from "../../duck/details/actions";
import { typeDetailsByMediaType } from "../../utils/config";
import MovieCard from "./MovieCard";
import Spinner from "../+Spinner";
import Similar from "../+Similar/Similar";
import PersonCard from "./PersonCard";
import TvCard from "./TvCard";

const MovieDetails = ({
	getDetails,
	id,
	details,
	mediaType,
	getMovieCast,
	crew
}) => {
	useEffect(() => {
		if (mediaType === "movie") {
			getDetails(id, typeDetailsByMediaType.movie);
			getMovieCast(id);
		} else if (mediaType === "tv") {
			getDetails(id, typeDetailsByMediaType.tv);
		} else if (mediaType === "person") {
			getDetails(id, typeDetailsByMediaType.person);
		}
	}, [getDetails, id, mediaType, getMovieCast]);

	const { details: movieDetails, loading } = details;

	return (
		<div className='details'>
			{loading ? (
				<Spinner />
			) : (
				<>
					{mediaType === "person" ? (
						<PersonCard card={movieDetails} />
					) : mediaType === "tv" ? (
						<TvCard tv={movieDetails} />
					) : (
						<MovieCard movie={movieDetails} crew={crew} />
					)}

					{mediaType === "person" ? (
						<span>not a film or tv </span>
					) : (
						<>
							<Similar id={id} mediaType={mediaType} />
						</>
					)}
				</>
			)}
		</div>
	);
};

const mapState = (state, ownProps) => {
	return {
		details: state.moviesDetails,
		id: ownProps.match.params.id,
		crew: state.moviesDetails.credits.crew
	};
};

const mapDispatch = (dispatch) => ({
	getDetails: (query, type) => dispatch(getDetails(query, type)),
	getMovieCast: (movieId) => dispatch(getMovieCast(movieId))
});

export default connect(mapState, mapDispatch)(MovieDetails);
