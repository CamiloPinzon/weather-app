import { LuCloudy } from 'react-icons/lu';
import './forecastCardStyles.scss';

const ForecastCardComponent = () => {

    return (
			<div className="container">
				<div>
					<b>Thu</b>
				</div>
				<LuCloudy className="icon" />
				<div>Cloudy</div>
				<div>High: 49°</div>
				<div>Low: 35°</div>
			</div>
		);
}

export default ForecastCardComponent;