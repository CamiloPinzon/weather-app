import InputComponent from '../inputComponent/inputComponent';
import CurrentWeather from '../currentWeather/currentWeather';

import './currentLocation.scss';

interface CurrentLocationProps {
    location: string;
}

const CurrentLocation = ({ location }: CurrentLocationProps) => {
    return (
			<section className="container">
				<div className="location">
					<div className="location__form">
                        <InputComponent value={location} />
					</div>
				</div>
				<CurrentWeather temperature={0} condition="sunny" />
			</section>
		);
}

export default CurrentLocation;