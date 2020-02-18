import React from "react";
import Menu from "../+Navigation";

const Header = ({ text }) => {
	console.log(window.pageYOffset);

	return (
		<div className='zone blue sticky'>
			<header className='main-nav wrapper'>
				<h2 className='push'>{text}</h2>
				<nav>
					<Menu />
				</nav>
			</header>
		</div>
	);
};

export default Header;
