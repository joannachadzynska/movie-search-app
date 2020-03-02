import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ isOpen }) => {
	return (
		<ul className={isOpen ? "show main__links" : "main__links hide"}>
			<li>
				<NavLink exact to='/search' activeClassName='active'>
					Search
				</NavLink>
			</li>
			<li>
				<NavLink to='/favorite' activeClassName='active'>
					Favorite
				</NavLink>
			</li>
			<li>
				<NavLink to='/watchlist' activeClassName='active'>
					Watchlist
				</NavLink>
			</li>
		</ul>
	);
};

export default Links;
