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
				className='search__input'
				{...otherProps}
			/>

			<button className='search__btn'>
				<FaSearch size='1.5rem' />
			</button>
		</form>
	);
};

export default CustomSearch;
