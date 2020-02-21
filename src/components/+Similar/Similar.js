import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	getSimilarMovies,
	getSimilarTvShows
} from "../../duck/similar/actions";
import Spinner from "../+Spinner";
import SimilarMoviesList from "./Movies";
import { typeDetailsByMediaType } from "../../utils/config";
import SimilarTvShowsList from "./TvShows";
import Pagination from "../+Pagination/Pagination";

const Similar = ({
	id,
	getSimilarMovies,
	getSimilarTvShows,
	similar,
	mediaType
}) => {
	const { loading, similarMovies, tv } = similar;

	useEffect(() => {
		if (mediaType === "movie") {
			getSimilarMovies(typeDetailsByMediaType.movie, id, 1);
		} else if (mediaType === "tv") {
			getSimilarTvShows(typeDetailsByMediaType.tv, id, 1);
		}
	}, [getSimilarMovies, getSimilarTvShows, id, mediaType]);

	return (
		<div className='similar'>
			{loading ? (
				<Spinner />
			) : mediaType === "movie" ? (
				<>
					<h2>Similar movies</h2>
					<SimilarMoviesList movies={similarMovies} type={mediaType} />
					<Pagination searchedValue={id} type={mediaType} isInSimilar />
				</>
			) : mediaType === "tv" ? (
				<>
					<h2>Similar tvshows</h2>
					<SimilarTvShowsList tv={tv} type={mediaType} />
					<Pagination searchedValue={id} type={mediaType} isInSimilar />
				</>
			) : null}
		</div>
	);
};

const mapState = ({ similar }) => ({ similar });

const mapDispatch = (dispatch) => ({
	getSimilarMovies: (type, movieId, page) =>
		dispatch(getSimilarMovies(type, movieId, page)),
	getSimilarTvShows: (type, tvId, page) =>
		dispatch(getSimilarTvShows(type, tvId, page))
});

export default connect(mapState, mapDispatch)(Similar);
