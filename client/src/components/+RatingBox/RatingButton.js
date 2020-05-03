import React, { useState } from "react";
import uid from "uid";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../duck/favorite/actions";
import {
	addToWatchlist,
	removeFromWatchlist,
} from "../../duck/toWatch/actions";

const RatingButton = ({ item, setItem, isInWatchlist }) => {
	const dispatch = useDispatch();

	const handleCheckboxChange = (item) => {
		dispatch(addToWatchlist({ id: item.id ? item.id : uid(10), item: item }));
		setItem(item.id);
	};

	const handleRemove = (item) => {
		dispatch(removeFromWatchlist(item));
		dispatch(removeFromFavorites(item));
	};

	return (
		<>
			{isInWatchlist ? (
				<button
					className='card__button'
					name='delete'
					onClick={() => handleRemove(item)}
					aria-label='remove button'>
					-
				</button>
			) : (
				<button
					className='card__button'
					name='add'
					onClick={() => handleCheckboxChange(item)}
					aria-label='add button'>
					+
				</button>
			)}
		</>
	);
};

export default RatingButton;
