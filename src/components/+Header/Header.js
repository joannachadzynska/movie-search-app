import React from "react";
import { Link } from "react-router-dom";
import Menu from "../+Navigation";

const Header = ({ text }) => {
	return (
		// <div className='zone blue sticky'>
		<div className='container'>
			<header className='header__main wrapper p-1'>
				<div className='header__logo'>
					<Link to='/'>{text}</Link>
				</div>
				<nav>
					<Menu />
				</nav>
			</header>
		</div>
	);
};

export default Header;
