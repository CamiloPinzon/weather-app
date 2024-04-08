import { useEffect, useState } from "react";

import { fetchWeatherData } from "../../api/weatherApi";
import CurrentLocation from "../currentLocation/currentLocation";
import { LiaCloudShowersHeavySolid, LiaWindSolid } from "react-icons/lia";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { WiSolarEclipse } from "react-icons/wi";
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
			<section className="container">
				<div className="container">
					<h2>Today</h2>
					<div className="row-container">
						<div>
							<LiaCloudShowersHeavySolid className="icon" />
							<div className="left-aligned">
								<div>23°</div>
								<div>Showers</div>
							</div>
						</div>
						<div className="wind-info">
							<LiaWindSolid className="icon" />
							<div>
								<b>Wind</b>
							</div>
							<div className="left-aligned">
								<div>Direction: North</div>
								<div>Speed: 6.2 m/h</div>
							</div>
						</div>
						<div className="atmosphere-info">
							<TiWeatherWindyCloudy className="icon" />
							<div>
								<b>Atmosphere</b>
							</div>
							<div className="left-aligned">
								<div>Humidity: 60%</div>
								<div>Visibility: 10 km</div>
								<div>Pressure: 1010 hPa</div>
							</div>
						</div>
						<div className="astronomy-info">
							<WiSolarEclipse className="icon" />
							<div>
								<b>Day n' Night</b>
							</div>
							<div className="left-aligned">
								<div>Sunrise: 7:00 am</div>
								<div>Sunset: 6:00pm</div>
							</div>
						</div>
					</div>
				</div>
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
