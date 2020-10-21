import React from "react";
import classes from './HomePage.module.css';
import { Link } from "react-router-dom";
import H1 from "../../UI/Titles/H1/H1";
import H3 from "../../UI/Titles/H3/H3";
import ButtonGroup from "../../UI/ButtonGroup/ButtonGroup";
import Button from "../../UI/Button/Button";
import Icon from "../../UI/Icon/Icon";

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

				<ButtonGroup
					styles={{
						display: 'flex',
						alignItems: 'center'
					}}
				>
					<Button
						target={'_blank'}
						href={'https://www.facebook.com/gomon.sasha'}
						className={classes.socialLink}
					>
						<Icon
							name={'facebook-square'}
							size={1.5}
							className={classes.iconSocial}
						/>
					</Button>

					<Button
						target={'_blank'}
						href={'https://vk.com/sashblastoff'}
						className={classes.socialLink}
					>
						<Icon
							name={'vk'}
							size={1.5}
							className={classes.iconSocial}
						/>
					</Button>

					<Button
						target={'_blank'}
						href={'https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%B3%D0%BE%D0%BC%D0%BE%D0%BD-9065b999/'}
						className={classes.socialLink}
					>
						<Icon
							name={'linkedin'}
							size={1.5}
							className={classes.iconSocial}
						/>
					</Button>

					<Button
						target={'_blank'}
						href={'https://www.instagram.com/28gomon/'}
						className={classes.socialLink}
					>
						<Icon
							name={'instagram'}
							size={1.5}
							className={classes.iconSocial}
						/>
					</Button>

				</ButtonGroup>

			</div>
		</>
	)
};

export default HomePage;