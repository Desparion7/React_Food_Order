import classes from './ModalForm.module.css';
import useInput from '../hooks/use-input';
import CartContext from '../../store/cart-context';
import React, { useContext, useState } from 'react';

const ModalForm = (props) => {
	const [error, setError] = useState(null);
	const [confirm, setConfirm] = useState(false);
	const [order, setOrderInfo] = useState({
		name: '',
		street: '',
		postcode: '',
		city: '',
		amount: '',
	});
	const [orderedMealsConfirm, setOrdererMeals] = useState([]);

	const Ctx = useContext(CartContext);

	const fetchMealsHandler = async (lastOrderName) => {
		setError(null);
		try {
			const response = await fetch(
				'https://food-app-7c4f4-default-rtdb.firebaseio.com/Orders.json'
			);

			const data = await response.json();
			let orderInfo;
			for (const key in data) {
				if (key === lastOrderName) {
					orderInfo = {
						id: key,
						adress: data[key].adress,
						items: data[key].items,
						amount: data[key].amount,
					};
				}
			}
			if (!response.ok) {
				throw new Error('Request failed!');
			}
			const orderedMeals = orderInfo.items;

			setOrdererMeals(orderedMeals);
			setOrderInfo({
				name: orderInfo.adress[0],
				street: orderInfo.adress[1],
				postcode: orderInfo.adress[2],
				city: orderInfo.adress[3],
				amount: orderInfo.amount,
			});
		} catch (err) {
			setError('Request failed!');
			return;
		}
	};

	const sendOrder = async () => {
		try {
			const response = await fetch(
				'https://food-app-7c4f4-default-rtdb.firebaseio.com/Orders.json',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						items: Ctx.items,
						amount: Ctx.totalAmount.toFixed(2),
						adress: [nameValue, streetValue, postValue, cityValue],
					}),
				}
			);
			if (!response.ok) {
				throw new Error('Request failed!');
			}
			const data = await response.json();

			const test = data.name;

			fetchMealsHandler(test);
		} catch (err) {
			setError('Request failed!');
			return;
		}
		setConfirm(true);
		Ctx.resetCart();
	};

	const {
		value: nameValue,
		isInvalid: nameInvalid,
		inputHandler: nameHandler,
		inputBlure: nameBlure,
		hasError: nameInputIsInvalid,
		reset: nameInputReset,
	} = useInput((value) => value.trim() === '');

	const {
		value: streetValue,
		isInvalid: streetInvalid,
		inputHandler: streetHandler,
		inputBlure: streetBlure,
		hasError: streetInputIsInvalid,
		reset: streetInputReset,
	} = useInput((value) => {
		const adr = /\d/g;
		return !adr.test(value);
	});
	const {
		value: postValue,
		isInvalid: postInvalid,
		inputHandler: postHandler,
		inputBlure: postBlure,
		hasError: postInputIsInvalid,
		reset: postInputReset,
	} = useInput((value) => {
		const adr = /^[0-9]{2}-[0-9]{3}/;
		return !adr.test(value);
	});
	const {
		value: cityValue,
		isInvalid: cityInvalid,
		inputHandler: cityHandler,
		inputBlure: cityBlure,
		hasError: cityInputIsInvalid,
		reset: cityInputReset,
	} = useInput((value) => value.trim() === '');

	let formIsValid = false;

	formIsValid = !nameInvalid && !streetInvalid && !postInvalid && !cityInvalid;

	const orderHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}
		sendOrder();
		nameInputReset();
		streetInputReset();
		postInputReset();
		cityInputReset();
	};

	const orderedMealsList = orderedMealsConfirm.map((meal) => (
		<div key={meal.id}>
			<p>
				Meal: {meal.name} x {meal.amount}
			</p>
		</div>
	));

	const nameInputInvalid = nameInputIsInvalid
		? `${classes.control} ${classes.invalid}`
		: `${classes.control}`;
	const streetInputInvalid = streetInputIsInvalid
		? `${classes.control} ${classes.invalid}`
		: `${classes.control}`;
	const postInputInvalid = postInputIsInvalid
		? `${classes.control} ${classes.invalid}`
		: `${classes.control}`;
	const cityInputInvalid = cityInputIsInvalid
		? `${classes.control} ${classes.invalid}`
		: `${classes.control}`;
	return (
		<React.Fragment>
			{error && (
				<div className={classes.form}>
					<h2>{error}</h2>
					<div className={classes.actions}>
						<button onClick={props.hideCart}>OK</button>
					</div>
				</div>
			)}
			{confirm && (
				<div className={classes.form}>
					<div>
						<h2>Order send correctly :)</h2>
						<div>
							<h3>Order</h3>
							{orderedMealsList}
							<p>Total price: {order.amount} $</p>
						</div>
						<div>
							<h3>Adress</h3>
							<p>Name: {order.name}</p>
							<p>Street: {order.street}</p>
							<p>Cod: {order.postcode}</p>
							<p>City: {order.city}</p>
						</div>
						<h3>
							If you want to make andy changes please contact with us on the
							phone 000 000 000
						</h3>
						<div className={classes.actions}>
							<button onClick={props.hideCart}>Back</button>
							<button onClick={props.hideCart}>Pay</button>
						</div>
					</div>
				</div>
			)}

			{!error && !confirm && (
				<form className={classes.form} onSubmit={orderHandler}>
					<div className={nameInputInvalid}>
						<label htmlFor='name'>Your Name</label>
						<input
							type='text'
							id='name'
							value={nameValue}
							onBlur={nameBlure}
							onChange={nameHandler}
						/>
					</div>
					<div className={streetInputInvalid}>
						<label htmlFor='street'>Street</label>
						<input
							type='text'
							id='street'
							value={streetValue}
							onBlur={streetBlure}
							onChange={streetHandler}
						/>
					</div>
					<div className={postInputInvalid}>
						<label htmlFor='postal'>Postal Code</label>
						<input
							type='text'
							id='postal'
							value={postValue}
							onBlur={postBlure}
							onChange={postHandler}
						/>
					</div>
					<div className={cityInputInvalid}>
						<label htmlFor='city'>City</label>
						<input
							type='text'
							id='city'
							value={cityValue}
							onBlur={cityBlure}
							onChange={cityHandler}
						/>
					</div>
					<div className={classes.actions}>
						<button type='button' onClick={props.hideForm}>
							Back
						</button>
						<button className={classes.submit} disabled={!formIsValid}>
							Confirm
						</button>
					</div>
				</form>
			)}
		</React.Fragment>
	);
};
export default ModalForm;
