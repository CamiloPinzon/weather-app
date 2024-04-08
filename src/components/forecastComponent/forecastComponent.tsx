import CurrentForecastComponent from '../currentForecast/currentForecastComponent';
import NextForecastComponent from '../nextForecast/nextForecastComponent';

import './forecastStyles.scss';

const ForecastComponent = () => {
    return (
        <section className="container">
            <CurrentForecastComponent />
            <NextForecastComponent />
        </section>
    )
}

export default ForecastComponent