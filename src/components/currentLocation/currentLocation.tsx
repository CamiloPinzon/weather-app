import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import InputComponent from "../inputComponent/inputComponent";
import CurrentWeather from "../currentWeather/currentWeather";

import { farenheitToCelsius } from "../../utils/convertions";

import "./currentLocation.scss";

const CurrentLocation = () => {
	const location = useSelector((state: RootState) => state.weather.location);
	const weather = useSelector(
		(state: RootState) =>
			state.weather.weatherData.current_observation.condition
	);
	const { temperature, text } = weather;
	return (
		<section className="container">
			<div className="location">
				<div className="location__form">
					<InputComponent value={location} />
				</div>
			</div>
			<CurrentWeather
				temperature={farenheitToCelsius(temperature)}
				condition={text}
			/>
		</section>
	);
};

export default CurrentLocation;
