import React, { useState } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../duck/movies/actions";
import Movies from "./Movies";

import CustomSearch from "../+CustomSearch/CustomSearch";

const Search = ({ getMovies, totalResults, movies, getMediaType }) => {
	const [pageNum, setPageNum] = useState(1);
	const [searchedValue, setSearchedValue] = useState("");

	const callSearchFunction = (e) => {
		e.preventDefault();
		if (!e.target.search.value) return;
		getMovies(searchedValue, pageNum);
		e.target.search.value = "";
	};

	const nextPage = () => {
		if (!movies.movies.length) return;
		if (pageNum <= Math.ceil(totalResults / 10) - 1) {
			setPageNum(pageNum + 1);
			getMovies(searchedValue, pageNum);
		}
	};

	const previousPage = () => {
		if (!movies.movies.length) return;
		if (pageNum !== 1 && pageNum <= Math.ceil(totalResults / 10)) {
			setPageNum(pageNum - 1);

			getMovies(searchedValue, pageNum);
		}
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
				<button onClick={previousPage}>previous</button>
				<button onClick={nextPage}>next</button>
			</div>
		</div>
	);
};

const mapState = ({ movies }) => ({
	movies: movies
	// pageNumber: movies.pageNumber,
	// totalResults: movies.totalResults
});

const mapDispatch = (dispatch) => ({
	getMovies: (query, pageNumber) => dispatch(getMovies(query, pageNumber))
});

export default connect(mapState, mapDispatch)(Search);
