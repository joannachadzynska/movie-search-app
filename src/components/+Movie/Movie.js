import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";

import "./movie.scss";
import customPoster from "../../assets/images/customPoster.jpg";

import RatingBox from "../+RatingBox";

const Movie = ({
	movie: {
		title,
		id,
		release_date: release,
		first_air_date: airDate,
		poster_path,
		media_type: type
	}
}) => {
	const [isChecked, setIsChecked] = useState(false);
	const handleCheckboxChange = (e) => {
		setIsChecked(e.target.checked);
	};

	const imgUrl = `http://image.tmdb.org/t/p/w185${poster_path}`;

	return (
		<div className='card'>
			<div className='card-image__container'>
				<Link to={generatePath("/details/:id", { id })}>
					<img
						src={imgUrl === "N/A" ? customPoster : imgUrl}
						alt={`The movie titled: ${title}`}
					/>
				</Link>
			</div>

			<div className='card__block'>
				<h4 className='card__title'>{title}</h4>
				<p className='card__text'>
					Released: {release ? release : airDate}, Type: {type}
				</p>

				<RatingBox
					checked={isChecked}
					handleCheckboxChange={handleCheckboxChange}
				/>
			</div>
		</div>
	);
};

export default Movie;
