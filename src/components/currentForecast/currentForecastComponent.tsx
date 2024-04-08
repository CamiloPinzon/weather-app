import { LiaCloudShowersHeavySolid, LiaWindSolid } from 'react-icons/lia';
import { TiWeatherWindyCloudy } from 'react-icons/ti';
import { WiSolarEclipse } from 'react-icons/wi';

import './currentForecastStyles.scss';

const CurrentForecastComponent = () => {

    return (
			<section className="container">
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
			</section>
		);
}

export default CurrentForecastComponent;