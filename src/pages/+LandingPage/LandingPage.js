import React from "react";

import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className='landing-page'>
			<div className='landing-page__content wrapper p-1'>
				<h1 className='landing-page__title'>Hi! Start searching movies!</h1>
				<p className='my-1'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro?
				</p>

				<Link to='/search' className='landing-page__btn button'>
					Start Searching
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
