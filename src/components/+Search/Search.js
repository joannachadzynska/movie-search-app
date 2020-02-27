import React, { useState } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../duck/movies/actions";
import ModelsFound from "./ModelsFound";
import CustomSearch from "../+CustomSearch/CustomSearch";
import Pagination from "../+Pagination/Pagination";

const Search = ({ getMovies, getMediaType, mediaType }) => {
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

			<ModelsFound getMediaType={getMediaType} type={mediaType} />

			{isSubmited && (
				<Pagination searchedValue={searchedValue} pageNeighbours={1} />
			)}
		</div>
	);
};

const mapDispatch = (dispatch) => ({
	getMovies: (query, pageNumber) => dispatch(getMovies(query, pageNumber))
});

export default connect(null, mapDispatch)(Search);
