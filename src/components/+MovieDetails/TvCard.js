import React from "react";
import RatingBox from "../+RatingBox";
import { setImgUrl } from "../../utils/utils";
import customPoster from "../../assets/images/customPoster.jpg";

const TvCard = ({
	tv: {
		name,
		first_air_date: released,
		vote_average: rating,
		poster_path: poster,
		overview: plot,
		genres,
		homepage,
		created_by: creators,
		number_of_episodes: episodesNum,
		number_of_seasons: seasonsNum
	},
	tv
}) => {
	const imgUrl = setImgUrl(poster);

	const setTvCreators = () => {
		if (!creators) return;
		let creatorsList = creators
			.map((creator) => creator.name)
			.toString()
			.split(",")
			.join(", ");

		return creatorsList;
	};

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
					<h1>{name}</h1>
					<small>Released Date: {released}</small>
					<br />
					<small>Created by: {setTvCreators()} </small>
					<br />
					<small>
						Seasons: {seasonsNum}, Episodes: {episodesNum}{" "}
					</small>
					<br />
					<hr />
					<RatingBox item={tv} />
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

export default TvCard;
