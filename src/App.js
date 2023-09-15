import React, { Component } from "react";
import  cloudy from "./img/weather-icons/cloudy.svg";
import Search from "./components/Search";
import Content from "./components/content";
import Details from "./components/Details";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import axios from "axios";

import { useEffect, useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Malak"
    };
  }
  // useEffect(() => { fetchData()}, []);
    
  // handleInputChange = value => {

  //   this.setState({ name: value });
  // };
  

  
  render() {
    // const [state, setState] = useState([])

    
    // const handleInputChange=(e)=>{
    //   this.setState(e.target.value)
    
    // }
    
    //     async function fetchData(){
    //       try {
    //        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q={this.state.input}&appid={62596fce3c4c7d84031e9a61b93e682e}/`,)
    //        .then((res)=>setData(res.data))
    //        console.log("succed")
            
    //       } catch (error) {
    //         console.log("something went wrong",error)
    //       }
    //     }

    
    
    return (
      <div className="app">
        <Search data={fakeWeatherData.list}/>
        <Content data={fakeWeatherData.list}/>
        <Details data={fakeWeatherData.list}/>
    
      
      </div>

      
    );
  }
}
export default App;