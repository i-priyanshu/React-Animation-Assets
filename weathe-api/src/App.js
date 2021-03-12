import React, { useEffect, useState } from "react";
import axios from "axios";
import { key } from "./keys";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  const weatherInput = (e) => {
    setInput(e.target.value);
  };

  const SearchWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${input}&aqi=yes`
      )
      .then((response) => {
        setWeather(response.data);
      });
  };

  if (!weather) {
    return (
      <div className="search">
        <input onChange={weatherInput} type="text" />
        <button onClick={SearchWeather}>Search</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="search">
          <input onChange={weatherInput} type="text" />
          <button onClick={SearchWeather}>Search</button>
        </div>
        <div className="weather-info">
          <h1>{weather.location.name}</h1>
          <h2>{weather.location.region}</h2>
          <div className="conditon">
            <h3>{weather.current.condition.text}</h3>
            <img src={weather.current.condition.icon} alt="weather-img" />
            <h3>{weather.current.temp_c} *celcius</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
