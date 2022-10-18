import React from 'react';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCardButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCardButton onClick={props.showCart}/>
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImg} alt='Meals on tabel'></img>
			</div>
		</React.Fragment>
	);
};

export default Header;
