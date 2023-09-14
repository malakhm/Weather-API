import React from "react";
import kitty from "../img/weather-icons/287.jpg"
import status from "../img/weather-icons/partlycloudy.svg"
import clear from "../img/weather-icons/clear.svg";
import fakeWeatherData from "../fakeWeatherData.json";
// variables
const Pressure = fakeWeatherData.list[0].main.pressure;
const Humidity = fakeWeatherData.list[0].main.humidity;
const tempMin = fakeWeatherData.list[0].main.temp_min;
const tempMax = fakeWeatherData.list[0].main.temp_max;
class Content extends React.Component {
  state = {
    input: ""
  };
  

  

  render() {
    return (
      <div>
        <div className="content">
        <div>
          <img src={status}></img>
          <p className="status">overcast clouds</p>
        </div>
      
          <div className="temperature">
            <h2>Temperature</h2>
            <p>{tempMin} deg C to {tempMax} deg C</p>
          </div>

          <div className="generalInfo">
            <h3>Humidity</h3>
            <p>{Humidity}%</p>
            <h3>Pressure</h3>
            <p>{Pressure}</p>
          </div>
          
        </div>

        
      

      </div>
    );
  }
}
export default Content;
