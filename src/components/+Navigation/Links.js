import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Panel from "../+Panel";

const Links = ({ isOpen }) => {
	const user = useSelector((state) => state.user);

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

			<li>
				{user.data.email ? (
					<Panel />
				) : (
					<NavLink to='/sign-in' activeClassName='active'>
						signin
					</NavLink>
				)}
			</li>
		</ul>
	);
};

export default Links;
