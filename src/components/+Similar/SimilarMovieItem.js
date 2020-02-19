import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";
import customPoster from "../../assets/images/customPoster.jpg";
import RatingBox from "../+RatingBox";

const SimilarMovieItem = ({ movie }) => {
	const {
		title,
		release_date: release,
		overview,
		backdrop_path,
		poster_path,
		id
	} = movie;
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
				<p className='card__text'>Released: {release}, Type:</p>
				{/* <p>{overview}</p> */}
				<RatingBox
					checked={isChecked}
					handleCheckboxChange={handleCheckboxChange}
				/>
			</div>
		</div>
	);
};

export default SimilarMovieItem;
