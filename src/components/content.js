import React from "react";
import kitty from "../img/weather-icons/287.jpg"
import status from "../img/weather-icons/partlycloudy.svg"
import clear from "../img/weather-icons/clear.svg";
import axios from "axios";
class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    input: ""
  };
  

  

  render() {
    function convertToCelsius(temp){
      return parseInt(temp - 273.15);
  }
    return (
      <div>
        <div className="content">
        <div>
          <img src={status}></img>
          <p className="status">overcast clouds</p>
        </div>
      
          <div className="temperature">
            <h2>Temperature</h2>
            <p>{convertToCelsius(this.props.data[0].main.temp_min)} &deg; C to {convertToCelsius(this.props.data[0].main.temp_max)}&deg;  C</p>
          </div>

          <div className="generalInfo">
            <h3>Humidity</h3>
            <p>{this.props.data[0].main.humidity}%</p>
            <h3>Pressure</h3>
            <p>{parseInt(this.props.data[0].main.pressure)}</p>
          </div>
          
        </div>

        
      

      </div>
    );
  }
}
export default Content;
