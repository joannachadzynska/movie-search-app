import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomSearch from "../../components/+CustomSearch";
import Movie from "../../components/+Movie";
import { isSearched, isSearchedByType } from "../../utils/utils";

const Favorite = () => {
	const favorites = useSelector((state) => state.favorites.watched);

	const [searchTerm, setSearchTerm] = useState("");
	const [isSelectMedia, setIsSelectMedia] = useState(false);

	const handleSearchTerm = (e) => {
		setIsSelectMedia(false);
		setSearchTerm(e.target.value);
	};

	const submitSearch = (e) => {
		e.preventDefault();
	};

	const selectMediaType = (e) => {
		e.persist();
		setIsSelectMedia(true);
		setSearchTerm(e.target.value);
	};

	const searched = () => {
		if (isSelectMedia) {
			return isSearchedByType(searchTerm);
		} else {
			return isSearched(searchTerm);
		}
	};

	const sortBy = (e) => {
		e.persist();
		console.log(e.target.value);
	};

	// sort by rating
	// console.log(
	// 	favorites.sort((a, b) => b.item.vote_average - a.item.vote_average)
	// );

	// sort by year
	// const years = favorites.map(
	// 	(el) =>
	// 		Date.parse(el.item.first_air_date) || Date.parse(el.item.release_date)
	// );

	// let yearNums = [];
	// for (let date of years) {
	// 	let year = new Date(date).getFullYear();
	// 	if (!isNaN(year)) {
	// 		yearNums.push(year);
	// 	}
	// }

	// console.log(yearNums.sort((a, b) => b - a));

	// sort by title or name

	// const titles = favorites.map((el) => el.item.name || el.item.title);
	// console.log(titles.sort().reverse());

	return (
		<div>
			<h2>Favorite</h2>
			<CustomSearch
				handleChange={handleSearchTerm}
				value={isSelectMedia ? "" : searchTerm}
				handleSubmit={submitSearch}
			/>

			<select name='mediaType' id='mediaType' onChange={selectMediaType}>
				<option defaultValue disabled>
					Select
				</option>
				<option value='movie'>Movie</option>
				<option value='tv'>Tv</option>
				<option value='person'>Person</option>
			</select>

			<select name='sort' id='sort' onChange={sortBy}>
				<option defaultValue disabled>
					Select
				</option>
				<option value='vote_average'>Rating</option>
				<option value='year'>Year</option>
				<option value='title'>Title</option>
				<option value='name'>Name</option>
			</select>

			<div className='movies'>
				{favorites !== undefined &&
					favorites
						.filter(searched())
						.map((fav) => (
							<Movie key={fav.id} movie={fav.item} rating={fav.rating} />
						))}
			</div>
		</div>
	);
};

export default Favorite;
