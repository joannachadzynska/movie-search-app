import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../duck/movies/actions";
import {
	getSimilarMovies,
	getSimilarTvShows
} from "../../duck/similar/actions";

import "./pagination.scss";
import { typeDetailsByMediaType } from "../../utils/config";

const Pagination = ({
	searchedValue,
	pageNeighbours = 0,
	totalPages,
	currentPage,
	similarTotalPages,
	similarCurrentPage,
	getMovies,
	getSimilarMovies,
	getSimilarTvShows,
	isInSimilar,
	type: mediaType
}) => {
	// const pageneighbours =
	// 	typeof pageNeighbours === "number"
	// 		? Math.max(0, Math.min(pageNeighbours, 2))
	// 		: 0;
	const [startIndex, setStartIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(4);
	const pageNumbers = [];

	if (totalPages !== null) {
		for (let i = 1; i <= totalPages || i <= similarTotalPages; i++) {
			pageNumbers.push(i);
		}
	}

	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		});
		return ref.current;
	}

	const prevStartIndex = usePrevious(startIndex);
	const prevEndIndex = usePrevious(endIndex);

	const first = () => {
		if (isInSimilar) {
			if (mediaType === "movie") {
				getSimilarMovies(typeDetailsByMediaType.movie, searchedValue, 1);
			} else {
				getSimilarTvShows(typeDetailsByMediaType.movie, searchedValue, 1);
			}
		} else {
			getMovies(searchedValue, 1);
		}
	};

	// const pageNumber = (pageNum) => {
	// 	if (isInSimilar) {
	// 		if (mediaType === "movie") {
	// 			getSimilarMovies(typeDetailsByMediaType.movie, searchedValue, pageNum);
	// 		} else {
	// 			getSimilarTvShows(typeDetailsByMediaType.movie, searchedValue, pageNum);
	// 		}
	// 	} else {
	// 		getMovies(searchedValue, pageNum);
	// 	}
	// };

	const previous = () => {
		if (currentPage > 4) {
			setStartIndex(prevStartIndex - 5);
			setEndIndex(prevEndIndex - 5);
		}

		if (isInSimilar) {
			if (mediaType === "movie") {
				getSimilarMovies(
					typeDetailsByMediaType.movie,
					searchedValue,
					similarCurrentPage - 1
				);
			} else {
				getSimilarTvShows(
					typeDetailsByMediaType.movie,
					searchedValue,
					similarCurrentPage - 1
				);
			}
		} else {
			getMovies(searchedValue, currentPage - 1);
		}
	};

	const next = () => {
		if (isInSimilar) {
			if (mediaType === "movie") {
				getSimilarMovies(
					typeDetailsByMediaType.movie,
					searchedValue,
					similarCurrentPage + 1
				);
			} else {
				getSimilarTvShows(
					typeDetailsByMediaType.movie,
					searchedValue,
					similarCurrentPage + 1
				);
			}
		} else {
			getMovies(searchedValue, currentPage + 1);
		}
	};

	const last = () => {
		if (isInSimilar) {
			if (mediaType === "movie") {
				getSimilarMovies(
					typeDetailsByMediaType.movie,
					searchedValue,
					similarTotalPages
				);
			} else {
				getSimilarTvShows(
					typeDetailsByMediaType.movie,
					searchedValue,
					similarTotalPages
				);
			}
		} else {
			getMovies(searchedValue, totalPages);
		}
	};

	return (
		<nav className='search__btns'>
			<ul className='pagination'>
				<li>
					<button
						onClick={first}
						className={currentPage === 1 ? "disabled" : ""}>
						1
					</button>
				</li>
				<li>
					<button
						onClick={previous}
						className={
							currentPage === 1 || similarCurrentPage === 1 ? "disabled" : ""
						}>
						Previous
					</button>
				</li>

				{totalPages !== null || similarTotalPages !== null
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
						{totalPages}
					</button>
				</li>
			</ul>
		</nav>
	);
};

const mapState = ({ movies, similar }) => ({
	movies: movies,
	totalPages: movies.totalPages,
	currentPage: movies.currentPage,
	similarTotalPages: similar.totalPages,
	similarCurrentPage: similar.currentPage
});

const mapDispatch = (dispatch) => ({
	getMovies: (query, pageNumber) => dispatch(getMovies(query, pageNumber)),
	getSimilarMovies: (typ, movieId, page) =>
		dispatch(getSimilarMovies(typ, movieId, page)),
	getSimilarTvShows: (typ, tvId, page) =>
		dispatch(getSimilarTvShows(typ, tvId, page))
});

export default connect(mapState, mapDispatch)(Pagination);
