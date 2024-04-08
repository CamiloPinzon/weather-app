import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

import { fetchWeatherData } from "../../api/weatherApi";
import { setWeatherData } from "../../features/weatherSlice";
import CurrentLocation from "../currentLocation/currentLocation";
import ForecastComponent from "../forecastComponent/forecastComponent";
/*import { LiaCloudShowersHeavySolid } from "react-icons/lia";
import { LuCloudy } from "react-icons/lu";
import { RiSunCloudyLine } from "react-icons/ri";
import { MdOutlineWbSunny } from "react-icons/md";*/

import "./weatherStyles.scss";

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
                throw error;
            }
        };

        fetchData();
    }, [dispatch, location]);

	return (
		<main>
			<CurrentLocation />
			<ForecastComponent />
		</main>
	);
};

export default WeatherComponent;
