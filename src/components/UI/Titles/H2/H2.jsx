import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './H2.css';

const H2 = ( { children, className, styles, ...attrs }) => {

	const cls = classNames(
		'h2',
		className,
	);

	return (
		<h2
			style={styles}
			className={cls}
			{ ...attrs }
		>
			{ children }
		</h2>
	)
};

H2.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	styles: PropTypes.object,
};

H2.defaultProps = {
	children: 'Title',
	className: '',
	styles: null,
};

export default H2;