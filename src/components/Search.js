import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
        <div className="header">
          <form>
          <input type="text" placeholder="London"></input>

          <button  type="submit">FIND WEATHER</button>
          </form>
        </div>

        
      

      </div>
    );
  }
}
export default Search;
