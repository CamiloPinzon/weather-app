import "./inputStyles.scss";

interface InputComponentProps {
	value: string;
}

const InputComponent = ({ value }: InputComponentProps) => (
	<input type="text" value={value} className="inputComponent" />
);

export default InputComponent;
