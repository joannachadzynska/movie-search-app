import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<ul className='menu'>
			<li>
				<Link to='/search'>Search</Link>
			</li>
			<li>
				<Link to='/favorite'>Favorite</Link>
			</li>
			<li>
				<Link to='/watchlist'>Watchlist</Link>
			</li>
		</ul>
	);
};

export default Menu;
