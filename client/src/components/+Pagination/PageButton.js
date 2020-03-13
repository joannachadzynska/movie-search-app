import React from "react";

const PageButton = ({ children, classes, onPress }) => {
	return (
		<li>
			<button onClick={onPress} className={classes}>
				{children}
			</button>
		</li>
	);
};

export default PageButton;
