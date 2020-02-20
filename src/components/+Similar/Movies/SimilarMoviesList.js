import React from "react";
import Card from "../../+Card";

const SimilarMoviesList = ({ movies, type }) => {
	return (
		<div className='movies'>
			{movies.map((movie) => (
				<Card key={movie.id} mediaType={movie} type={type} />
			))}
		</div>
	);
};

export default SimilarMoviesList;
