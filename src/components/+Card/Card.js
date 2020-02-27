import React from "react";
import { Link, generatePath } from "react-router-dom";
import RatingBox from "../+RatingBox";
import { setImgUrl } from "../../utils/utils";
import customPoster from "../../assets/images/customPoster.jpg";

const Card = ({ mediaType, type, getMediaType, isInSearchComponent }) => {
	const {
		id,
		poster_path: poster,
		title,
		release_date: release,
		first_air_date: airDate
	} = mediaType;

	const imgUrl = setImgUrl(poster);

	return (
		<div className='card'>
			<div className='card-image__container'>
				<Link
					to={generatePath("/details/:id", { id })}
					onClick={
						isInSearchComponent
							? () => getMediaType(type)
							: () => console.log("similar item")
					}>
					<img
						src={poster === null ? customPoster : imgUrl}
						alt={`The movie titled: ${title}`}
					/>
				</Link>
			</div>

			<div className='card__block'>
				<h4 className='card__title'>{title}</h4>
				<p className='card__text'>
					Released: {release ? release : airDate}, Type: {type}
				</p>

				<RatingBox item={mediaType} />
			</div>
		</div>
	);
};

export default Card;
