import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
import axios from "axios";
class Search extends React.Component {
  state = {
    input: ""
  };
  

  // useEffectively ( () => {
  //   fetchData();
  // }, [])

  render() {

  
    return (
      <div>
        <div className="header">
          <form>
          <input type="text" placeholder="London"></input>

          <button type="submit">FIND WEATHER</button>
          </form>
        </div>


      </div>
    );
  }
}
export default Search;
