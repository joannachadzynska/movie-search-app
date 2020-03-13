import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PageButton from "./PageButton";

// function* range(start, end) {
// 	while (start < end) {
// 		yield start;
// 		start += 1;
// 	}
// }

const Pagination = ({ totalPages, currentPage, pagesToShow, onPageChange }) => {
	const halfPagerCount = (totalPages - 1) / 2;

	let showPrevMore = false;
	let showNextMore = false;

	if (totalPages > pagesToShow) {
		if (currentPage > pagesToShow - halfPagerCount) {
			showPrevMore = true;
		}

		if (currentPage < totalPages - halfPagerCount) {
			showNextMore = true;
		}
	}

	const pagesLinks = [];

	if (showPrevMore && !showNextMore) {
		const startPage = totalPages - (pagesToShow - 2);
		for (let i = startPage; i < totalPages; i += 1) {
			pagesLinks.push(i);
		}
	} else if (!showPrevMore && showNextMore) {
		for (let i = 2; i < pagesToShow; i += 1) {
			pagesLinks.push(i);
		}
	} else if (showPrevMore && showNextMore) {
		const offset = Math.floor(pagesToShow / 2) - 1;

		for (let i = currentPage - offset; i <= currentPage + offset; i += 1) {
			pagesLinks.push(i);
		}
	} else {
		for (let i = 2; i < totalPages; i += 1) {
			pagesLinks.push(i);
		}
	}

	const first = () => onPageChange(1);
	const previous = () => onPageChange(currentPage - 1);
	const next = () => onPageChange(currentPage + 1);
	const last = () => onPageChange(totalPages);
	const current = (page) => onPageChange(page);

	return (
		<nav className='search__btns'>
			<ul className='pagination'>
				<PageButton
					onPress={previous}
					classes={currentPage === 1 ? "disabled" : ""}>
					<IoIosArrowBack />
				</PageButton>

				<PageButton
					onPress={first}
					classes={currentPage === 1 ? "disabled active" : ""}>
					1
				</PageButton>

				{showPrevMore && (
					<PageButton
						onPress={previous}
						classes={currentPage === 1 ? "disabled" : ""}>
						...
					</PageButton>
				)}

				{pagesLinks.map((page) => (
					<PageButton
						key={page}
						onPress={() => current(page)}
						classes={page === currentPage ? "active " : ""}>
						{page}
					</PageButton>
				))}

				{showNextMore && (
					<PageButton
						onPress={next}
						classes={currentPage === 1 ? "disabled " : ""}>
						...
					</PageButton>
				)}

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

				<PageButton
					onPress={last}
					classes={currentPage === totalPages ? "disabled active" : ""}>
					{totalPages}
				</PageButton>

				<PageButton
					onPress={next}
					classes={currentPage === 1 ? "disabled " : ""}>
					<IoIosArrowForward />
				</PageButton>
			</ul>
		</nav>
	);
};

export default Pagination;
