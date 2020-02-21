import React from "react";
import customPoster from "../../assets/images/customPoster.jpg";
import { setProfileImgUrl } from "../../utils/utils";

const PersonCard = ({
	card: {
		name,
		birthday,
		place_of_birth: birthPlace,
		profile_path: profile,
		biography,
		popularity,
		known_for_department
	}
}) => {
	const profileImg = setProfileImgUrl(profile);

	return (
		<div className='movie-details__container'>
			<div className='image__container'>
				<div
					className='bg-image'
					style={{
						backgroundImage: `url(${profile ? profileImg : customPoster})`
					}}
				/>
			</div>
			<div className='movie-details__info'>
				<h2>person details</h2>
				<div className='movie-details_box'>
					<h1>{name}</h1>
					<small>
						Birthday: {birthday}, {birthPlace}
					</small>
					<br />
					<small>{known_for_department}</small>
					<br />
					<br />
					<hr />
					{/* <RatingBox /> */}
				</div>
				<h4>{/* <Ratings ratings={ratings} /> */}</h4>
				<p>{biography}</p>
			</div>
		</div>
	);
};

export default PersonCard;
