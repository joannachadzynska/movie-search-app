import React, { useState } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../duck/movies/actions";
import Movies from "./Movies";
import { typeMapping } from "../../utils/config";

const Search = ({ getMovies, pageNumber, totalResults, movies }) => {
	const [pageNum, setPageNum] = useState(1);
	const [searchedValue, setSearchedValue] = useState("");

	const callSearchFunction = (e) => {
		e.preventDefault();
		if (!e.target.search.value) return;
		getMovies(searchedValue, typeMapping.search, pageNum);
		e.target.search.value = "";
	};

	const nextPage = () => {
		if (!movies.movies.length) return;
		if (pageNum <= Math.ceil(totalResults / 10) - 1) {
			setPageNum(pageNum + 1);
			getMovies(searchedValue, typeMapping.search, pageNum);
		}
	};

	const previousPage = () => {
		if (!movies.movies.length) return;
		if (pageNum !== 1 && pageNum <= Math.ceil(totalResults / 10)) {
			setPageNum(pageNum - 1);
			console.log(pageNum);

			getMovies(searchedValue, typeMapping.search, pageNum);
		}
	};

	return (
		<div className='form'>
			<form className='search' onSubmit={callSearchFunction}>
				<input
					type='text'
					name='search'
					value={searchedValue}
					onChange={(e) => setSearchedValue(e.target.value)}
				/>
				<button>Search</button>
			</form>
			<Movies />
			<button onClick={previousPage}>previous</button>
			<button onClick={nextPage}>next</button>
		</div>
	);
};

const mapState = ({ movies }) => ({
	movies: movies,
	pageNumber: movies.pageNumber,
	totalResults: movies.totalResults
});

const mapDispatch = (dispatch) => ({
	getMovies: (query, type, pageNumber) =>
		dispatch(getMovies(query, type, pageNumber))
});

export default connect(mapState, mapDispatch)(Search);
