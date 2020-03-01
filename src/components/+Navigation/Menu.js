import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Burger from "../+Burger/Burger";
import Links from "./Links";

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const setOpenMenu = () => {
		setIsOpen(!isOpen);
	};

	const setMenu = () => {
		let menu;
		if (window.innerWidth < 768) {
			menu = <Burger setOpenMenu={setOpenMenu} isOpen={isOpen} />;
		} else {
			menu = <Links />;
		}

		return menu;
	};

	return <ul className='main__menu'>{setMenu()}</ul>;
};

export default Menu;
