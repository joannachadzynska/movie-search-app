import React from "react";

const Burger = ({ setOpenMenu, isOpen }) => {
	return (
		<div className='burger'>
			<div
				className={isOpen ? "burger-menu open" : "burger-menu"}
				onClick={setOpenMenu}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};

export default Burger;
