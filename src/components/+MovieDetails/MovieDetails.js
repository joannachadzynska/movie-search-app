import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getDetails, getMovieCast } from "../../duck/details/actions";
import { typeDetailsByMediaType } from "../../utils/config";
import MovieCard from "./MovieCard";
import Spinner from "../+Spinner";
import Similar from "../+Similar/Similar";
import PersonCard from "./PersonCard";
import TvCard from "./TvCard";

const MovieDetails = ({ id, details, mediaType, crew }) => {
	const dispatch = useDispatch();

	const { details: movieDetails, loading } = details;

	useEffect(() => {
		if (mediaType === "movie") {
			dispatch(getDetails(id, typeDetailsByMediaType.movie));
			dispatch(getMovieCast(id));
		} else if (mediaType === "tv") {
			dispatch(getDetails(id, typeDetailsByMediaType.tv));
		} else if (mediaType === "person") {
			dispatch(getDetails(id, typeDetailsByMediaType.person));
		}
	}, [id, dispatch, mediaType]);

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
						<Similar id={id} mediaType={mediaType} />
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

export default connect(mapState, null)(React.memo(MovieDetails));
