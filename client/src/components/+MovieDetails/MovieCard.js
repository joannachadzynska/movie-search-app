import React from "react";
import RatingBox from "../+RatingBox/RatingBox";
import customPoster from "../../assets/images/customPoster.jpg";
import { setImgUrl, setRating } from "../../utils/utils";
import { useSelector } from "react-redux";

const MovieCard = ({
	movie: {
		title,
		release_date: released,
		last_air_date: airDate,
		vote_average: rating,
		poster_path: poster,
		overview: plot,
		genres
	},
	crew,
	movie,
	userRating
}) => {
	const favorites = useSelector((state) => state.favorites.watched);

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

	console.log(movie);

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
					<div className='movie-details__details py-1'>
						<h1>{title}</h1>
						<small>Released Date: {released ? released : airDate}</small>
						<small>Director: {setMovieDirector()}</small>
					</div>

					<hr />

					<div className='movie-details__rating py-1'>
						<RatingBox
							item={movie}
							userRating={setRating(favorites, movie.id, userRating)}
						/>
					</div>
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
