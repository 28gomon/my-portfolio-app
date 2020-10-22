import React, { useState } from "react";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

import Wrapper from "../UI/Wrapper/Wrapper";
import Image from "../UI/Image/Image";
import Button from "../UI/Button/Button";
import Menu from "../UI/Menu/Menu";
import Backdrop from "../UI/Backdrop/Backdrop";

import './Header.css';

const logoUrl = 'https://lh3.googleusercontent.com/ogw/ADGmqu_q3vAGzuhUN_2m1XWWizgeXwximhwL6AGbj7gM1g=s64-c-mo'

const Header = () => {

	const [ actionMenu, setActionMenu ] = useState(false);

	const handlerActionMenu = () => {
		setActionMenu(!actionMenu);
	};

	return (
		<>
			<header className={ classes.header }>

				<Wrapper className={ classes.headerWrapper }>

					<div>
						<NavLink to={ '/' } className={ classes.headerLogo }>
							<Image
								src={ logoUrl }
								alt={ 'Portfolio Alexandr Homan' }
								width={ 50 }
								height={ 50 }
								circle
							/>
						</NavLink>
					</div>

					<div>
						<Button
							active={ actionMenu }
							className={ classes.buttonMenu }
							onClick={ handlerActionMenu }
						>
							<span/>
						</Button>
					</div>

				</Wrapper>

			</header>

			<Menu
				active={ actionMenu }
				handleClickLink={ handlerActionMenu }
			/>

			<Backdrop
				active={ !actionMenu }
				handlerClick={ handlerActionMenu }
			/>
		</>
	)
};

export default Header;