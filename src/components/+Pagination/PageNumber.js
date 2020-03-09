import React from "react";

const PageNumber = ({ page, isCurrentPage, onPress }) => {
	return page !== null ? (
		<li>
			<button
				onClick={onPress}
				className={isCurrentPage === page ? "active" : ""}>
				{page}
			</button>
		</li>
	) : (
		<li>
			<button>...</button>
		</li>
	);
};

export default PageNumber;
