import React from "react";
import classes from './HomePage.module.css';
import { Link } from "react-router-dom";
import H1 from "../../UI/Titles/H1/H1";
import H3 from "../../UI/Titles/H3/H3";

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

		</>
	)
};

export default HomePage;