import React from "react";
import kitty from "../img/weather-icons/287.jpg"
import clear from "../img/weather-icons/clear.svg";

class Content extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
        <div className="content">
        <div>
          <img src={kitty}></img>
          <p className="status">overcast clouds</p>
        </div>
      
          <div className="temperature">
            <h2>Temperature</h2>
            <p>10 deg to 11 deg C</p>
          </div>

          <div className="generalInfo">
            <h3>Humidity</h3>
            <p>78%</p>
            <h3>Pressure</h3>
            <p>1008.48</p>
          </div>
          
        </div>

        
      

      </div>
    );
  }
}
export default Content;
