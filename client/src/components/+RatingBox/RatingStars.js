import React, { useState } from "react";
import uid from "uid";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../../duck/favorite/actions";

import Rating from "react-rating";
import starGrey from "../../assets/images/star-grey.png";
import starYellow from "../../assets/images/star-yellow.png";

const RatingStars = ({ item, userRating, userId }) => {
	const dispatch = useDispatch();
	const [rating, setRating] = useState(0);
	const user = useSelector((state) => state.user);

	const handleRating = (rating) => {
		if (user.isAuthenticated && userId === user.email) {
			dispatch(
				addToFavorite({
					id: item.id ? item.id : uid(10),
					item: item,
					rating: rating,
					userID: userId,
				})
			);
		}
	};

	return (
		<div className='card__rating--star'>
			<Rating
				fractions={2}
				onClick={handleRating}
				onChange={setRating}
				initialRating={userRating ? userRating : rating}
				emptySymbol={
					<img src={starGrey} className='icon' alt='grey empty star' />
				}
				fullSymbol={<img src={starYellow} className='icon' alt='yellow star' />}
			/>
		</div>
	);
};

export default RatingStars;
