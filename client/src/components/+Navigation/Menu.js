import React, { useState } from "react";

import Burger from "../+Burger/Burger";
import Links from "./Links";

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const setOpenMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='main__menu'>
			<Links isOpen={isOpen} />
			<Burger setOpenMenu={setOpenMenu} isOpen={isOpen} />
		</div>
	);
};

export default Menu;
