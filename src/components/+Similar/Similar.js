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
	const { loading, similarMovies, tv, currentPage, totalPages } = similar;

	const onPageChange = (page) => {
		if (mediaType === "movie") {
			getSimilarMovies(typeDetailsByMediaType.movie, id, page);
		} else if (mediaType === "tv") {
			getSimilarTvShows(typeDetailsByMediaType.tv, id, page);
		}
	};

	useEffect(() => {
		if (mediaType === "movie") {
			getSimilarMovies(typeDetailsByMediaType.movie, id, 1);
		} else if (mediaType === "tv") {
			getSimilarTvShows(typeDetailsByMediaType.tv, id, 1);
		}
	}, [getSimilarMovies, getSimilarTvShows, id, mediaType]);

	return (
		<div className='similar'>
			<h2>You may also like:</h2>
			{loading ? (
				<Spinner />
			) : mediaType === "movie" ? (
				<>
					<SimilarMoviesList movies={similarMovies} type={mediaType} />
					<Pagination
						onPageChange={onPageChange}
						pagesToShow={5}
						currentPage={currentPage}
						totalPages={totalPages}
					/>
				</>
			) : mediaType === "tv" ? (
				<>
					<SimilarTvShowsList tv={tv} type={mediaType} />
					<Pagination
						onPageChange={onPageChange}
						pagesToShow={5}
						currentPage={currentPage}
						totalPages={totalPages}
					/>
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
