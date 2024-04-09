import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { farenheitToCelsius, milesToKilometers } from "../../utils/convertions";
import { getWeatherIcon } from "../../utils/weatherIcons";

import { LiaWindSolid } from "react-icons/lia";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { WiSolarEclipse } from "react-icons/wi";

import "./currentForecastStyles.scss";

const CurrentForecastComponent = () => {
	const weatherData = useSelector(
		(state: RootState) => state.weather.weatherData.current_observation
	);
	const { wind, atmosphere, astronomy, condition } = weatherData;

	return (
		<section className="container">
			<h2>Today</h2>
			<div className="row-container">
				<div>
					{getWeatherIcon(condition.text)}
					<div className="left-aligned">
						<div>{`${farenheitToCelsius(condition.temperature)}°`}</div>
						<div>{condition.text}</div>
					</div>
				</div>
				<div className="wind-info">
					<LiaWindSolid className="icon" />
					<div>
						<b>Wind</b>
					</div>
					<div className="left-aligned">
						<div>{`Direction: ${wind.direction}`}</div>
						<div>{`Speed: ${milesToKilometers(wind.speed)} km/h`}</div>
					</div>
				</div>
				<div className="atmosphere-info">
					<TiWeatherWindyCloudy className="icon" />
					<div>
						<b>Atmosphere</b>
					</div>
					<div className="left-aligned">
						<div>{`Humidity: ${atmosphere.humidity}%`}</div>
						<div>{`Visibility: ${atmosphere.visibility} km`}</div>
						<div>{ `Pressure: ${atmosphere.pressure} hPa`}</div>
					</div>
				</div>
				<div className="astronomy-info">
					<WiSolarEclipse className="icon" />
					<div>
						<b>Day n' Night</b>
					</div>
					<div className="left-aligned">
						<div>{ `Sunrise: ${astronomy.sunrise}`}</div>
						<div>{`Sunset: ${astronomy.sunset}`}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CurrentForecastComponent;
