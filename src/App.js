import React, { Component } from "react";
import kitty from "./img/weather-icons/287.jpg"
import kitten from "./img/weather-icons/kitten.jpg"
import  cloudy from "./img/weather-icons/cloudy.svg"
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Malak"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">

        <div className="header">
          <form>
          <input type="text" placeholder="London"></input>

          <button  type="submit">FIND WEATHER</button>
          </form>
        </div>

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

export default App;
