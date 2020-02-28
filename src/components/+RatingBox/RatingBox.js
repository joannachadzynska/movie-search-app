import React, { useState } from "react";
import uid from "uid";
import { useDispatch, useSelector } from "react-redux";
import {
	addToFavorite,
	removeFromFavorites
} from "../../duck/favorite/actions";
import {
	addToWatchlist,
	removeFromWatchlist
} from "../../duck/toWatch/actions";
import Rating from "react-rating";
import Checkbox from "../+Checkbox";

const RatingBox = ({ item, userRating }) => {
	const dispatch = useDispatch();
	const [rating, setRating] = useState(0);
	const [isChecked, setIsChecked] = useState(false);

	const handleRating = (rating) => {
		dispatch(
			addToFavorite({
				id: item.id ? item.id : uid(10),
				item: item,
				rating: rating
			})
		);
	};

	const handleCheckboxChange = (e) => {
		setIsChecked(e.target.checked);
	};

	const favorites = useSelector((state) => state.favorites.watched);
	console.log(userRating);

	if (isChecked) {
		dispatch(addToWatchlist({ id: item.id ? item.id : uid(10), item: item }));
	} else {
		dispatch(removeFromWatchlist(item));
	}

	return (
		<div className='card__rating'>
			<Rating
				fractions={2}
				onClick={handleRating}
				onChange={setRating}
				initialRating={userRating ? userRating : rating}
			/>

			{favorites.some((el) => el.rating === userRating) ? (
				<button onClick={() => dispatch(removeFromFavorites(item))}>
					usuń
				</button>
			) : (
				<Checkbox checked={isChecked} onChange={handleCheckboxChange} />
			)}
		</div>
	);
};

export default RatingBox;
