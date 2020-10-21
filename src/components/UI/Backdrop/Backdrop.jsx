import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Backdrop.css';

const Backdrop = ({ handlerClick, className, active, ...attrs }) => {

	const cls = classNames(
		'backdrop',
		className,
		{ active }
	);

	return (
		<div
			onClick={handlerClick}
			className={cls}
		/>
	)
};

Backdrop.propTypes = {
	handlerClick: PropTypes.func,
	className: PropTypes.string,
	active: PropTypes.bool,
};

Backdrop.defaultProps = {
	handlerClick: () => {},
	className: '',
	active: false,
};

export default Backdrop;