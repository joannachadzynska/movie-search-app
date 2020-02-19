import React from "react";
import { Link, generatePath } from "react-router-dom";
import RatingWidget from "../+RatingWidget/RatingWidget";
import { FaRegCheckSquare } from "react-icons/fa";
import customPoster from "../../assets/images/customPoster.jpg";

const Movie = ({
	movie: { Poster: poster, Title: title, imdbID: id, Year: year }
}) => {
	return (
		<div className='movie__container'>
			<div className='movie-image__container'>
				<Link to={generatePath("/details/:id", { id })}>
					<img
						src={poster === "N/A" ? customPoster : poster}
						alt={`The movie titled: ${title}`}
					/>
				</Link>
			</div>

			<div className='movie__info'>
				<h4>{title}</h4>
				<p>({year})</p>
			</div>
			<div className='movie__rating'>
				<RatingWidget />
				<label>
					AddToWatchlist
					<input type='checkbox' name='add-to-watch' id='add-to-watch' />
					<span></span>
				</label>
			</div>
		</div>
	);
};

export default Movie;
