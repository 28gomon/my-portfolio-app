import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.css';

const Image = ( { src, alt, className, width, height, circle, ...attrs } ) => {

	const cls = classNames(
		'img',
		className,
		{ circle }
	);

	if ( !src ) src = `https://via.placeholder.com/${ width = 100 }x${ height = 100 }`;

	return (
		<img
			src={ src }
			alt={ alt }
			width={width}
			height={height}
			className={ cls }
			{ ...attrs }
		/>
	)
};

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	circle: PropTypes.bool,
	className: PropTypes.string,
};

Image.defaultProps = {
	src: '',
	alt: 'Image alt!',
	width: null,
	height: null,
	circle: false,
	className: '',
};

export default Image;