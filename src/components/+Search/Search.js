import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../duck/movies/actions";
import ModelsFound from "./ModelsFound";
import CustomSearch from "../+CustomSearch/CustomSearch";
import Pagination from "../+Pagination/Pagination";

const Search = ({
	getMovies,
	getMediaType,
	mediaType,
	currentPage,
	totalPages
}) => {
	const [searchedValue, setSearchedValue] = useState("");
	const [isSubmited, setIsSubmited] = useState(false);

	const callSearchFunction = (e) => {
		e.preventDefault();
		if (!e.target.search.value) return;
		getMovies(searchedValue, 1);
		setIsSubmited(true);
		e.target.search.value = "";
	};

	const onPageChange = (page) => {
		getMovies(searchedValue, page);
	};

	return (
		<div className='search wrapper'>
			<CustomSearch
				handleSubmit={callSearchFunction}
				handleChange={(e) => setSearchedValue(e.target.value)}
				value={searchedValue}
			/>

			<ModelsFound getMediaType={getMediaType} type={mediaType} />

			{isSubmited && (
				<Pagination
					pagesToShow={5}
					totalPages={totalPages}
					currentPage={currentPage}
					onPageChange={onPageChange}
				/>
			)}
		</div>
	);
};

const mapState = ({ movies }) => ({
	totalPages: movies.totalPages,
	currentPage: movies.currentPage
});

const mapDispatch = (dispatch) => ({
	getMovies: (query, pageNumber) => dispatch(getMovies(query, pageNumber))
});

export default connect(mapState, mapDispatch)(Search);
