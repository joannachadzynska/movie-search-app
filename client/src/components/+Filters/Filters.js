import React from "react";
import CustomSelect from "../+CustomSelect";

const Filters = ({ setSearchTerm, setIsSelectMedia, items }) => {
	const mediaTypeOptions = ["movie", "tv", "person"];
	const sortOptions = ["rating", "year", "title", "name"];
	// const [searchTerm, setSearchTerm] = useState("");
	// const [isSelectMedia, setIsSelectMedia] = useState(false);

	const selectMediaType = (e) => {
		e.persist();
		setIsSelectMedia(true);
		setSearchTerm(e.target.value);
	};

	const sortByRating = () => {
		// sort by rating

		console.log(items.map((el) => el.item.vote_average));

		items.sort((a, b) => b.item.vote_average - a.item.vote_average);
	};

	const sortBy = (e) => {
		e.persist();
		const { value } = e.target;
		if (value === "rating") {
			sortByRating();
		}
	};

	return (
		<>
			<CustomSelect
				options={mediaTypeOptions}
				name='mediaType'
				id='mediaType'
				handleChange={selectMediaType}
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
