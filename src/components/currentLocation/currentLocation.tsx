import InputComponent from '../inputComponent/inputComponent';

import './currentLocation.scss';

interface CurrentLocationProps {
    location: string
}

const CurrentLocation = ({ location }: CurrentLocationProps) => {
    return (
			<section className="container">
				<div className="location">
					<div className="location__form">
                        <InputComponent value={location} />
					</div>
				</div>
				<div className="weather">
					<span className="weather__temperature">23°</span>
					<span className="weather__condition">Showers</span>
				</div>
			</section>
		);
}

export default CurrentLocation;