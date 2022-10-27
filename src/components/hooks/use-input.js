import { useState } from 'react';

const useInput = (validate) => {
	const [inputValue, setInputValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const inputInvalid = validate(inputValue);
	const hasError = inputInvalid && isTouched;

	const inputHandler = (event) => {
		setInputValue(event.target.value);
	};
	const inputBlure = () => {
		setIsTouched(true);
	};
	const reset = () => {
		setInputValue('');
		setIsTouched(false);
	};

	return {
		value: inputValue,
		isInvalid: inputInvalid,
		inputHandler,
		inputBlure,
		hasError,
		reset,
	};
};

export default useInput;
