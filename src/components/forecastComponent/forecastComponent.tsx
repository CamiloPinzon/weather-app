import CurrentForecastComponent from '../currentForecast/currentForecastComponent';

import './forecastStyles.scss';

const ForecastComponent = () => {
    return (
        <section className="container">
            <CurrentForecastComponent />
        </section>
    )
}

export default ForecastComponent