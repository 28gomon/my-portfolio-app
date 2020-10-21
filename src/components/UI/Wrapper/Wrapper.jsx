import React from 'react';
import classNames from 'classnames';
import classes from './Wrapper.module.css';

const Wrapper = ({children, className}) => {

	const cls = classNames(
		classes.wrapper,
		className
	);

	return (
		<div className={cls}>
			{children}
		</div>
	)
};

export default Wrapper;