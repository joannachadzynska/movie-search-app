import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<ul className='menu'>
			<li>
				<Link to='/search'>Search</Link>
			</li>
			<li>
				<Link to='/watched'>Watched</Link>
			</li>
			<li>
				<Link to='/to-watch'>To watch</Link>
			</li>
		</ul>
	);
};

export default Menu;
