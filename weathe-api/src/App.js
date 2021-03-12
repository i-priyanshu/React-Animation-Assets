import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const response = axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=0617dafe097c4fe5b72174717211203&q=London&aqi=yes"
      )
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>{weather.location.country}</h1>
    </div>
  );
};

export default App;
