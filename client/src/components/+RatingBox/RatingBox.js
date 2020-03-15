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
import { FaTrashAlt } from "react-icons/fa";
import starGrey from "../../assets/images/star-grey.png";
import starYellow from "../../assets/images/star-yellow.png";

const RatingBox = ({ item, userRating, userId }) => {
	const dispatch = useDispatch();
	const [rating, setRating] = useState(0);
	const [isChecked, setIsChecked] = useState(false);
	const user = useSelector((state) => state.user);

	const handleRating = (rating) => {
		if (user.isAuthenticated && userId === user.email) {
			dispatch(
				addToFavorite({
					id: item.id ? item.id : uid(10),
					item: item,
					rating: rating,
					userID: userId
				})
			);
		}
	};

	const handleCheckboxChange = (e) => {
		setIsChecked(e.target.checked);
	};

	const favorites = useSelector((state) => state.favorites.watched);

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
				emptySymbol={
					<img src={starGrey} className='icon' alt='grey empty star' />
				}
				fullSymbol={<img src={starYellow} className='icon' alt='yellow star' />}
			/>

			{favorites.some((el) => el.rating === userRating) ? (
				<button
					onClick={() => dispatch(removeFromFavorites(item))}
					style={{ border: "none" }}
					aria-label='remove button with trash icon inside'>
					<FaTrashAlt size='1.5em' className='delete-btn' />
				</button>
			) : (
				<Checkbox checked={isChecked} onChange={handleCheckboxChange} />
			)}
		</div>
	);
};

export default RatingBox;
