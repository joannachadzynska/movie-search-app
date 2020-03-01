import React from "react";

const Burger = ({ setOpenMenu, isOpen }) => {
	return (
		<div
			className={isOpen ? "burger-menu open" : "burger-menu"}
			onClick={setOpenMenu}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Burger;
