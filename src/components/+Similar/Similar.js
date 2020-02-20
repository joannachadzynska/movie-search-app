import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
	getSimilarMovies,
	getSimilarTvShows
} from "../../duck/similar/actions";
import Spinner from "../+Spinner";
import SimilarMoviesList from "./SimilarMoviesList";
import { typeDetailsByMediaType } from "../../utils/config";

const Similar = ({ id, getSimilarMovies, similar, mediaType }) => {
	const [pageNum, setPageNum] = useState(1);

	useEffect(() => {
		if (mediaType === "movie") {
			getSimilarMovies(typeDetailsByMediaType.movie, id, pageNum);
		} else if (mediaType === "tv") {
			getSimilarTvShows(typeDetailsByMediaType.tv, id, pageNum);
		}
	}, [getSimilarMovies, id, pageNum, mediaType]);

	const { loading, similarMovies, tv } = similar;

	return (
		<div className='similar'>
			<h2>Similar {mediaType}</h2>
			{loading ? (
				<Spinner />
			) : mediaType === "movie" ? (
				<SimilarMoviesList movies={similarMovies} />
			) : mediaType === "tv" ? (
				<h1>tv similar</h1>
			) : mediaType === "person" ? (
				<h1>person similar</h1>
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
