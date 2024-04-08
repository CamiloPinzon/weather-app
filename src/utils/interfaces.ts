export interface WeatherState {
	weatherData: {
		location: {
			city: string;
			woeid: number;
			country: string;
			lat: number;
			long: number;
			timezone_id: string;
		};
		current_observation: {
			pubDate: number;
			wind: {
				chill: number;
				direction: string;
				speed: number;
			};
			atmosphere: {
				humidity: number;
				visibility: number;
				pressure: number;
			};
			astronomy: {
				sunrise: string;
				sunset: string;
			};
			condition: {
				temperature: number;
				text: string;
				code: number;
			};
		};
		forecasts: [
			{
				day: string;
				date: number;
				high: number;
				low: number;
				text: string;
				code: number;
			}
		];
	};
    location: string;
}
