import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ButtonGroup.css';

const ButtonGroup = ({ children, className, vertical, styles, ...attrs }) => {

	const cls = classNames(
		'btn-group',
		className,
		{ vertical }
	);

	return (
		<div
			style={styles}
			className={cls}
			{ ...attrs }
		>
			{ children }
		</div>
	)
};

ButtonGroup.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	vertical: PropTypes.bool,
	styles: PropTypes.object,
};

ButtonGroup.defaultProps = {
	children: null,
	className: '',
	vertical: false,
	styles: null,
};

export default ButtonGroup;