import React from "react";
import classes from './HomePage.module.css';
import { Link } from "react-router-dom";
import H1 from "../../UI/Titles/H1/H1";
import H3 from "../../UI/Titles/H3/H3";
// import ButtonGroup from "../../UI/ButtonGroup/ButtonGroup";
// import Button from "../../UI/Button/Button";
// import Icon from "../../UI/Icon/Icon";
import SocialButtonGroup from "../../UI/SocialButtonGroup/SocilaButtonGroup";

const HomePage = () => {
	return (
		<>
			<div className={ classes.homePage }>

				<div>
					<H3>Привет! Меня зовут Саша.</H3>
					<H1>Я фрилансер, frontend разработчик React Redux.</H1>

					<div className={ classes.homePageBtnGroup }>
						<Link to={ '/portfolio' }>Мои работы</Link>
						<Link to={ '/contacts' }>Контакты</Link>
					</div>
				</div>

				<div>
					Image
				</div>

			</div>

			<div className={classes.socialButton}>

				<SocialButtonGroup/>

			</div>
		</>
	)
};

export default HomePage;