import React from "react";
import { connect } from "react-redux";
import Movie from "../../+Movie";

const Movies = ({ movies }) => {
	const { movies: moviesList, loading, errorMessage } = movies;

	return (
		<div className='movies'>
			{loading && !errorMessage ? (
				<span>loading...</span>
			) : errorMessage ? (
				<div className='errorMessage'>{errorMessage}</div>
			) : (
				moviesList.map((movie, idx) => (
					<Movie key={`${idx}-${movie.Title}`} movie={movie} />
				))
			)}
		</div>
	);
};

const mapState = ({ movies }) => ({ movies });

export default connect(mapState, null)(Movies);
