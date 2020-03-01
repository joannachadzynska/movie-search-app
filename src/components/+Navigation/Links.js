import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
	return (
		<>
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
		</>
	);
};

export default Links;
