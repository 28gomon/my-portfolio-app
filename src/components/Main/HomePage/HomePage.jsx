import React from "react";
import classes from './HomePage.module.css';
import { Link } from "react-router-dom";
import H1 from "../../UI/Titles/H1/H1";
import H3 from "../../UI/Titles/H3/H3";
import Promo from "../../UI/Promo/Promo";
import Image from "../../UI/Image/Image";

import ps from '../../../assets/images/ps.png';
import html from '../../../assets/images/html.png';
import css from '../../../assets/images/css.png';
import js from '../../../assets/images/js.png';
import react from '../../../assets/images/react.png';
import H2 from "../../UI/Titles/H2/H2";

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

			<div className={classes.promo}>
				<H2
					styles={{textAlign: 'center'}}
				>Навыки разработки</H2>
				<div className={classes.promoList}>
					<Promo
						className={classes.homePagePromo}
					>
						<Image
							src={ps}
							alt={'Photoshop'}
							width={80}
							height={80}
						/>
						<p>Опыт работы с графикой в Photoshop</p>
					</Promo>

					<Promo
						className={classes.homePagePromo}
					>
						<Image
							src={html}
							alt={'HTML'}
							width={80}
							height={80}
						/>
						<p>Опыт работы с графикой в Photoshop</p>
					</Promo>

					<Promo
						className={classes.homePagePromo}
					>
						<Image
							src={css}
							alt={'CSS'}
							width={80}
							height={80}
						/>
						<p>Опыт работы с графикой в Photoshop</p>
					</Promo>

					<Promo
						className={classes.homePagePromo}
					>
						<Image
							src={js}
							alt={'JavaScript'}
							width={80}
							height={80}
						/>
						<p>Опыт работы с графикой в Photoshop</p>
					</Promo>

					<Promo
						className={classes.homePagePromo}
					>
						<Image
							src={react}
							alt={'React'}
							width={80}
							height={80}
						/>
						<p>Опыт работы с графикой в Photoshop</p>
					</Promo>
				</div>
			</div>
		</>
	)
};

export default HomePage;