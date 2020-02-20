import React, { useState } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../duck/movies/actions";
import Movies from "./Movies";

import CustomSearch from "../+CustomSearch/CustomSearch";
import Pagination from "../+Pagination/Pagination";

const Search = ({ getMovies, totalResults, movies, getMediaType }) => {
	const [searchedValue, setSearchedValue] = useState("");
	const [isSubmited, setIsSubmited] = useState(false);

	const callSearchFunction = (e) => {
		e.preventDefault();
		if (!e.target.search.value) return;
		getMovies(searchedValue, 1);
		setIsSubmited(true);
		e.target.search.value = "";
	};

	return (
		<div className='search'>
			<CustomSearch
				handleSubmit={callSearchFunction}
				handleChange={(e) => setSearchedValue(e.target.value)}
				value={searchedValue}
			/>
			<Movies getMediaType={getMediaType} />
			<div className='search__btns'>
				{isSubmited && (
					<Pagination pageNeighbours={2} searchedValue={searchedValue} />
				)}
				{/* <Pagination pageNeighbours={2} searchedValue={searchedValue} /> */}
			</div>
		</div>
	);
};

const mapState = ({ movies }) => ({
	movies: movies
});

const mapDispatch = (dispatch) => ({
	getMovies: (query, pageNumber) => dispatch(getMovies(query, pageNumber))
});

export default connect(mapState, mapDispatch)(Search);
