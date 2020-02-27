import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToFavorite } from "../../duck/favorite/actions";
import "./movie.scss";
import customPoster from "../../assets/images/customPoster.jpg";
import RatingBox from "../+RatingBox";
import { setImgUrl, setProfileImgUrl } from "../../utils/utils";

const Movie = ({
	movie: {
		title,
		id,
		name,
		release_date: release,
		first_air_date: airDate,
		poster_path,
		profile_path,
		media_type: type
	},
	movie,
	getMediaType,
	addToFavorite
}) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = (e) => {
		setIsChecked(e.target.checked);
	};

	let image;
	let cardName;

	const setImgType = () => {
		if (type === "movie") {
			image = setImgUrl(poster_path);
		} else if (type === "tv") {
			image = setImgUrl(poster_path);
		} else if (type === "person") {
			image = setProfileImgUrl(profile_path);
		} else {
			image = customPoster;
		}

		return image;
	};

	const setCardName = () => {
		if (type === "movie") {
			cardName = title;
		} else if (type === "tv" || type === "person") {
			cardName = name;
		} else {
			cardName = "No Name";
		}

		return cardName;
	};

	const setCardText = (type) => {
		switch (type) {
			case "movie":
				return (
					<p className='card__text'>
						Released: {release}, Type: {type}
					</p>
				);
			case "tv":
				return (
					<p className='card__text'>
						Released: {airDate ? airDate : "no info"}, Type: {type}
					</p>
				);

			case "person":
				return <p className='card__text'>Type: {type}</p>;

			default:
				return <p className='card__text'>No info</p>;
		}
	};

	const link = `/details/${id}`;

	return (
		<div className='card'>
			<div className='card-image__container'>
				<Link to={link} onClick={() => getMediaType(type)}>
					<img
						src={
							poster_path === null || profile_path === null
								? customPoster
								: setImgType()
						}
						alt={`The movie titled: ${title}`}
					/>
				</Link>
			</div>

			<div className='card__block'>
				<h4 className='card__title'>{setCardName()}</h4>
				{setCardText(type)}
				<button onClick={() => addToFavorite(movie)}>Add to fav</button>
				<RatingBox
					checked={isChecked}
					handleCheckboxChange={handleCheckboxChange}
				/>
			</div>
		</div>
	);
};

const mapDispatch = (dispatch) => ({
	addToFavorite: (item) => dispatch(addToFavorite(item))
});

export default connect(null, mapDispatch)(Movie);
