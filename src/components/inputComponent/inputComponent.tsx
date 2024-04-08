import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setLocation } from "../../features/weatherSlice";
import "./inputStyles.scss";

interface InputComponentProps {
	value: string;
}

const InputComponent = ({ value }: InputComponentProps) => {
	const [inputValue, setInputValue] = useState(value);
	const dispatch = useDispatch<AppDispatch>();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	}

	useEffect(() => {
		dispatch(setLocation(inputValue));
	},[dispatch, inputValue])

	return <input type="text" value={inputValue} className="inputComponent" onChange={handleInputChange} />;
};

export default InputComponent;
