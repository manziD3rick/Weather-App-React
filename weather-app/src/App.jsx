import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "you-api-key";

function App() {
  const [city, setCity] = useState("Kigali");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="app">
      <h1>⛅ Weather App</h1>
      <SearchBar onSearch={setCity} />
      {weather ? (
        <WeatherCard weather={weather} />
      ) : (
        <p>Loading or city not found...</p>
      )}
    </div>
  );
}

export default App;
