import React from "react";
import Card from "../../+Card";

const SimilarTvShowsList = ({ tv, type }) => {
	return (
		<div className='movies'>
			{tv.map((t) => (
				<Card key={t.id} mediaType={t} type={type} />
			))}
		</div>
	);
};

export default SimilarTvShowsList;
