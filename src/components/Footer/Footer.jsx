import React from "react";
import classes from './Footer.module.css';
import Wrapper from "../UI/Wrapper/Wrapper";
import Icon from "../UI/Icon/Icon";

const Footer = () => {
	return (
		<footer className={classes.footer}>

			<Wrapper
				className={classes.footerWrapper}
			>
				<div>
					<Icon
						name={'copyright'}
					/>
					{ new Date().getFullYear() }
				</div>
			</Wrapper>

		</footer>
	)
};

export default Footer;