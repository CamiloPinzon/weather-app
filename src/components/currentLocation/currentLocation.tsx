import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import InputComponent from '../inputComponent/inputComponent';
import CurrentWeather from '../currentWeather/currentWeather';

import './currentLocation.scss';

const CurrentLocation = () => {
	const location = useSelector((state: RootState) => state.weather.location);
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