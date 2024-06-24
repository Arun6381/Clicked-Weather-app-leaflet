import { useEffect, useState } from "react";

export default function ApiWeather({ position }) {
  const [weather, setWeather] = useState(null);
  // const apiKey = "816f59419487da0cc8ddc161272ddffd"; // Replace with your actual OpenWeatherMap API key

  useEffect(() => {
    const fetchWeather = async () => {
      const [lat, lon] = position;
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setWeather(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to get weather data:", error);
      }
    };

    fetchWeather();
  }, [position]);

  if (!weather) {
    return <div>Loading weather...</div>;
  }

  return (
    <div className="  md:grid  md:grid-cols-2  gap-5 p-4 text-2xl items-center justify-center ">
      <h2 className="text-3xl font-semibold mb-4 md:mb-0">
        Weather Information
      </h2>
      <strong >Date:{weather.current.time}</strong>
      <p className="mb-4 mt-4 md:mb-0 md:mt-0">
        Current Temperature: {weather.current.temperature_2m} °C
      </p>
      <p className="mb-4 md:mb-0">
        Current Wind_speed: {weather.current.wind_speed_10m} km
      </p>
    </div>
  );
}
