import ForecastCardComponent from '../forecastCard/forecastCardComponent';

import './nextForecastStyles.scss';

const NextForecastComponent = () => {

    return (
			<div className="container forecast">
				<ForecastCardComponent />
				<ForecastCardComponent />
				<ForecastCardComponent />
				<ForecastCardComponent />
				<ForecastCardComponent />
			</div>
		);
}

export default NextForecastComponent;

