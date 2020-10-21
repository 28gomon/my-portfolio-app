import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './H1.css';

const H1 = ({ children, className, styles, ...attrs }) => {

	const cls = classNames(
		'h1',
		className,
	);

	return (
		<h1
			style={styles}
			className={cls}
			{ ...attrs }
		>
			{ children }
		</h1>
	)
};

H1.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	styles: PropTypes.object,
};

H1.defaultProps = {
	children: 'Title',
	className: '',
	styles: null,
};

export default H1;