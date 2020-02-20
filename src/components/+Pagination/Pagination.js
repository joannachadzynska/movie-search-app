import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../../duck/movies/actions";
import "./pagination.scss";

const Pagination = ({
	totalPages,
	pageNeighbours = 0,
	searchedValue,
	currentPage,
	getMovies
}) => {
	const pageNumbers = [];

	if (totalPages !== null) {
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}
	}

	return (
		<nav>
			<ul className='pagination'>
				<li>
					<button
						onClick={() => getMovies(searchedValue, 1)}
						className={currentPage === 1 ? "disabled" : ""}>
						First
					</button>
				</li>
				<li>
					<button
						onClick={() => getMovies(searchedValue, currentPage - 1)}
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
						onClick={() => getMovies(searchedValue, currentPage + 1)}
						className={currentPage === totalPages ? "disabled" : ""}>
						Next
					</button>
				</li>
				<li>
					<button
						onClick={() => getMovies(searchedValue, totalPages)}
						className={currentPage === totalPages ? "disabled" : ""}>
						Last
					</button>
				</li>
			</ul>
		</nav>
	);
};

const mapState = ({ movies }) => ({
	movies: movies,
	totalPages: movies.totalPages,
	totalResults: movies.totalResults,
	currentPage: movies.currentPage
});

const mapDispatch = (dispatch) => ({
	getMovies: (query, pageNumber) => dispatch(getMovies(query, pageNumber))
});

export default connect(mapState, mapDispatch)(Pagination);
