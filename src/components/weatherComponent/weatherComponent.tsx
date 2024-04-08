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
		</main>
	);
};

export default WeatherComponent;
