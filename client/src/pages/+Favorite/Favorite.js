import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomSearch from "../../components/+CustomSearch";
import Movie from "../../components/+Movie";
import { isSearched, isSearchedByType } from "../../utils/utils";
import { Redirect } from "react-router-dom";
import Filters from "../../components/+Filters";

const Favorite = () => {
	const favorites = useSelector((state) => state.favorites.watched);
	const user = useSelector((state) => state.user);
	// const { email } = user.data;
	const [searchTerm, setSearchTerm] = useState("");
	const [isSelectMedia, setIsSelectMedia] = useState(false);

	const handleSearchTerm = (e) => {
		setIsSelectMedia(false);
		setSearchTerm(e.target.value);
	};

	const submitSearch = (e) => {
		e.preventDefault();
	};

	const searched = () => {
		if (isSelectMedia) {
			return isSearchedByType(searchTerm);
		} else {
			return isSearched(searchTerm);
		}
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
	const sortByRating = () => {
		// sort by rating

		console.log(favorites.map((el) => el.item.vote_average));

		favorites.sort((a, b) => b.item.vote_average - a.item.vote_average);
	};

	const sortBy = (e) => {
		e.persist();
		const { value } = e.target;
		if (value === "rating") {
			sortByRating();
		}
	};

	return (
		<div className='wrapper'>
			<h2>Favorite</h2>
			<CustomSearch
				handleChange={handleSearchTerm}
				value={isSelectMedia ? "" : searchTerm}
				handleSubmit={submitSearch}
			/>

			<Filters
				setSearchTerm={setSearchTerm}
				setIsSelectMedia={setIsSelectMedia}
				items={favorites}
			/>
			{/* 
			<select name='sort' id='sort' onChange={sortBy}>
				<option defaultValue disabled>
					Select
				</option>
				<option value='vote_average'>Rating</option>
				<option value='year'>Year</option>
				<option value='title'>Title</option>
				<option value='name'>Name</option>
			</select> */}

			{user.isAuthenticated ? (
				<div
					className='movies'
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "100%"
					}}>
					{favorites !== undefined &&
						favorites
							.filter(searched())
							.map((fav) => (
								<Movie key={fav.id} movie={fav.item} rating={fav.rating} />
							))
							.sort()}
				</div>
			) : (
				<Redirect to='/sign-in'>
					Please sign in to add items to favorites
				</Redirect>
			)}
		</div>
	);
};

export default Favorite;
