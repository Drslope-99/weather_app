import Header from "./components/Header/Header";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import MainContent from "./components/MainContent/MainContent";
import Search from "./components/Search/Search";
import WeatherLayout from "./components/WeatherLayout/WeatherLayout";

function App() {
  return (
    <>
      <Header>
        <DropdownMenu title="Units" icon={true} />
      </Header>
      <MainContent>
        <Search />
        <WeatherLayout />
      </MainContent>
    </>
  );
}

export default App;
