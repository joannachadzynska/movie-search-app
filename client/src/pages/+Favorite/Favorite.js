import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomSearch from "../../components/+CustomSearch";
import Movie from "../../components/+Movie";
import {
	isSearched,
	isSearchedByType,
	sortByRating,
	sortByYear,
	sortByRatingReverse,
	sortByName
} from "../../utils/utils";
import { Redirect } from "react-router-dom";
import Filters from "../../components/+Filters";

const Favorite = () => {
	const favorites = useSelector((state) => state.favorites.watched);
	const user = useSelector((state) => state.user);

	const [searchTerm, setSearchTerm] = useState("");
	const [mediaTypeSearch, setMediaTypeSearch] = useState("");
	const [newFavorites, setNewFavorites] = useState(favorites);

	const handleSearchTerm = (e) => {
		setSearchTerm(e.target.value);
		const searched = favorites.filter(isSearched(e.target.value));
		setNewFavorites(searched);
	};

	const submitSearch = (e) => {
		e.preventDefault();
	};

	const getFilterValue = (e) => {
		setMediaTypeSearch(e.target.value);
		let searched;
		if (e.target.value === "all") {
			searched = favorites;
		} else {
			searched = favorites.filter(isSearchedByType(e.target.value));
		}
		setNewFavorites(searched);
	};

	const sortBy = (e) => {
		const { value } = e.target;
		let sorted = [];

		if (value === "best rating") {
			sorted = sortByRating(newFavorites);
		} else if (value === "lowest rating") {
			sorted = sortByRatingReverse(newFavorites);
		} else if (value === "year") {
			sorted = sortByYear(newFavorites, mediaTypeSearch);
		} else if (value === "name") {
			sorted = newFavorites;
		} else {
			sorted = newFavorites;
		}

		setNewFavorites(sorted);
	};

	return (
		<div className='wrapper'>
			<h2>Favorite</h2>
			<CustomSearch
				handleChange={handleSearchTerm}
				value={searchTerm}
				handleSubmit={submitSearch}
			/>

			<Filters
				items={favorites}
				sortBy={sortBy}
				getFilterValue={getFilterValue}
			/>

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
						newFavorites.map((fav) => (
							<Movie key={fav.id} movie={fav.item} rating={fav.rating} />
						))}
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
