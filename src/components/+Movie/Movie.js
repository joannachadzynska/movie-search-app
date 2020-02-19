import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";
import RatingWidget from "../+RatingWidget/RatingWidget";
import "./movie.scss";
import customPoster from "../../assets/images/customPoster.jpg";
import Checkbox from "../+Checkbox/Checkbox";

const Movie = ({
	movie: { Poster: poster, Title: title, imdbID: id, Year: year, Type: type }
}) => {
	const [isChecked, setIsChecked] = useState(false);
	const handleCheckboxChange = (e) => {
		setIsChecked(e.target.checked);
	};
	console.log(isChecked);

	return (
		<div className='card'>
			<div className='card-image__container'>
				<Link to={generatePath("/details/:id", { id })}>
					<img
						src={poster === "N/A" ? customPoster : poster}
						alt={`The movie titled: ${title}`}
					/>
				</Link>
			</div>

			<div className='card__block'>
				<h4 className='card__title'>{title}</h4>
				<p className='card__text'>
					Released: {year}, Type: {type}
				</p>

				<div className='card__rating'>
					<RatingWidget />
					<Checkbox checked={isChecked} onChange={handleCheckboxChange} />
				</div>
			</div>
		</div>
	);
};

export default Movie;
