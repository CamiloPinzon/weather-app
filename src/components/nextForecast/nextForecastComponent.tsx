import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import ForecastCardComponent from "../forecastCard/forecastCardComponent";

import "./nextForecastStyles.scss";

const NextForecastComponent = () => {
	const weatherData = useSelector(
		(state: RootState) => state.weather.weatherData.forecasts
	);

	return (
		<div className="container forecast">
			{weatherData.map((forecast, idx) => (
				<ForecastCardComponent
					key={idx}
					day={forecast.day}
					high={forecast.high}
					low={forecast.low}
					text={forecast.text}
				/>
			))}
		</div>
	);
};

export default NextForecastComponent;
