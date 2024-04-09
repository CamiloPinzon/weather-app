import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

import { fetchWeatherData } from "../../api/weatherApi";
import { setWeatherData } from "../../features/weatherSlice";
import CurrentLocation from "../currentLocation/currentLocation";
import ForecastComponent from "../forecastComponent/forecastComponent";

import "./weatherStyles.scss";
import { initialState } from "../../utils/initialState";

const WeatherComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useSelector((state: RootState) => state.weather.location);

	useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchWeatherData(location);
                dispatch(setWeatherData(data));
            } catch (error) {
                console.error(error);
                dispatch(setWeatherData(initialState.weatherData));
            }
        };

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

	return (
		<main>
			<CurrentLocation />
			<ForecastComponent />
		</main>
	);
};

export default WeatherComponent;
