import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userSignOut } from "../../duck/user/actions";

const Links = ({ isOpen }) => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const onLogOut = () => {
		dispatch(userSignOut({ email: null, password: null }));
	};

	const isEmpty = (obj) => {
		for (let key in obj) {
			if (obj[key] !== "") {
				return false;
			}
		}
		return true;
	};

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
				{user.isAuthenticated ? (
					<NavLink to='/sign-out' activeClassName='active' onClick={onLogOut}>
						SignOut
					</NavLink>
				) : (
					<NavLink to='/sign-in' activeClassName='active'>
						SignIn
					</NavLink>
				)}
			</li>
		</ul>
	);
};

export default Links;
