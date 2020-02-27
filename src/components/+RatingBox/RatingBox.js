import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../duck/favorite/actions";
import {
	addToWatchlist,
	removeFromWatchlist
} from "../../duck/toWatch/actions";
import Rating from "react-rating";
import Checkbox from "../+Checkbox";

const RatingBox = ({ item }) => {
	const dispatch = useDispatch();
	const [rating, setRating] = useState(0);
	const [isChecked, setIsChecked] = useState(false);

	const handleRating = (rating) => {
		dispatch(addToFavorite({ id: item.id, item: item, rating: rating }));
	};

	const handleCheckboxChange = (e) => {
		setIsChecked(e.target.checked);
		// dispatch(addToWatchlist({ id: item.id, item: item }))
	};

	if (isChecked) {
		dispatch(addToWatchlist({ id: item.id, item: item }));
	} else {
		dispatch(removeFromWatchlist(item));
	}

	return (
		<div className='card__rating'>
			<Rating
				fractions={2}
				onClick={handleRating}
				onChange={setRating}
				initialRating={rating}
			/>
			<Checkbox checked={isChecked} onChange={handleCheckboxChange} />
		</div>
	);
};

export default RatingBox;
