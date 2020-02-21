import React from "react";
import { connect } from "react-redux";
import Movie from "../../+Movie";
import Spinner from "../../+Spinner";

const ModelsFound = ({ movies, getMediaType, type }) => {
	const { movies: moviesList, loading, errorMessage } = movies;

	return (
		<div className='movies'>
			{loading && !errorMessage ? (
				<Spinner />
			) : errorMessage ? (
				<div className='errorMessage'>{errorMessage}</div>
			) : (
				moviesList.map((movie) => (
					<Movie key={movie.id} movie={movie} getMediaType={getMediaType} />
				))
			)}
		</div>
	);
};

const mapState = ({ movies }) => ({ movies });

export default connect(mapState, null)(ModelsFound);
