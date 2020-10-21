import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.css';

const Icon = ({ name, className, size, onClick, disabled, ...attrs }) => {

	const cls = classNames(
		'fa',
		`fa-${name}`,
		{ func: onClick },
		{ disabled },
		className
	);

	const elemSize = size ? { fontSize: `${size}rem` } : null;

	return (
		<i
			{ ...attrs }
			className={cls}
			onClick={disabled ? null : onClick}
			style={elemSize}
		/>
	)
};

Icon.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	size: PropTypes.number,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
};

Icon.defaultTypes = {
	name: '',
	className: '',
	size: null,
	onClick: null,
	disabled: false,
};

export default Icon;