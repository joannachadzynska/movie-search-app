import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../duck/movies/actions";
import PageNumber from "./PageNumber";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

// function* range(start, end) {
// 	while (start < end) {
// 		yield start;
// 		start += 1;
// 	}
// }

const range = (from, to, step = 1) => {
	let i = from;
	const range = [];

	while (i <= to) {
		range.push(i);
		i += step;
	}

	return range;
};

const Pagination = ({
	searchedValue,
	totalPages,
	currentPage,
	getMovies,
	onChangePage,
	pageNeighbours
}) => {
	const [activePage, setActivePAge] = useState(1);
	const pageNeighboursNum =
		typeof pageNeighbours === "number"
			? Math.max(0, Math.min(pageNeighbours, 2))
			: 0;

	const pageNumbers = Array.from({ length: totalPages }, (v, k) => k + 1);

	const goToPage = (page) => {
		const currentPage = Math.max(0, Math.min(page, totalPages));
		const paginationData = {
			currentPage,
			totalPages
		};

		setActivePAge(page);
	};

	const first = () => getMovies(searchedValue, 1);

	const previous = () => {
		goToPage(activePage, pageNeighbours * 2 - 1);
		getMovies(searchedValue, currentPage - 1);
	};

	const next = () => {
		goToPage(activePage - pageNeighbours * 2 + 1);
		getMovies(searchedValue, currentPage + 1);
	};

	const last = () => getMovies(searchedValue, totalPages);

	const current = (e, page) => {
		e.preventDefault();
		goToPage(page);
		getMovies(searchedValue, page);
	};

	const fetchPageNumbers = () => {
		const totalNumbers = pageNeighboursNum * 2 + 1;
		const totalBlocks = totalNumbers + 1;

		if (totalPages > totalBlocks) {
			let pages = [];

			const leftBound = currentPage - pageNeighboursNum;
			const rightBound = currentPage + pageNeighboursNum;
			const beforeLastPage = totalPages - 1;

			const startPage = leftBound > 2 ? leftBound : 2;
			const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

			pages = range(startPage, endPage);

			const pagesCount = pages.length;
			const singleSpillOffset = totalNumbers - pagesCount - 1;

			const leftSpill = startPage > 2;
			const rightSpill = endPage < beforeLastPage;

			const leftSpillPage = LEFT_PAGE;
			const rightSpillPage = RIGHT_PAGE;

			if (leftSpill && !rightSpill) {
				const extraPages = range(startPage - singleSpillOffset, startPage - 1);
				pages = [leftSpillPage, ...extraPages, ...pages];
			} else if (!leftSpill && rightSpill) {
				const extraPages = range(endPage + 1, endPage + singleSpillOffset);
				pages = [...pages, ...extraPages, rightSpillPage];
			} else if (leftSpill && rightSpill) {
				pages = [leftSpillPage, ...pages, rightSpillPage];
			}

			return [1, ...pages, totalPages];
		}

		return range(1, totalPages);
	};

	const pages = fetchPageNumbers();
	if (totalPages === 1) return null;

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

				{pages.map((page, index) => {
					return (
						<PageNumber
							key={page}
							page={page}
							isCurrentPage={page === currentPage}
							onPress={(e) => current(e, page)}
						/>
					);
				})}

				{/* {totalPages !== null
					? pageNumbers.map((page) => (
							<PageNumber
								key={page}
								page={page}
								isCurrentPage={page === currentPage}
								onPress={(e) => current(e, page)}
							/>
					  ))
					: null} */}

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
