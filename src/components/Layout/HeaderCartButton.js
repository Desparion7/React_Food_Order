import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCardButton = (props) => {
	const cartCtx = useContext(CartContext);

	const numberOfCartItem = cartCtx.items.reduce((cuNumber, item) => {
		return cuNumber + item.amount;
	}, 0);
	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon></CartIcon>
			</span>
			<span> Your Cart</span>
			<span className={classes.badge}> {numberOfCartItem}</span>
		</button>
	);
};

export default HeaderCardButton;
