import React, { Component } from "react";
import  cloudy from "./img/weather-icons/cloudy.svg";
import Search from "./components/Search";
import Content from "./components/content";
import Details from "./components/details";
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
        <Search/>
        <Content data={fakeWeatherData}/>
        <Details/>
    
      
      </div>

      
    );
  }
}
export default App;