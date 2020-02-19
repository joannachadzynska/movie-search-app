import React from "react";
import Spinner from "../+Spinner";

const Ratings = ({ ratings }) => {
	return (
		<div className='ratings'>
			<h4>Ratings</h4>
			<ul>
				{ratings !== undefined ? (
					ratings.map((rating) => (
						<li key={rating.Value}>
							<span>{rating.Source}</span>: {rating.Value}
						</li>
					))
				) : (
					<Spinner />
				)}
			</ul>
		</div>
	);
};

export default Ratings;
