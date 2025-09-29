import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import MainContent from "./components/MainContent/MainContent";
import Search from "./components/Search/Search";
import WeatherLayout from "./components/WeatherLayout/WeatherLayout";
import getLocation from "./utils/getlocation.js";
import getWeather from "./utils/getweather.js";
import getRegion from "./utils/getregion.js";

function App() {
  const [coords, setCoords] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [region, setRegion] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        setIsLoading(true);
        const response = await getLocation();
        const geoResponse = await getWeather(response);
        const currentRegion = await getRegion(response);
        console.log(currentRegion);
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

  useEffect(() => {
    console.log(coords);
    console.log(weatherData);
  }, [coords, weatherData]);

  return (
    <>
      <Header>
        <DropdownMenu title="Units" icon={true} />
      </Header>
      <MainContent>
        <Search value={search} onSearch={(e) => setSearch(e.target.value)} />
        <WeatherLayout
          data={weatherData}
          isLoading={isLoading}
          region={region}
        />
      </MainContent>
    </>
  );
}

export default App;
