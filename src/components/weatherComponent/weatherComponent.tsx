import { useEffect, useState } from "react";

import { fetchWeatherData } from "../../api/weatherApi";
import CurrentLocation from "../currentLocation/currentLocation";
import ForecastComponent from "../forecastComponent/forecastComponent";
import { LiaCloudShowersHeavySolid } from "react-icons/lia";
import { LuCloudy } from "react-icons/lu";
import { RiSunCloudyLine } from "react-icons/ri";
import { MdOutlineWbSunny } from "react-icons/md";

import "./weatherStyles.scss";

const WeatherComponent = () => {
	const [weatherData, setWeatherData] = useState<object | null>(null);
	const [location, setLocation] = useState("New York");

	/*useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchWeatherData(location);
                setWeatherData(data);
            } catch (error) {
                console.error(error);
                throw error;
            }
        };

        fetchData();
    }, []);*/

	return (
		<main>
			<CurrentLocation location={location} />
			<ForecastComponent />
			<section className="container">
				<div className="container forecast">
					<div className="container">
						<div>
							<b>Thu</b>
						</div>
						<LuCloudy className="icon" />
						<div>Cloudy</div>
						<div>High: 49°</div>
						<div>Low: 35°</div>
					</div>
					<div className="container">
						<div>
							<b>Fri</b>
						</div>
						<RiSunCloudyLine className="icon" />
						<div>Partly Cloudy</div>
						<div>High: 49°</div>
						<div>Low: 35°</div>
					</div>
					<div className="container">
						<div>
							<b>Sat</b>
						</div>
						<LiaCloudShowersHeavySolid className="icon" />
						<div>Showers</div>
						<div>High: 49°</div>
						<div>Low: 35°</div>
					</div>
					<div className="container">
						<div>
							<b>Sun</b>
						</div>
						<RiSunCloudyLine className="icon" />
						<div>Partly Cloudy</div>
						<div>High: 49°</div>
						<div>Low: 35°</div>
					</div>
					<div className="container">
						<div>
							<b>Mon</b>
						</div>
						<MdOutlineWbSunny className="icon" />
						<div>Sunny</div>
						<div>High: 49°</div>
						<div>Low: 35°</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default WeatherComponent;
