import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<ul className='menu'>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/search'>Search</Link>
			</li>
		</ul>
	);
};

export default Menu;
