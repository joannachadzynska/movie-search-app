import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Burger from "../+Burger/Burger";
import Links from "./Links";

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const setOpenMenu = () => {
		setIsOpen(!isOpen);
		if (window.innerWidth >= 800) {
			setIsOpen(false);
		}
	};

	return (
		<div className='main__menu'>
			<Links isOpen={isOpen} />
			<Burger setOpenMenu={setOpenMenu} isOpen={isOpen} />
		</div>
	);
};

export default Menu;
