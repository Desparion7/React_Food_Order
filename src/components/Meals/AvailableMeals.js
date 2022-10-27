import React, { useCallback, useEffect, useState } from 'react';
import calsses from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
	const [newList, setNewList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchMealsHandler = useCallback(async () => {
		setError(null);
		try {
			const response = await fetch(
				'https://food-app-7c4f4-default-rtdb.firebaseio.com/Meals.json'
			);

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const data = await response.json();

			const loadedMealsList = [];
			for (const key in data) {
				loadedMealsList.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				});
			}
			setNewList(loadedMealsList);
		} catch (error) {
			setIsLoading(false)
			setError(error);
			console.log('object');
		}

		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMealsHandler();
	}, [fetchMealsHandler]);

	const mealsList = newList.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		></MealItem>
	));

	let content = <p>No meals</p>;

	if (mealsList.length > 0) {
		content = <ul>{mealsList}</ul>;
	}
	if (error) {
		content = <p>Something went wrong!</p>;
	}
	if (isLoading) {
		content = <p>Loading please wait...</p>;
	}

	return (
		<section className={calsses.meals}>
			<Card>{content}</Card>
		</section>
	);
};

export default AvailableMeals;
