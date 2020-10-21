import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Promo.css';

const Promo = ({ children, className, styles, ...attrs }) => {

	const cls = classNames(
		'promo',
		className
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

Promo.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	styles: PropTypes.object,
};

Promo.defaultProps = {
	children: 'Promo',
	className: '',
	styles: null,
};

export default Promo;