import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './H3.css';

const H3 = ( { children, className, styles, ...attrs }) => {

	const cls = classNames(
		'h3',
		className,
	);

	return (
		<h3
			style={styles}
			className={cls}
			{ ...attrs }
		>
			{ children }
		</h3>
	)
};

H3.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	styles: PropTypes.object,
};

H3.defaultProps = {
	children: 'Title',
	className: '',
	styles: null,
};

export default H3;