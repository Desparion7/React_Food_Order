import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCardButton = (props) => {
	const [btnIsHighLighted, setBtnHighLighted] = useState(false);
	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;

	const numberOfCartItem = cartCtx.items.reduce((cuNumber, item) => {
		return cuNumber + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${
		btnIsHighLighted ? classes.bump : ''
	}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnHighLighted(true);
		const timer = setTimeout(() => {
			setBtnHighLighted(false);
		}, 300);
		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon></CartIcon>
			</span>
			<span> Your Cart</span>
			<span className={classes.badge}> {numberOfCartItem}</span>
		</button>
	);
};

export default HeaderCardButton;
