import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
	const [visibleForm, setFormVisible] = useState(false);
	
	const showFormOrder = () => {
		setFormVisible(true);
	};
	const hideFormOrder = () => {
		setFormVisible(false);
	};
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};
	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				></CartItem>
			))}
		</ul>
	);
	return (
		<Modal
			hideCart={props.onClose}
			showForm={visibleForm}
			hideForm={hideFormOrder}
		>
			{cartItems}
			<div className={classes.total}>
				<span> Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>
					Close
				</button>
				{hasItems && (
					<button className={classes.button} onClick={showFormOrder}>
						Order
					</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
