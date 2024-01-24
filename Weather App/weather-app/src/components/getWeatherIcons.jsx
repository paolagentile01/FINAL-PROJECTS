import Sunny from '../assets/sunny.png';
import Snow from '../assets/snow.png';
import Cloudy from '../assets/cloudy.png';
import Rain from '../assets/rain.png';

export function getWeatherIcon (weather, width) {
    let defaultWidth = 30;
    width? defaultWidth = width: null;
    if (weather.includes("clear")) {
        return <img  className="my-1 " src={Sunny} alt="sunny.png" width={defaultWidth} />;
      } else if(weather.includes("clouds")){
        return <img className="my-1" src={Cloudy} alt="clouds.png" width={defaultWidth} />;
      }  else if(weather.includes("snow")){
        return <img  className="my-1" src={Snow} alt="snow.png" width={defaultWidth} />;
      } else if(weather.includes("rain")){
        return <img  className="my-1" src={Rain} alt="rain.png" width={defaultWidth} />;
      }
}