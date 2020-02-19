import React from "react";
import Ratings from "./Ratings";
import RatingBox from "../+RatingBox/RatingBox";

const MovieCard = ({
	movie: {
		Title: title,
		Released: released,
		Ratings: ratings,
		Poster: poster,
		Plot: plot,
		Genre: genre,
		Director: director
	}
}) => {
	return (
		<div className='movie-details__container'>
			<div className='image__container'>
				<div
					className='bg-image'
					style={{ backgroundImage: `url(${poster})` }}
				/>
			</div>
			<div className='movie-details__info'>
				<h2>movie details</h2>
				<div className='movie-details_box'>
					<h1>{title}</h1>
					<small>Released Date: {released}</small>
					<br />
					<small>Director: {director}</small>
					<br />
					<br />
					<hr />
					<RatingBox />
				</div>
				<h4>
					<Ratings ratings={ratings} />
				</h4>
				<p>{plot && plot.substr(0, 350)}</p>
				<div className='movie-details__tags-container'>
					{genre &&
						genre.split(", ").map((gen) => <span key={gen}>{gen}</span>)}
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
