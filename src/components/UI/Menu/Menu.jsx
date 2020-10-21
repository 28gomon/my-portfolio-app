import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from "react-router-dom";

import './Menu.css';

const Menu = ( { active, className, handleClickLink, ...attrs } ) => {

	const cls = classNames(
		'menu',
		className,
		{ active },
	);

	return (
		<>
			<div
				className={ cls }
				{ ...attrs }
			>
				<div>
					<div><NavLink
						exact
						onClick={ handleClickLink }
						activeClassName={ 'active-link' }
						to={ '/' }
					>
						Главная</NavLink></div>
					<div><NavLink
						onClick={ handleClickLink }
						activeClassName={ 'active-link' }
						to={ '/about' }
					>
						Обо мне</NavLink></div>
					<div><NavLink
						onClick={ handleClickLink }
						activeClassName={ 'active-link' }
						to={ '/portfolio' }
					>
						Моя работа</NavLink></div>
					<div><NavLink
						onClick={ handleClickLink }
						activeClassName={ 'active-link' }
						to={ '/contacts' }
					>
						Контакты</NavLink></div>
				</div>
			</div>
		</>
	)
};

Menu.propTypes = {
	active: PropTypes.bool,
	className: PropTypes.string,
	handleClickLink: PropTypes.func,
};

Menu.defaultProps = {
	active: false,
	className: '',
	handleClickLink: () => {
	},
};

export default Menu;