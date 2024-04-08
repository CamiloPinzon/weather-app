import { farenheitToCelsius } from "../../utils/convertions";

import { LuCloudy } from "react-icons/lu";
import "./forecastCardStyles.scss";

interface ForecastCardProps {
	day: string;
	high: number;
	low: number;
	text: string;
}

const ForecastCardComponent = ({day, high, low, text}: ForecastCardProps) => {
	return (
		<div className="container">
			<div>
				<b>{day}</b>
			</div>
			<LuCloudy className="icon" />
			<div>{text}</div>
			<div>{`High: ${farenheitToCelsius(high)}°`}</div>
			<div>{`Low: ${farenheitToCelsius(low)}°`}</div>
		</div>
	);
};

export default ForecastCardComponent;
