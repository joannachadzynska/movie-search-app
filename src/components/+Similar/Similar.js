import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
	getSimilarMovies,
	getSimilarTvShows
} from "../../duck/similar/actions";
import Spinner from "../+Spinner";
import SimilarMoviesList from "./Movies";
import { typeDetailsByMediaType } from "../../utils/config";
import SimilarTvShowsList from "./TvShows";

const Similar = ({
	id,
	getSimilarMovies,
	getSimilarTvShows,
	similar,
	mediaType
}) => {
	const [pageNum, setPageNum] = useState(1);

	useEffect(() => {
		if (mediaType === "movie") {
			getSimilarMovies(typeDetailsByMediaType.movie, id, pageNum);
		} else if (mediaType === "tv") {
			getSimilarTvShows(typeDetailsByMediaType.tv, id, pageNum);
		}
	}, [getSimilarMovies, getSimilarTvShows, id, pageNum, mediaType]);

	const { loading, similarMovies, tv } = similar;
	console.log(mediaType);

	return (
		<div className='similar'>
			{loading ? (
				<Spinner />
			) : mediaType === "movie" ? (
				<>
					<h2>Similar movies</h2>
					<SimilarMoviesList movies={similarMovies} type={mediaType} />
				</>
			) : mediaType === "tv" ? (
				<>
					<h2>Similar tvshows</h2>
					<SimilarTvShowsList tv={tv} type={mediaType} />
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
