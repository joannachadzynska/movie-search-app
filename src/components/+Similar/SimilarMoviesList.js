import React from "react";
import SimilarMovieItem from "./SimilarMovieItem";

const SimilarMoviesList = ({ movies }) => {
	return (
		<div className='movies'>
			{movies.map((movie) => (
				<SimilarMovieItem key={movie.id} movie={movie} />
			))}
		</div>
	);
};

export default SimilarMoviesList;
