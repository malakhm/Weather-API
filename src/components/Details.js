import React, { useEffect } from "react";
import cloudy from "../img/weather-icons/cloudy.svg"
import clear from "../img/weather-icons/clear.svg"
import drizzle from "../img/weather-icons/drizzle.svg"
import fog from "../img/weather-icons/fog.svg"
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
import partlycloudy from "../img/weather-icons/partlycloudy.svg"
import rain from "../img/weather-icons/rain.svg"
import snow from "../img/weather-icons/snow.svg"
import storm from "../img/weather-icons/storm.svg"
import axios from "axios";






// a function that converts k to c



class Details extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    input: "",
    data:[]
  };


  
// ctrl +  shift +u => 2401 +enter 
  render() {
    console.log(this.props.data[0].dt_txt);

      // a function to display the correct image 

    function displayImage(imageType){
 
      switch (imageType){
        case "Clear": return clear;break;
        case "Rain": return rain;break;  
        case "Clouds": return cloudy;break;
    
      }
    
    }

    // a function that converts k to c
    function convertToCelsius(temp){
      return parseInt(temp - 273.15);
  }

  // a function to get time from the json file
  function getTime(t){
    const realTime = t.split(" ")[1].slice(0,5);
    return realTime;
  }
  
    return (
     
      

        // <div className="details">
        //   {
        //     this.props.data.map(each => {
        //       <div className="container">
        //         <p>03:00</p>
        //         <img src={displayImage(this.props.data[0].weather[0].main)}></img>
        //         <p>{convertToCelsius(this.props.data[1].main.temp)}C</p>
        //       </div>
        //       )
        //     }
              
        //   }
        //   </div>


        // ------------------------------------------------------------

        <div className="details">
          <div className="container">
            <p>{getTime(this.props.data[5].dt_txt)}</p>

            <img src={displayImage(this.props.data[5].weather[0].main)}></img>
            <p>{convertToCelsius(this.props.data[5].main.temp)}&deg; C</p>
          </div>

          <div className="container">
          <p>{getTime(this.props.data[6].dt_txt)}</p>
            <img src={displayImage(this.props.data[6].weather[0].main)}></img>
            <p>{convertToCelsius(this.props.data[6].main.temp)} C</p>
          </div>

          <div className="container">
          <p>{getTime(this.props.data[7].dt_txt)}</p>
            <img src={displayImage(this.props.data[7].weather[0].main)}></img>
            <p>{convertToCelsius(this.props.data[7].main.temp)}  C</p>
          </div>


          <div className="container">
          <p>{getTime(this.props.data[8].dt_txt)}</p>
            <img src={displayImage(this.props.data[8].weather[0].main)}></img>
            <p>{convertToCelsius(this.props.data[8].main.temp)}  C</p>
          </div>


          <div className="container">
          <p>{getTime(this.props.data[9].dt_txt)}</p>
            <img src={displayImage(this.props.data[9].weather[0].main)}></img>
            <p>{convertToCelsius(this.props.data[9].main.temp)} C</p>
          </div>

          <div className="container">
          <p>{getTime(this.props.data[10].dt_txt)}</p>
            <img src={displayImage(this.props.data[10].weather[0].main)}></img>
            <p>{convertToCelsius(this.props.data[10].main.temp)}  C</p>
          </div>

          <div className="container">
          <p>{getTime(this.props.data[11].dt_txt)}</p>
            <img src={displayImage(this.props.data[11].weather[0].main)}></img>
            <p>{convertToCelsius(this.props.data[11].main.temp)}  C</p>
          </div>

        </div>

    );
  }
}
export default Details;
