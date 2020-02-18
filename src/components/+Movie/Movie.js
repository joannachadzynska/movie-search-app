import React from "react";
import { Link, generatePath } from "react-router-dom";

const Movie = ({
	movie: { Poster: poster, Title: title, imdbID: id, Year: year }
}) => {
	return (
		<div className='movie'>
			<h2>{title}</h2>
			<div>
				<img src={poster} alt={`The movie titled: ${title}`} />
			</div>
			<p>({year})</p>
			<Link to={generatePath("/details/:id", { id })}>Details</Link>
		</div>
	);
};

export default Movie;
