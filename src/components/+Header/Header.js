import React from "react";
import { Link } from "react-router-dom";
import Menu from "../+Navigation";

const Header = ({ text }) => {
	return (
		<div className='zone blue sticky'>
			<header className='main-nav wrapper'>
				<h2 className='push'>
					<Link to='/'>{text}</Link>
				</h2>
				<nav>
					<Menu />
				</nav>
			</header>
		</div>
	);
};

export default Header;
