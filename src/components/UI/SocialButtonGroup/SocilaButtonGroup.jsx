import React from "react";
import Button from "../Button/Button";
import classes from "../../Main/HomePage/HomePage.module.css";
import Icon from "../Icon/Icon";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const SocialButtonGroup = () => {
	return (
		<div>
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
	)
};

export default SocialButtonGroup;