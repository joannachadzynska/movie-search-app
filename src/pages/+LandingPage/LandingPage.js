import React from "react";
import imgBig from "../../assets/images/landing-page-large.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className='landing-page'>
			<img className='cover' src={imgBig} alt='movie tape' />
			<div className='coverText'>
				<h1>Making the world a better place</h1>
				<button>
					<Link to='/search'>Start Searching</Link>
				</button>
			</div>
		</div>
	);
};

export default LandingPage;
