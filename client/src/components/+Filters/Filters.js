import React from "react";
import CustomSelect from "../+CustomSelect";

const Filters = ({ items, sortBy, getFilterValue }) => {
	const mediaTypeOptions = ["all", "movie", "tv", "person"];
	const sortOptions = ["best rating", "lowest rating", "year", "name"];

	return (
		<>
			<CustomSelect
				options={mediaTypeOptions}
				name='mediaType'
				id='mediaType'
				handleChange={getFilterValue}
			/>
			<CustomSelect
				options={sortOptions}
				name='sort'
				id='sort'
				handleChange={sortBy}
			/>
		</>
	);
};

export default Filters;
