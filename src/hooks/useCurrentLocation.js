import { useState, useEffect } from "react";
import getLocation from "../utils/getlocation.js";
import getWeather from "../utils/getweather.js";
import getRegion from "../utils/getregion.js";

export default function useCurrentLocation() {
  const [coords, setCoords] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        setIsLoading(true);
        const response = await getLocation();
        const geoResponse = await getWeather(response);
        const currentRegion = await getRegion(response);
        setCoords(response);
        setWeatherData(geoResponse);
        setRegion(currentRegion);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentLocation();
  }, []);

  return { coords, isLoading, weatherData, region };
}
