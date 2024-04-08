import "./currentWeather.scss";

interface CurrentWeatherProps {
	temperature: number;
	condition: string;
}

const CurrentWeather = ({ temperature, condition }: CurrentWeatherProps) => {
	return (
		<div className="weather">
			<span className="weather__temperature">{temperature}°</span>
			<span className="weather__condition">{condition}</span>
		</div>
	);
};

export default CurrentWeather;
