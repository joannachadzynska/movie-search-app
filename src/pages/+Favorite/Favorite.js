import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomSearch from "../../components/+CustomSearch";
import Movie from "../../components/+Movie";

const Favorite = () => {
	const favorites = useSelector((state) => state.favorites.watched);
	const [searchTerm, setSearchTerm] = useState("");
	const handleSearchTerm = (e) => {
		setSearchTerm(e.target.value);
	};

	const submitSearch = (e) => {
		e.preventDefault();
	};

	console.log(favorites);

	return (
		<div>
			<h2>Favorite</h2>
			<CustomSearch
				handleChange={handleSearchTerm}
				handleSubmit={submitSearch}
				value={searchTerm}
			/>

			<div className='movies'>
				{favorites !== undefined &&
					favorites.map((fav) => (
						<Movie key={fav.id} movie={fav.item} rating={fav.rating} />
					))}
			</div>
		</div>
	);
};

export default Favorite;
