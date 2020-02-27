import React from "react";
import RatingBox from "../+RatingBox/RatingBox";
import customPoster from "../../assets/images/customPoster.jpg";
import { setImgUrl } from "../../utils/utils";

const MovieCard = ({
	movie: {
		name: title,
		release_date: released,
		last_air_date: airDate,
		vote_average: rating,
		poster_path: poster,
		overview: plot,
		genres
	},
	crew,
	movie
}) => {
	const imgUrl = setImgUrl(poster);

	const setMovieDirector = () => {
		if (crew === undefined) return;
		let directors = crew.filter((person) => person.job === "Director");
		let directorName = directors
			.map((dir) => dir.name)
			.toString()
			.split(",")
			.join(", ");

		return directorName;
	};

	const movieItem = { movie, crew };

	return (
		<div className='movie-details__container'>
			<div className='image__container'>
				<div
					className='bg-image'
					style={{
						backgroundImage: `url(${poster ? imgUrl : customPoster})`
					}}
				/>
			</div>
			<div className='movie-details__info'>
				<h2>movie details</h2>
				<div className='movie-details_box'>
					<h1>{title}</h1>
					<small>Released Date: {released ? released : airDate}</small>
					<br />
					<small>Director: {setMovieDirector()}</small>
					<br />
					<br />
					<hr />
					<RatingBox item={movieItem} />
				</div>
				<h4>Rating: {rating} / 10</h4>
				<p>{plot && plot.substr(0, 350)}</p>
				<div className='movie-details__tags-container'>
					{genres && genres.map((gen) => <span key={gen.id}>{gen.name}</span>)}
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
