import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import customPoster from "../../assets/images/customPoster.jpg";
import RatingBox from "../+RatingBox";
import {
	setImgUrl,
	setProfileImgUrl,
	getOnlyYear,
	setRating,
} from "../../utils/utils";
import RatingStars from "../+RatingBox/RatingStars";
import RatingButton from "../+RatingBox/RatingButton";

const Movie = ({
	movie: {
		title,
		id,
		name,
		release_date: release,
		first_air_date: airDate,
		poster_path,
		profile_path,
		media_type: type,
	},
	movie,
	getMediaType,
	rating,
}) => {
	let image;
	let cardName;
	const [selectedItemId, setSelectedItemId] = useState("");
	const favorites = useSelector((state) => state.favorites.watched);
	const watchlist = useSelector((state) => state.watchlist.toWatch);
	const user = useSelector((state) => state.user);

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
					<div className='card__date'>Released: {getOnlyYear(release)}</div>
				);

			case "tv":
				return (
					<div className='card__date'>
						Released: {airDate ? getOnlyYear(airDate) : "no info"}
					</div>
				);

			case "person":
				return <div className='card__date'>Type: {type}</div>;

			default:
				return <div className='card__date'>No info</div>;
		}
	};

	const link = `/details/${id}`;

	const isInWatchlist = watchlist.some((item) => item.id === movie.id);

	return (
		<li className='cards__item'>
			<div className='card'>
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

				<div className='card__block'>
					<div className='card__meta'>
						<div className='card__title'>{setCardName()}</div>

						{setCardText(type)}
					</div>

					<RatingButton
						selectedItemId={selectedItemId}
						setItem={setSelectedItemId}
						isInWatchlist={isInWatchlist}
						item={movie}
					/>

					{/* <RatingBox
						userRating={setRating(favorites, id, rating)}
						userId={user.isAuthenticated ? user.email : null}
						item={movie}
					/> */}
				</div>
				<RatingStars
					userRating={setRating(favorites, id, rating)}
					userId={user.isAuthenticated ? user.email : null}
					item={movie}
				/>
			</div>
		</li>
	);
};

export default Movie;
