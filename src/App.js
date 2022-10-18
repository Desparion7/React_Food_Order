import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvaider from './store/CartProvaider';

function App() {
	const [cartIsShow, setCartIsShow] = useState(false);

	const showCartHandler = () => {
		setCartIsShow(true);
	};
	const hideCartHandler = () => {
		setCartIsShow(false);
	};
	return (
		<CartProvaider>
			{cartIsShow && <Cart onClose={hideCartHandler}></Cart>}
			<Header showCart={showCartHandler}></Header>
			<main>
				<Meals></Meals>
			</main>
		</CartProvaider>
	);
}

export default App;
