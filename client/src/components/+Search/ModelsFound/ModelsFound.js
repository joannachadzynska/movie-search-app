import React from "react";
import { useSelector } from "react-redux";
import Movie from "../../+Movie";
import Spinner from "../../+Spinner";

const ModelsFound = ({ getMediaType }) => {
	const movies = useSelector((state) => state.movies);

	const { movies: moviesList, loading, errorMessage } = movies;

	return (
		<ul className='movies'>
			{loading && !errorMessage ? (
				<Spinner />
			) : errorMessage ? (
				<div className='errorMessage'>{errorMessage}</div>
			) : (
				moviesList.map((movie) => (
					<Movie key={movie.id} movie={movie} getMediaType={getMediaType} />
				))
			)}
		</ul>
	);
};

export default ModelsFound;
