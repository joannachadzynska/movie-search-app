import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../../duck/movies/actions";

const Pagination = ({
	searchedValue,
	// pageNeighbours = 0,
	totalPages,
	currentPage,
	getMovies
}) => {
	// const pageneighbours =
	// 	typeof pageNeighbours === "number"
	// 		? Math.max(0, Math.min(pageNeighbours, 2))
	// 		: 0;

	const pageNumbers = [];

	if (totalPages !== null) {
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}
	}

	const first = () => getMovies(searchedValue, 1);

	const previous = () => getMovies(searchedValue, currentPage - 1);

	const next = () => getMovies(searchedValue, currentPage + 1);

	const last = () => getMovies(searchedValue, totalPages);

	return (
		<nav className='search__btns'>
			<ul className='pagination'>
				<li>
					<button
						onClick={first}
						className={currentPage === 1 ? "disabled" : ""}>
						First
					</button>
				</li>
				<li>
					<button
						onClick={previous}
						className={currentPage === 1 ? "disabled" : ""}>
						Previous
					</button>
				</li>

				{totalPages !== null
					? pageNumbers.map((page) => (
							<li key={page}>
								<button
									onClick={() => getMovies(searchedValue, page)}
									className={currentPage === page ? "active" : ""}>
									{page}
								</button>
							</li>
					  ))
					: null}

				<li>
					<button
						onClick={next}
						className={currentPage === totalPages ? "disabled" : ""}>
						Next
					</button>
				</li>
				<li>
					<button
						onClick={last}
						className={currentPage === totalPages ? "disabled" : ""}>
						Last
					</button>
				</li>
			</ul>
		</nav>
	);
};

const mapState = ({ movies, similar }) => ({
	movies: movies,
	totalPages: movies.totalPages,
	currentPage: movies.currentPage
});

const mapDispatch = (dispatch) => ({
	getMovies: (query, pageNumber) => dispatch(getMovies(query, pageNumber))
});

export default connect(mapState, mapDispatch)(Pagination);
