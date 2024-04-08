import { WeatherState } from "./interfaces";

export const initialState: WeatherState = {
	weatherData: {
		location: {
			city: "",
			woeid: 0,
			country: "",
			lat: 0,
			long: 0,
			timezone_id: "",
		},
		current_observation: {
			pubDate: 0,
			wind: {
				chill: 0,
				direction: "",
				speed: 0,
			},
			atmosphere: {
				humidity: 0,
				visibility: 0,
				pressure: 0,
			},
			astronomy: {
				sunrise: "",
				sunset: "",
			},
			condition: {
				temperature: 0,
				text: "",
				code: 0,
			},
		},
		forecasts: [
			{
				day: "",
				date: 0,
				high: 0,
				low: 0,
				text: "",
				code: 0,
			},
		],
	},
	location: "New York",
};
