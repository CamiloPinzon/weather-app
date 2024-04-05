import { useEffect, useState } from "react";

import { fetchWeatherData } from "../api/weatherApi";

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState<unknown | null>(null);

    const location = 'New York';

    useEffect(() => {
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
    }, []);

    return (
        <div>
            <p>{JSON.stringify(weatherData)}</p>
            <p>{location}</p>
        </div>
    )
}

export default WeatherComponent;