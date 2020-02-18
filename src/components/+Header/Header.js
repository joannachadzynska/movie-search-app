import React from "react";
import Menu from "../+Navigation";

const Header = ({ text }) => {
	return (
		<header className='App-header'>
			<h2>{text}</h2>
			<nav>
				<Menu />
			</nav>
		</header>
	);
};

export default Header;
