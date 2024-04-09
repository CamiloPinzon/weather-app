import { LuCloudy } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiSunCloudyLine } from "react-icons/ri";
import { RiHeavyShowersLine } from "react-icons/ri";

export const getWeatherIcon = (condition: string) => {
    let icon: JSX.Element;
    const cond = condition.toLowerCase();
    switch (cond) {
        case "cloudy":
        case "overcast":
        case "mostly cloudy":
        case "scattered clouds":         
            icon = <LuCloudy className="icon" />;
            break;
        case "sunny":
        case "clear":
        case "mostly sunny":
        case "mostly clear":
        case "partly sunny":
            icon = <MdOutlineWbSunny className="icon" />;
            break;
        case 'partly cloudy':
            icon = <RiSunCloudyLine className="icon"  />;
            break;
        case 'showers':
        case 'rain':
        case 'light rain':
        case 'light rain showers':
        case 'light rain shower':
            icon = <RiHeavyShowersLine className="icon" />;
            break;
        default:
            icon = <LuCloudy className="icon" />;
    }

    return icon;
}
