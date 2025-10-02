import { useState } from "react";
import Header from "./components/Header/Header";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import MainContent from "./components/MainContent/MainContent";
import Search from "./components/Search/Search";
import WeatherLayout from "./components/WeatherLayout/WeatherLayout";
import useCurrentLocation from "./hooks/useCurrentLocation.js";

function App() {
  const { isLoading, weatherData, region } = useCurrentLocation();
  const [search, setSearch] = useState("");

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
