import React from "react";
import RatingWidget from "../+RatingWidget";
import Checkbox from "../+Checkbox";

const RatingBox = ({ checked, handleCheckboxChange }) => {
	return (
		<div className='card__rating'>
			<RatingWidget />
			<Checkbox checked={checked} onChange={handleCheckboxChange} />
		</div>
	);
};

export default RatingBox;
