import React from "react";
import cloudy from "../img/weather-icons/cloudy.svg"


class Details extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
        
        <div className="details">
          <div className="container">
            <p>03:00</p>
            <img src={cloudy}></img>
            <p>8deg C</p>
          </div>

          <div className="container">
            <p>06:00</p>
            <img src={cloudy}></img>
            <p>8deg C</p>
          </div>

          <div className="container">
            <p>09:00</p>
            <img src={cloudy}></img>
            <p>8deg C</p>
          </div>


          <div className="container">
            <p>12:00</p>
            <img src={cloudy}></img>
            <p>8deg C</p>
          </div>


          <div className="container">
            <p>15:00</p>
            <img src={cloudy}></img>
            <p>8deg C</p>
          </div>

          <div className="container">
            <p>18:00</p>
            <img src={cloudy}></img>
            <p>8deg C</p>
          </div>

          <div className="container">
            <p>21:00</p>
            <img src={cloudy}></img>
            <p>8deg C</p>
          </div>

        </div>
        
      

      </div>
    );
  }
}
export default Details;
