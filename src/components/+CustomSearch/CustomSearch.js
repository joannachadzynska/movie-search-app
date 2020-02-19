import React from "react";
import { FaSearch } from "react-icons/fa";

const CustomSearch = ({ handleSubmit, label, handleChange, ...otherProps }) => {
	return (
		<form className='search__form' onSubmit={handleSubmit}>
			<input
				type='text'
				name='search'
				placeholder='Enter search term'
				onChange={handleChange}
				{...otherProps}
			/>

			<button>
				<FaSearch />
			</button>
		</form>
	);
};

export default CustomSearch;
