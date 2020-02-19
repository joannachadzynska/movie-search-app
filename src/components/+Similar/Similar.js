import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSimilarMovies } from "../../duck/similar/actions";
import Spinner from "../+Spinner";
import SimilarMoviesList from "./SimilarMoviesList";

const Similar = ({ id, getSimilarMovies, similar }) => {
	const [pageNum, setPageNum] = useState(1);

	useEffect(() => {
		getSimilarMovies(id, pageNum);
	}, [getSimilarMovies, id, pageNum]);

	const { loading, similarMovies, totalPages, totalResults } = similar;

	return (
		<div className='similar'>
			<h2>Similar movies</h2>
			{loading ? <Spinner /> : <SimilarMoviesList movies={similarMovies} />}
		</div>
	);
};

const mapState = ({ similar }) => ({ similar });

const mapDispatch = (dispatch) => ({
	getSimilarMovies: (movieId, page) => dispatch(getSimilarMovies(movieId, page))
});

export default connect(mapState, mapDispatch)(Similar);
