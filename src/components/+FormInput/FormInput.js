import React from "react";

const FormInput = ({ handleChange, label, ...props }) => (
	<div className='fieldset my-1'>
		{label ? <label>{label}</label> : null}
		<input className='form-input' onChange={handleChange} {...props} />
	</div>
);

export default FormInput;
