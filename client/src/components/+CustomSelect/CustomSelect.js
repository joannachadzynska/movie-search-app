import React from "react";

const CustomSelect = ({ handleChange, options, ...props }) => {
	return (
		<select onChange={handleChange} {...props}>
			<option defaultValue disabled>
				Select
			</option>
			{options.map((el) => (
				<option value={el} key={el}>
					{el.charAt(0).toUpperCase() + el.slice(1)}
				</option>
			))}
		</select>
	);
};

export default CustomSelect;
