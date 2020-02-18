import React from "react";

const Ratings = ({ ratings }) => {
	return (
		<div className='ratings'>
			<ul>
				{ratings !== undefined ? (
					ratings.map((rating) => (
						<li key={rating.Value}>
							<span>{rating.Source}</span> {rating.Value}
						</li>
					))
				) : (
					<span>loading...</span>
				)}
			</ul>
		</div>
	);
};

export default Ratings;
