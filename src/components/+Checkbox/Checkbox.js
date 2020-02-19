import React from "react";

import "./checkbox.scss";

const Checkbox = (props) => {
	return (
		<label className='checkbox'>
			<input type='checkbox' {...props} />
			<span className='overlay'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon'>
					<polyline points='20 6 9 17 4 12' />
				</svg>
			</span>
		</label>
	);
};

export default Checkbox;
